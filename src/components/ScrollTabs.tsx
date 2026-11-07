"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Pill-shaped tab bar that stays on one line. When the tabs don't fit, it scrolls
 * horizontally and shows a fade + arrow on whichever side has hidden tabs.
 * The selected tab (aria-selected="true") is kept in view. RTL-aware.
 */
export function ScrollTabs({ children, activeKey, label }: { children: ReactNode; activeKey: string; label?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const first = useRef(true);
  const [edges, setEdges] = useState({ start: false, end: false });

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const pos = Math.abs(el.scrollLeft); // RTL scrollLeft runs 0 → negative
    setEdges({ start: pos > 4, end: pos < max - 4 });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    el.addEventListener("scroll", update, { passive: true });
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", update);
    };
  }, [update]);

  // Keep the selected tab visible (skip first render so the page doesn't jump on load)
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const el = ref.current;
    const tab = el?.querySelector<HTMLElement>('[aria-selected="true"]');
    if (!el || !tab) return;
    // Visual delta works the same in LTR and RTL
    const a = el.getBoundingClientRect();
    const b = tab.getBoundingClientRect();
    el.scrollBy({ left: b.left + b.width / 2 - (a.left + a.width / 2), behavior: "smooth" });
  }, [activeKey]);

  const nudge = (towardEnd: boolean) => {
    const el = ref.current;
    if (!el) return;
    const rtl = getComputedStyle(el).direction === "rtl";
    const amount = el.clientWidth * 0.6 * (towardEnd ? 1 : -1) * (rtl ? -1 : 1);
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  const Arrow = ({ side }: { side: "start" | "end" }) => {
    const show = edges[side];
    // "start" is the right side in RTL, so the icon must point outward on that side
    const Icon = side === "start" ? ChevronLeft : ChevronRight;
    return (
      <div
        aria-hidden={!show}
        className={`pointer-events-none absolute inset-y-0 z-10 flex w-16 items-center transition-opacity duration-300 ${
          side === "start"
            ? "start-0 justify-start bg-linear-to-r from-steel-50 via-steel-50/90 to-transparent ps-1.5 rtl:bg-linear-to-l"
            : "end-0 justify-end bg-linear-to-l from-steel-50 via-steel-50/90 to-transparent pe-1.5 rtl:bg-linear-to-r"
        } ${show ? "opacity-100" : "opacity-0"}`}
      >
        <button
          type="button"
          tabIndex={show ? 0 : -1}
          onClick={() => nudge(side === "end")}
          aria-label={side === "end" ? "Scroll forward" : "Scroll back"}
          className={`flex size-9 items-center justify-center rounded-full bg-surface text-fg shadow-md ring-1 ring-steel-100 transition hover:bg-brand-500 hover:text-white ${
            show ? "pointer-events-auto" : ""
          }`}
        >
          <Icon className="size-4 rtl:-scale-x-100" />
        </button>
      </div>
    );
  };

  return (
    <div className="relative mx-auto w-fit max-w-full overflow-hidden rounded-full border border-steel-100 bg-steel-50">
      <Arrow side="start" />
      <div
        ref={ref}
        role="tablist"
        aria-label={label}
        className="isolate flex gap-1 overflow-x-auto p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      <Arrow side="end" />
    </div>
  );
}

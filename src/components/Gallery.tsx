"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/** caption = overlay on the tile; title/lines = card text rendered below the tile. */
export type GalleryImage = { src: string; alt: string; caption?: string; title?: string; subtitle?: string; lines?: string[] };

export function Gallery({
  images,
  className = "grid grid-cols-2 gap-4 lg:grid-cols-3",
  aspect = "aspect-[4/3]",
  contain = false,
}: {
  images: GalleryImage[];
  className?: string;
  aspect?: string;
  contain?: boolean;
}) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (index === null) return;
    const rtl = document.documentElement.dir === "rtl";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(rtl ? -1 : 1);
      if (e.key === "ArrowLeft") step(rtl ? 1 : -1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  return (
    <>
      <div className={className}>
        {images.map((img, i) => {
          const tile = (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            className={`group relative w-full overflow-hidden rounded-2xl ${contain ? "bg-steel-50" : "bg-steel-100"} ${aspect}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 33vw, 50vw"
              className={`${contain ? "object-contain p-3" : "object-cover"} transition-transform duration-700 group-hover:scale-105`}
            />
            <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition group-hover:bg-ink/40">
              <ZoomIn className="size-8 text-white opacity-0 transition group-hover:opacity-100" />
            </span>
            {img.caption && (
              <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/90 to-transparent p-4 pt-10 text-start text-sm font-semibold text-white">
                {img.caption}
              </span>
            )}
          </button>
          );
          if (!img.title) return tile;
          return (
            <div key={img.src} className="flex flex-col rounded-3xl border border-steel-100 bg-surface p-3">
              {tile}
              <div className="px-2 pt-4 pb-2">
                <h3 className="font-bold text-fg">{img.title}</h3>
                {img.subtitle && <p className="mt-1 text-sm text-accent">{img.subtitle}</p>}
                {img.lines && img.lines.length > 0 && (
                  <ul className="mt-3 space-y-1 text-sm text-steel-500">
                    {img.lines.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
          >
            <button type="button" onClick={close} className="absolute end-4 top-4 rounded-full p-3 text-white hover:bg-white/10" aria-label="Close">
              <X className="size-7" />
            </button>
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  className="absolute start-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
                  aria-label="Previous"
                >
                  <ChevronLeft className="size-6 rtl:rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  className="absolute end-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
                  aria-label="Next"
                >
                  <ChevronRight className="size-6 rtl:rotate-180" />
                </button>
              </>
            )}
            <motion.figure
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative flex h-[80vh] w-full max-w-6xl flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex-1">
                <Image src={images[index].src} alt={images[index].alt} fill sizes="100vw" className="object-contain" />
              </div>
              {(images[index].caption || images.length > 1) && (
                <figcaption className="mt-4 flex justify-between text-sm text-white/70">
                  <span>{images[index].caption}</span>
                  <span dir="ltr">
                    {index + 1} / {images.length}
                  </span>
                </figcaption>
              )}
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import type { ReactNode } from "react";

export const metadata = {
  title: "شركة سان المتحدة للمقاولات العامة | San United General Contracting",
};

export default function RootRedirectLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, background: "#0a1424" }}>{children}</body>
    </html>
  );
}

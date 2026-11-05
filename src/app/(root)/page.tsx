/** "/" → "/ar/" (static export has no middleware, so redirect in the page itself). */
export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/ar/" />
      <link rel="canonical" href="/ar/" />
      <script dangerouslySetInnerHTML={{ __html: "location.replace('/ar/')" }} />
      <a href="/ar/" style={{ color: "#fff", fontFamily: "sans-serif", display: "block", padding: 24 }}>
        شركة سان المتحدة للمقاولات العامة
      </a>
    </>
  );
}

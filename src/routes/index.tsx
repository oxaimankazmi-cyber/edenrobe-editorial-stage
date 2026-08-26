import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader } from "@/components/site/Loader";
import { Cursor } from "@/components/site/Cursor";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Collections } from "@/components/site/Collections";
import { Editorial } from "@/components/site/Editorial";
import { Products } from "@/components/site/Products";
import { Family } from "@/components/site/Family";
import { Depth } from "@/components/site/Depth";
import { Statement } from "@/components/site/Statement";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

const title = "edenrobe — Autumn / Winter 26";
const description =
  "Modern Pakistani fashion from edenrobe: lawn, pret, formals, menswear, kids and fragrance, cut for everyday and occasion.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);
  useReveal();

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Collections />
        <Editorial />
        <Products />
        <Family />
        <Depth />
        <Statement />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

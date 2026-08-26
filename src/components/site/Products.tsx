import { useState } from "react";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import craft from "@/assets/craft-detail.jpg";
import women from "@/assets/women.jpg";
import men from "@/assets/men.jpg";
import kids from "@/assets/kids.jpg";

const PRODUCTS = [
  { name: "Meher Embroidered Kurta", cat: "Women / Pret", price: "PKR 8,490", src: p1, alt: women },
  { name: "Raat Silk Dupatta", cat: "Women / Formals", price: "PKR 5,950", src: p2, alt: craft },
  { name: "Sahil Wool Waistcoat", cat: "Men / Tailoring", price: "PKR 12,200", src: p3, alt: men },
  { name: "Nomi Printed Scarf", cat: "Accessories", price: "PKR 3,400", src: p4, alt: kids },
];

export function Products() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
          <h2 className="reveal display text-[12vw] leading-[0.85] md:text-[6vw]" data-reveal>
            Four to start
          </h2>
          <p className="reveal label text-muted-foreground" data-reveal data-reveal-delay="100">
            Selected by the studio
          </p>
        </div>

        <ul className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <li
              key={p.name}
              data-reveal
              data-reveal-delay={i * 80}
              className={`reveal group ${i % 2 === 1 ? "lg:mt-20" : ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={p.src}
                  alt={p.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                />
                <img
                  src={p.alt}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="absolute inset-0 h-full w-full scale-[1.04] object-cover opacity-0 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100 group-hover:opacity-100"
                />
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="label absolute inset-x-0 bottom-0 translate-y-full bg-primary py-4 text-primary-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 focus-visible:translate-y-0"
                >
                  {open === i ? "Added" : "Quick add"}
                </button>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <h3 className="font-display text-lg leading-snug">{p.name}</h3>
                <span className="text-sm tabular-nums text-muted-foreground">
                  {p.price}
                </span>
              </div>
              <p className="label mt-2 text-muted-foreground">{p.cat}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

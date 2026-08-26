import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import women from "@/assets/women.jpg";
import men from "@/assets/men.jpg";
import kids from "@/assets/kids.jpg";
import hero from "@/assets/hero-second.jpg";

gsap.registerPlugin(ScrollTrigger);

const PANELS = [
  { label: "Women", src: women, line: "Unstitched, pret, formals" },
  { label: "Men", src: men, line: "Kurta, shalwar, tailored" },
  { label: "Boys", src: kids, line: "Festive and everyday" },
  { label: "Girls", src: hero, line: "Frocks, kurtis, coords" },
];

export function Family() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      // Horizontal scroll only where there is room; mobile keeps a vertical read.
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const el = track.current;
        if (!el) return;
        const distance = el.scrollWidth - window.innerWidth;
        const tween = gsap.to(el, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance + window.innerHeight * 0.5}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
        gsap.utils.toArray<HTMLElement>(".family-img").forEach((img) => {
          gsap.fromTo(
            img,
            { scale: 1.18, xPercent: 4 },
            {
              scale: 1,
              xPercent: -4,
              ease: "none",
              scrollTrigger: { trigger: img, containerAnimation: tween, start: "left right", end: "right left", scrub: true },
            },
          );
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-secondary text-secondary-foreground md:h-svh">
      <div ref={track} className="flex flex-col md:h-full md:w-max md:flex-row md:items-stretch">
        <div className="flex shrink-0 flex-col justify-center px-5 py-24 md:w-[46vw] md:px-16 md:py-0">
          <p className="label mb-8 text-primary">One label, four wardrobes</p>
          <h2 className="display text-[14vw] leading-[0.86] md:text-[5.6vw]">
            Dressed
            <br />
            together
          </h2>
          <p className="mt-8 max-w-[38ch] text-sm leading-relaxed text-secondary-foreground/70">
            The same cloth, the same finishing, sized from a two-year-old's kurta
            to a father's sherwani. Most families leave a store with four bags.
          </p>
        </div>

        {PANELS.map((p, i) => (
          <article
            key={p.label}
            className="relative shrink-0 md:h-full md:w-[34vw]"
          >
            <div className="relative aspect-[3/4] overflow-hidden md:aspect-auto md:h-full">
              <img
                src={p.src}
                alt={`${p.label} at edenrobe`}
                loading="lazy"
                className="family-img h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-secondary/20" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-8">
                <div>
                  <h3 className="display text-[11vw] leading-none text-background md:text-[3.6vw]">
                    {p.label}
                  </h3>
                  <p className="label mt-3 text-background/75">{p.line}</p>
                </div>
                <span className="label text-background/60">0{i + 1}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

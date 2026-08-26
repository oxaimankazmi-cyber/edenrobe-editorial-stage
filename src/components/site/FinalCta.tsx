import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import campaign from "@/assets/final-campaign.jpg";

gsap.registerPlugin(ScrollTrigger);

export function FinalCta() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".final-img",
          { scale: 1.2, yPercent: -6 },
          {
            scale: 1,
            yPercent: 6,
            ease: "none",
            scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 1 },
          },
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-svh w-full overflow-hidden">
      <img
        src={campaign}
        alt="edenrobe family campaign in a sandstone courtyard"
        width={1920}
        height={1088}
        loading="lazy"
        className="final-img absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-secondary/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
        <p className="reveal label mb-8 text-background/80" data-reveal>
          Autumn / Winter 26
        </p>
        <h2
          className="reveal display max-w-[16ch] text-[14vw] leading-[0.88] text-background md:text-[7vw]"
          data-reveal
          data-reveal-delay="90"
        >
          The whole house, dressed
        </h2>
        <a
          href="#top"
          data-reveal
          data-reveal-delay="180"
          className="reveal label mt-12 bg-primary px-9 py-5 text-primary-foreground transition-colors duration-500 hover:bg-background hover:text-foreground"
        >
          Shop the collection
        </a>
      </div>
    </section>
  );
}

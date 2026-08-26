import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "@/assets/hero-campaign.jpg";
import heroSecond from "@/assets/hero-second.jpg";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      // Entrance — camera settles into the frame
      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .from(".hero-frame", { clipPath: "inset(18% 22% 18% 22%)", duration: 1.6 }, 0)
        .from(".hero-plate", { scale: 1.22, duration: 1.8 }, 0)
        .from(
          ".hero-line span",
          { yPercent: 115, duration: 1.4, stagger: 0.08 },
          0.25,
        )
        .from(".hero-meta", { opacity: 0, y: 18, duration: 1, stagger: 0.1 }, 0.7);

      // Scroll-driven camera move: layers travel at distinct rates and the
      // campaign plate cross-dissolves into the next editorial frame.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=140%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(".hero-plate", { scale: 1.16, yPercent: -8, ease: "none" }, 0)
        .to(".hero-plate-next", { opacity: 1, scale: 1.04, ease: "none" }, 0.15)
        .to(".hero-title", { yPercent: -145, ease: "none" }, 0)
        .to(".hero-sub", { yPercent: -320, opacity: 0, ease: "none" }, 0)
        .to(".hero-meta", { yPercent: -60, opacity: 0, ease: "none" }, 0)
        .to(".hero-frame", { clipPath: "inset(6% 6% 10% 6%)", ease: "none" }, 0.2)
        .to(".hero-veil", { opacity: 0.42, ease: "none" }, 0.1);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="top" className="relative h-svh w-full overflow-hidden">
      <div
        className="hero-frame absolute inset-0"
        style={{ clipPath: "inset(0% 0% 0% 0%)" }}
      >
        <img
          src={heroImg}
          alt="edenrobe autumn campaign: ivory embroidered lawn suit with a terracotta dupatta"
          width={1280}
          height={1600}
          className="hero-plate absolute inset-0 h-full w-full object-cover object-[58%_center]"
        />
        <img
          src={heroSecond}
          alt="edenrobe evening wear: charcoal embroidered kurta in warm daylight"
          width={1280}
          height={1600}
          loading="lazy"
          className="hero-plate-next absolute inset-0 h-full w-full scale-110 object-cover object-[52%_center] opacity-0"
        />
        <div className="hero-veil absolute inset-0 bg-secondary/25" />
      </div>

      {/* Foreground editorial type — moves independently of the plate */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end px-5 pb-10 md:px-10 md:pb-14">
        <p className="hero-meta label mb-6 text-background/80 md:mb-8">
          Autumn / Winter 26 — Volume One
        </p>

        <h1 className="hero-title display text-background">
          <span className="hero-line block overflow-hidden">
            <span className="block pb-[0.1em] text-[19vw] leading-[0.82] md:text-[13.5vw]">
              Everyday
            </span>
          </span>
          <span className="hero-line block overflow-hidden md:ml-[26vw]">
            <span className="block pb-[0.1em] text-[19vw] leading-[0.82] md:text-[13.5vw]">
              <em className="not-italic text-primary">Occasion</em>
            </span>
          </span>
        </h1>

        <div className="mt-8 flex flex-col items-start gap-5 border-t border-background/25 pt-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <p className="hero-sub max-w-[30ch] text-[13px] leading-relaxed text-background/85 md:max-w-[34ch] md:text-sm">
            Lawn, silk and hand-finished embroidery, cut for the way Pakistan
            actually dresses — morning to mehndi.
          </p>
          <a
            href="#collections"
            className="hero-meta label pointer-events-auto shrink-0 bg-primary px-6 py-4 text-primary-foreground transition-colors duration-500 hover:bg-secondary hover:text-secondary-foreground"
          >
            View the campaign
          </a>
        </div>
      </div>
    </section>
  );
}

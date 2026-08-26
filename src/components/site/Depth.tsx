import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import craft from "@/assets/craft-detail.jpg";

gsap.registerPlugin(ScrollTrigger);

/**
 * Layered fabric composition rendered in real 3D space (perspective + Z depth).
 * Scroll drives the camera yaw; pointer adds a small parallax on fine pointers.
 * Falls back to a flat stacked composition on touch / reduced motion.
 */
export function Depth() {
  const root = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(stage.current, {
          rotateY: 26,
          rotateX: -6,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
          },
        });
        gsap.fromTo(
          ".depth-layer",
          { yPercent: 12 },
          {
            yPercent: -12,
            ease: "none",
            stagger: 0.12,
            scrollTrigger: {
              trigger: root.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.4,
            },
          },
        );
      });

      mm.add("(hover: hover) and (pointer: fine)", () => {
        const onMove = (e: PointerEvent) => {
          const r = root.current?.getBoundingClientRect();
          if (!r) return;
          const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
          const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
          gsap.to(".depth-layer", {
            x: (i: number) => dx * (14 + i * 12),
            y: (i: number) => dy * (8 + i * 7),
            duration: 1.1,
            ease: "power3.out",
            overwrite: "auto",
          });
        };
        window.addEventListener("pointermove", onMove);
        return () => window.removeEventListener("pointermove", onMove);
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden px-5 py-28 md:px-10 md:py-44"
      aria-label="Fabric layers"
    >
      <div className="mx-auto grid max-w-[1600px] items-center gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="reveal label mb-6 text-primary" data-reveal>
            Three layers
          </p>
          <h2
            className="reveal display text-[12vw] leading-[0.88] md:text-[4.2vw]"
            data-reveal
            data-reveal-delay="80"
          >
            Cloth,
            <br />
            thread,
            <br />
            drape
          </h2>
          <p
            className="reveal mt-7 max-w-[36ch] text-sm leading-relaxed text-muted-foreground"
            data-reveal
            data-reveal-delay="140"
          >
            A finished suit is three decisions stacked: the base weave, the
            worked panel, and the fall of the dupatta over it.
          </p>
        </div>

        <div
          className="md:col-span-7 md:col-start-6"
          style={{ perspective: "1400px" }}
        >
          <div
            ref={stage}
            className="relative mx-auto aspect-[5/4] w-full max-w-[720px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {[
              { src: p1, z: -160, cls: "left-0 top-0 w-[62%]", label: "Base weave" },
              { src: craft, z: 40, cls: "right-0 top-[18%] w-[52%]", label: "Worked panel" },
              { src: p2, z: 200, cls: "left-[18%] bottom-0 w-[46%]", label: "Drape" },
            ].map((l, i) => (
              <figure
                key={i}
                className={`depth-layer absolute ${l.cls}`}
                style={{ transform: `translateZ(${l.z}px)`, transformStyle: "preserve-3d" }}
              >
                <img
                  src={l.src}
                  alt={l.label}
                  loading="lazy"
                  className="w-full object-cover shadow-[0_30px_60px_-40px_rgba(23,23,23,0.55)]"
                />
                <figcaption className="label mt-3 text-muted-foreground">
                  {l.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

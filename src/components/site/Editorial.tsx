import editorial from "@/assets/editorial-main.jpg";
import craft from "@/assets/craft-detail.jpg";

export function Editorial() {
  return (
    <section className="relative overflow-hidden bg-secondary px-5 py-24 text-secondary-foreground md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12 md:gap-6">
        <div className="mask-up md:col-span-6" data-reveal>
          <img
            src={editorial}
            alt="Printed lawn suit photographed in motion"
            width={1200}
            height={1504}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between md:col-span-5 md:col-start-8 md:py-6">
          <div>
            <p className="reveal label mb-8 text-primary" data-reveal>
              In the studio — Karachi
            </p>
            <h2
              className="reveal display text-[12vw] leading-[0.88] md:text-[4.6vw]"
              data-reveal
              data-reveal-delay="80"
            >
              Six weeks
              <br />
              on one
              <br />
              <em className="not-italic text-primary">neckline</em>
            </h2>
            <p
              className="reveal mt-8 max-w-[42ch] text-sm leading-relaxed text-secondary-foreground/70"
              data-reveal
              data-reveal-delay="160"
            >
              Every print starts as a painted sheet before it reaches the mill.
              The embroidery is worked by hand in small units outside Lahore,
              then washed, pressed and cut in-house. It is slow, and it is the
              only reason the pieces hold their shape after a season of wear.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-end">
            <img
              src={craft}
              alt="Hand embroidery in terracotta thread on ivory cotton"
              width={1200}
              height={900}
              loading="lazy"
              className="mask-up aspect-[4/3] w-full object-cover"
              data-reveal
            />
            <a
              href="#top"
              className="rule-link label reveal w-fit text-secondary-foreground"
              data-reveal
              data-reveal-delay="120"
            >
              Read the craft notes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

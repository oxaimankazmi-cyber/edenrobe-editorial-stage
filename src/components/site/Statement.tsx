export function Statement() {
  return (
    <section className="px-5 py-32 md:px-10 md:py-56">
      <div className="mx-auto max-w-[1200px]">
        <p className="reveal label mb-14 text-primary" data-reveal>
          edenrobe — since 2006
        </p>
        <h2
          className="reveal display text-[10vw] leading-[1.02] md:text-[4vw]"
          data-reveal
          data-reveal-delay="90"
        >
          Clothes for the office on Tuesday and the wedding on Saturday, made in
          Pakistan for the way people here actually live.
        </h2>
        <div className="mt-20 grid gap-10 border-t border-border pt-8 md:grid-cols-3">
          <p className="reveal label text-muted-foreground" data-reveal>
            120+ stores
          </p>
          <p className="reveal label text-muted-foreground" data-reveal data-reveal-delay="80">
            Unstitched to ready-to-wear
          </p>
          <p className="reveal label text-muted-foreground" data-reveal data-reveal-delay="160">
            Shipping across 40 countries
          </p>
        </div>
      </div>
    </section>
  );
}

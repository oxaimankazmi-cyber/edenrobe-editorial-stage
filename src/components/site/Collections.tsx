import women from "@/assets/women.jpg";
import men from "@/assets/men.jpg";
import kids from "@/assets/kids.jpg";
import fragrance from "@/assets/fragrance.jpg";

type Item = {
  id: string;
  name: string;
  src: string;
  note: string;
  count: string;
  className: string;
};

const ITEMS: Item[] = [
  {
    id: "women",
    name: "Women",
    src: women,
    note: "Lawn, pret and formals",
    count: "184 pieces",
    className: "md:col-span-7 md:row-start-1 aspect-[4/5] md:aspect-[4/5]",
  },
  {
    id: "men",
    name: "Men",
    src: men,
    note: "Kurta, shalwar and tailoring",
    count: "96 pieces",
    className:
      "md:col-span-4 md:col-start-9 md:row-start-1 md:mt-[22vh] aspect-[3/4]",
  },
  {
    id: "kids",
    name: "Kids",
    src: kids,
    note: "Boys and girls, 2 to 14",
    count: "72 pieces",
    className: "md:col-span-4 md:col-start-2 md:row-start-2 aspect-[3/4]",
  },
  {
    id: "fragrance",
    name: "Fragrance",
    src: fragrance,
    note: "Oud, amber and neroli",
    count: "18 pieces",
    className: "md:col-span-5 md:col-start-8 md:row-start-2 aspect-[4/5]",
  },
];

export function Collections() {
  return (
    <section id="collections" className="relative px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6 md:mb-28">
          <h2 className="display reveal text-[13vw] leading-[0.85] md:text-[7vw]" data-reveal>
            The House
          </h2>
          <p className="label reveal text-muted-foreground" data-reveal data-reveal-delay="120">
            Four wardrobes / One studio
          </p>
        </div>

        <div className="grid gap-14 md:grid-cols-12 md:gap-x-6 md:gap-y-24">
          {ITEMS.map((item, i) => (
            <a
              key={item.id}
              id={item.id}
              href="#top"
              data-reveal
              data-reveal-delay={i * 90}
              className={`reveal group relative block ${item.className}`}
            >
              <div className="relative h-full w-full overflow-hidden bg-muted">
                <img
                  src={item.src}
                  alt={`${item.name} collection`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-secondary/0 transition-colors duration-700 group-hover:bg-secondary/30" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="label text-background">{item.count}</p>
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="display text-[9vw] leading-none md:text-[3.4vw]">
                  {item.name}
                </h3>
                <p className="label text-muted-foreground transition-colors duration-500 group-hover:text-primary">
                  {item.note}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

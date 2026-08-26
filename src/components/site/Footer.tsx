const COLUMNS = [
  { title: "Women", items: ["Unstitched", "Pret", "Formals", "Accessories"] },
  { title: "Men", items: ["Kurta", "Shalwar Kameez", "Tailored", "Footwear"] },
  { title: "Kids", items: ["Boys", "Girls", "Festive", "Everyday"] },
  { title: "Fragrance", items: ["For her", "For him", "Gifting"] },
  { title: "Customer Care", items: ["Track order", "Returns", "Size guide", "Stores"] },
  { title: "About", items: ["The studio", "Craft", "Careers", "Press"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-5 pb-10 pt-20 md:px-10 md:pt-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="display text-5xl leading-none md:text-6xl">edenrobe</p>
            <form
              className="mt-10 max-w-[380px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="email" className="label text-muted-foreground">
                Collection updates
              </label>
              <div className="mt-4 flex items-center border-b border-input">
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-primary"
                />
                <button type="submit" className="label shrink-0 pl-4 text-primary">
                  Join
                </button>
              </div>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-8 md:grid-cols-3">
            {COLUMNS.map((c) => (
              <div key={c.title}>
                <h3 className="label mb-5">{c.title}</h3>
                <ul className="space-y-2.5">
                  {c.items.map((i) => (
                    <li key={i}>
                      <a
                        href="#top"
                        className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                      >
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-6">
          <p className="label text-muted-foreground">© 2026 edenrobe</p>
          <ul className="flex gap-7">
            {["Instagram", "Facebook", "YouTube", "TikTok"].map((s) => (
              <li key={s}>
                <a href="#top" className="label text-muted-foreground hover:text-primary">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

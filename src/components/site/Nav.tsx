import { useEffect, useState } from "react";
import { Search, User, ShoppingBag } from "lucide-react";

const LINKS = ["Women", "Men", "Kids", "Collections", "Fragrance"];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const tone = solid || open ? "text-foreground" : "text-background";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-[background-color,border-color,padding] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          solid
            ? "border-b border-border bg-background py-4"
            : "border-b border-transparent bg-transparent py-6"
        }`}
      >
        <nav
          aria-label="Primary"
          className={`mx-auto flex max-w-[1600px] items-center justify-between px-5 md:px-10 ${tone} transition-colors duration-500`}
        >
          <a href="#top" className="display text-2xl leading-none md:text-[1.75rem]">
            edenrobe
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {LINKS.map((l) => (
              <li key={l}>
                <a className="label nav-link" href={`#${l.toLowerCase()}`}>
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <button aria-label="Search" className="hidden sm:block">
              <Search className="h-[18px] w-[18px]" strokeWidth={1.25} />
            </button>
            <button aria-label="Account" className="hidden sm:block">
              <User className="h-[18px] w-[18px]" strokeWidth={1.25} />
            </button>
            <button aria-label="Bag" className="relative">
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.25} />
              <span className="absolute -right-2 -top-1 h-[5px] w-[5px] rounded-full bg-primary" />
            </button>
            <button
              className="label lg:hidden"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu — designed as its own editorial index, not a collapsed desktop bar */}
      <div
        className="fixed inset-0 z-[65] bg-background transition-[clip-path] duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] lg:hidden"
        style={{ clipPath: open ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)" }}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col justify-between px-5 pb-10 pt-28">
          <ul>
            {LINKS.map((l, i) => (
              <li key={l} className="border-b border-border">
                <a
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-5"
                >
                  <span className="display text-[13vw] leading-none">{l}</span>
                  <span className="label text-muted-foreground">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-end justify-between">
            <div className="label leading-[2] text-muted-foreground">
              <p>Stores</p>
              <p>Customer Care</p>
              <p>Track Order</p>
            </div>
            <p className="label text-primary">Autumn 26</p>
          </div>
        </div>
      </div>
    </>
  );
}

import { useEffect, useRef, useState } from "react";

export function Loader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const done = useRef(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 1500;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else if (!done.current) {
        done.current = true;
        setLeaving(true);
        window.setTimeout(onDone, 900);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div
      aria-hidden={leaving}
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-secondary transition-[clip-path] duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
      style={{ clipPath: leaving ? "inset(0 0 100% 0)" : "inset(0 0 0% 0)" }}
    >
      <div className="overflow-hidden">
        <span
          className="display block text-secondary-foreground text-[13vw] leading-[0.85] md:text-[9vw] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: leaving ? "translateY(-110%)" : "translateY(0)" }}
        >
          edenrobe
        </span>
      </div>
      <div className="mt-10 flex w-[62vw] max-w-[520px] items-center gap-4">
        <div className="h-px flex-1 bg-secondary-foreground/25">
          <div
            className="h-px bg-primary transition-none"
            style={{ width: `${count}%` }}
          />
        </div>
        <span className="label tabular-nums text-secondary-foreground/70">
          {String(count).padStart(3, "0")}
        </span>
      </div>
    </div>
  );
}

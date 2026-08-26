import { useEffect, useRef, useState } from "react";

/** Subtle desktop-only trailing cursor ring. */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    const pos = { x: innerWidth / 2, y: innerHeight / 2 };
    const target = { ...pos };
    let raf = 0;

    const move = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      const el = (e.target as HTMLElement)?.closest("a,button,[data-cursor]");
      setActive(Boolean(el));
    };
    const loop = () => {
      pos.x += (target.x - pos.x) * 0.14;
      pos.y += (target.y - pos.y) * 0.14;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[80] mix-blend-difference"
    >
      <div
        className="rounded-full border border-background transition-[width,height,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          width: active ? 46 : 14,
          height: active ? 46 : 14,
          backgroundColor: active ? "transparent" : "var(--ivory)",
        }}
      />
    </div>
  );
}

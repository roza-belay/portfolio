import { useEffect, useRef } from 'react';

/**
 * Smooth lagging ring + dot som följer pekaren (desktop).
 */
export default function CursorRing() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const target = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const ringEl = ringRef.current;
    const dotEl = dotRef.current;

    if (!ringEl || !dotEl) return undefined;

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    target.current = { x: cx, y: cy };
    ring.current = { x: cx, y: cy };
    dot.current = { x: cx, y: cy };

    let frame = 0;

    const tick = () => {
      const t = target.current;

      ring.current.x += (t.x - ring.current.x) * 0.12;
      ring.current.y += (t.y - ring.current.y) * 0.12;

      dot.current.x += (t.x - dot.current.x) * 0.28;
      dot.current.y += (t.y - dot.current.y) * 0.28;

      const rx = ring.current.x;
      const ry = ring.current.y;
      const dx = dot.current.x;
      const dy = dot.current.y;

      ringEl.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      dotEl.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;

      frame = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;
    };

    frame = requestAnimationFrame(tick);

    window.addEventListener('pointermove', onMove);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}

import { useEffect, useRef } from 'react';

/**
 * Rök/glöd som följer musen. Wrapper får endast translate från JS;
 * puls/animering sker på barnet så inget krockar med pointer-position.
 */
export default function CursorRing() {
  const rootRef = useRef<HTMLDivElement>(null);

  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const root = rootRef.current;

    if (!root) return undefined;

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    target.current = { x: cx, y: cy };
    current.current = { x: cx, y: cy };

    let frame = 0;

    const tick = () => {
      const t = target.current;

      current.current.x += (t.x - current.current.x) * 0.14;
      current.current.y += (t.y - current.current.y) * 0.14;

      root.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;

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
    <div ref={rootRef} className="smoke-cursor-root">
      <div className="smoke-cursor-glow" aria-hidden="true" />
    </div>
  );
}


import { useEffect, useRef } from "react";
import "./styles/CursorRing.css";

export default function CursorRing() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let frame = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.16;
      currentY += (mouseY - currentY) * 0.16;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={cursorRef} className="snake-cursor">
      <div className="snake-cursor__trail">
        {Array.from({ length: 12 }, (_, index) => (
          <span
            key={index}
            className="snake-cursor__segment"
            style={{ "--i": index } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
}

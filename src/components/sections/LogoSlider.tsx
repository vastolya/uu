import { useRef, useEffect } from "react";
import Image from "next/image";

const logos = [
  { name: "V6", src: "/logoClient1.png" },
  { name: "SVO", src: "/logoClient2.png" },
  { name: "Kvant", src: "/logoClient3.png" },
  { name: "Temporal", src: "/logoClient4.png" },
  { name: "Adler", src: "/logoClient5.png" },
  { name: "RosAtom", src: "/logoClient6.png" },
  { name: "Yandex", src: "/logoClient7.png" },
];

export default function LogoSlider() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<number | null>(null);
  const loopWidthRef = useRef(0);
  const offsetRef = useRef(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const updateLoopWidth = () => {
      loopWidthRef.current = track.scrollWidth / 3;
    };

    const resizeObserver = new ResizeObserver(updateLoopWidth);
    resizeObserver.observe(track);
    updateLoopWidth();

    const speed = 0.5;

    const step = () => {
      offsetRef.current += speed;
      if (offsetRef.current >= loopWidthRef.current) offsetRef.current = 0;
      track.style.transform = `translateX(-${offsetRef.current}px)`;
      scrollRef.current = requestAnimationFrame(step);
    };

    scrollRef.current = requestAnimationFrame(step);

    let isDown = false;
    let startX = 0;
    let startOffset = 0;

    const onDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX;
      startOffset = offsetRef.current;
      cancelAnimationFrame(scrollRef.current!);
      // wrapper.style.cursor = "grabbing";
    };

    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      const dx = e.pageX - startX;
      const loop = loopWidthRef.current;
      offsetRef.current = (startOffset - dx + loop) % loop;
      track.style.transform = `translateX(-${offsetRef.current}px)`;
    };

    const onUp = () => {
      isDown = false;
      cancelAnimationFrame(scrollRef.current!);
      scrollRef.current = requestAnimationFrame(step);
    };

    wrapper.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    // wrapper.style.cursor = "grab";

    return () => {
      cancelAnimationFrame(scrollRef.current!);
      resizeObserver.disconnect();
      wrapper.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  const repeated = [...logos, ...logos, ...logos];

  return (
    <div
      ref={wrapperRef}
      className="w-full overflow-hidden bg-[var(--color-border-gray)] py-20 select-none"
    >
      <div ref={trackRef} className="flex gap-30 will-change-transform">
        {repeated.map((logo, i) => (
          <div
            key={i}
            className="relative h-20 w-40 flex items-center justify-center shrink-0 grayscale-100 hover:grayscale-0"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              sizes="auto"
              className="object-contain pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

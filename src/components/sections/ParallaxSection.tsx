"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ParallaxSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, -1500]);

  return (
    <section className="relative h-[328px] md:h-[29.5rem] overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-[125rem] -z-10"
      >
        <Image
          src="/imageHero.png"
          alt="Hero"
          fill
          priority
          className="object-contain md:object-cover object-top grayscale pointer-events-none select-none"
        />
      </motion.div>
    </section>
  );
}

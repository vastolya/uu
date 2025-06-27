"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ParallaxSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, -1500]);

  return (
    <section className="relative h-[472px] overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-[2000px] z-0"
      >
        <Image
          src="/imageHero.png"
          alt="Hero"
          fill
          priority
          className="object-cover object-top grayscale pointer-events-none select-none"
        />
      </motion.div>
    </section>
  );
}

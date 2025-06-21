"use client";

import React, { useRef, useState, useLayoutEffect } from "react";
import { motion } from "motion/react";
import IconArrowRight from "../icons/IconArrowRight";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}

const baseStyles =
  "flex justify-center items-center gap-2 w-fit rounded-[var(--radius-sm)] font-medium transition-colors duration-300 cursor-pointer";

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "py-7 w-full bg-[var(--color-primary)] hover:bg-[var(--color-black)] text-[var(--color-black)] hover:text-[var(--color-white)]",
  secondary:
    "p-4 box-border border-2 border-[var(--color-primary)] hover:border-[var(--color-black)] text-[var(--color-black)] hover:bg-[var(--color-black)] hover:text-[var(--color-white)]",
};

export const Button = ({
  text,
  onClick,
  className = "",
  variant = "primary",
}: ButtonProps) => {
  const arrowRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLButtonElement>(null);
  const [arrowWidth, setArrowWidth] = useState(0);
  const [textWidth, setTextWidth] = useState(0);

  useLayoutEffect(() => {
    if (arrowRef.current) {
      arrowRef.current.style.display = "none";
    }

    requestAnimationFrame(() => {
      if (textRef.current) {
        setTextWidth(textRef.current.offsetWidth);
      }

      if (arrowRef.current) {
        arrowRef.current.style.display = "";
        setArrowWidth(arrowRef.current.offsetWidth);
      }
    });
  }, [text]);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const cleanup = press(el, () => {
      animate(el, { scale: 0.95 }, { type: "spring", stiffness: 800 });
      return () =>
        animate(el, { scale: 1 }, { type: "spring", stiffness: 400 });
    });

    return cleanup;
  }, []);

  const handleMouseEnter = () => {
    if (arrowRef.current)
      animate(
        arrowRef.current,
        { x: textWidth + 8, color: "#eeff29" }, // хардкод цвета
        { duration: 0.3 }
      );
    if (textRef.current)
      animate(textRef.current, { x: -(arrowWidth + 8) }, { duration: 0.3 });
  };

  const handleMouseLeave = () => {
    if (arrowRef.current)
      animate(arrowRef.current, { x: 0, color: "#1d1d1b" }, { duration: 0.3 }); // хардкод цвета
    if (textRef.current) animate(textRef.current, { x: 0 }, { duration: 0.3 });
  };

  return (
    <button
      ref={containerRef}
      onClick={onClick}
      className={combinedClassName}
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        ref={arrowRef}
        variants={{
          initial: { x: 0 },
          hover: { x: textWidth + 8, color: "#eeff29" },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <IconArrowRight />
      </motion.div>
      <motion.div
        ref={textRef}
        variants={{
          initial: { x: 0 },
          hover: { x: -(arrowWidth + 8) },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <span>{text}</span>
      </div>
    </button>
  );
};

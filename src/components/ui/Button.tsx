"use client";

import React from "react";
import { motion } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";
import IconArrowRight from "../icons/IconArrowRight";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}

const baseStyles =
  "flex justify-center items-center gap-2 w-fit rounded-xl font-medium transition-colors duration-300";

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "p-20 bg-[var(--color-primary)] hover:bg-[var(--color-black)] text-[var(--color-black)] hover:text-[var(--color-white)]",
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

  const [arrowWidth, setArrowWidth] = useState(0);
  const [textWidth, setTextWidth] = useState(0);

  useLayoutEffect(() => {
    if (arrowRef.current) setArrowWidth(arrowRef.current.offsetWidth);
    if (textRef.current) setTextWidth(textRef.current.offsetWidth);
  }, [text]);

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <motion.button
      onClick={onClick}
      className={combinedClassName}
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        ref={arrowRef}
        variants={{
          initial: { x: 0 },
          hover: { x: textWidth + 8, color: "#eeff29" }, // хардкод
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <IconArrowRight />
      </motion.div>
      <motion.div
        ref={textRef}
        variants={{
          initial: { x: 0 },
          hover: { x: -arrowWidth - 8 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <span>{text}</span>
      </motion.div>
    </motion.button>
  );
};

"use client";

import React, { useRef, useState, useLayoutEffect } from "react";
import { motion } from "motion/react";
import IconArrowRight from "../icons/IconArrowRight";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  type?: "submit" | "button" | "reset";
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
  type = "button",
}: ButtonProps) => {
  const arrowRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <motion.button
      onClick={onClick}
      className={combinedClassName}
      initial="initial"
      whileHover="hover"
      type={type}
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
      </motion.div>
    </motion.button>
  );
};

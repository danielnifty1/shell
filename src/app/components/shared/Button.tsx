"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  onClickCapture?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  onClick = () => {},
  onClickCapture = () => {},
  type = "button",
  className,
  children,
}) => {
  return (
    <button
      type={type}
      onClickCapture={onClickCapture}
      onClick={onClick}
      className={twMerge(
        "bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;

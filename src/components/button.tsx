import React from "react";

export interface IButtonProps {
  variant: "primary" | "secondary";
}

const CustomButton: React.FC<IButtonProps> = ({ variant }) => {
  return (
    <button
      style={{ backgroundColor: variant === "primary" ? "blue" : "violet" }}
    >
      Button
    </button>
  );
};

export default CustomButton;

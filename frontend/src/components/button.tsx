import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantClasses = {
  primary:
    "bg-indigo-600 text-white font-light hover:drop-shadow-2xl hover:bg-indigo-500",
  secondary:
    "bg-indigo-200 text-indigo-600 font-light hover:drop-shadow-2xl hover:bg-indigo-300",
  tertiary:
    "bg-transperant text-indigo-500 font-medium border border-gray-200 hover:drop-shadow-md hover:bg-slate-300",
};

const defaultStyles = "px-4 py-2 rounded-md  flex items-center";

export function Button({
  variant,
  text,
  startIcon,
  onClick,
  fullWidth,
  loading,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${variantClasses[variant]} ${defaultStyles} ${
        fullWidth ? " w-full flex justify-center items-center" : ""
      } ${loading ? "opacity-45	" : ""}`}
      disabled={loading}
    >
      {startIcon && <div className="pr-2">{startIcon}</div>}
      {text}
    </button>
  );
}

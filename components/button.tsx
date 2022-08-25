import { ReactNode, ButtonHTMLAttributes } from "react";

export const Button = ({
  children,
  onClick,
  type,
}: {
  children: ReactNode;
  onClick: () => void;
  type?: "submit" | "reset" | "button";
}) => {
  return (
    <button
      className="w-full flex items-center justify-center   bg-primary   hover:bg-purple-500   text-gray-100 p-3 rounded-lg shadow-lg  cursor-pointer   transition ease-in duration-500 "
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

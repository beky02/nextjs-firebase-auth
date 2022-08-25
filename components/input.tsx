import { ChangeEvent } from "react";

export const Input = ({
  type,
  id,
  placeholder,
  onChange,
}: {
  type: string;
  id?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      className="appearance-none block w-full bg-white text-gray-700 rounded-lg p-3 mb-7 border border-gray-200 leading-tight focus:outline-none focus:border-green-300"
    ></input>
  );
};



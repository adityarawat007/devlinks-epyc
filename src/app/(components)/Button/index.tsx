import React from "react";

const Button: React.FC<{ title: string }> = ({ title }) => {
  return (
    <button className="flex items-center justify-center px-7 py-3 gap-2 border rounded-md border-purple-600 bg-white text-purple-600 font-semibold text-base transition-colors duration-300 hover:bg-purple-100 w-full text-center">
      {title}
    </button>
  );
};

export default Button;

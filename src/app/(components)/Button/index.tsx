import React from "react";

interface ButtonProps {
  title: string;
  onClick?: () => void; 
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      className={`flex items-center justify-center cursor-pointer px-7 py-3 gap-2 border rounded-md border-purple ${
        title === "Save"
          ? "bg-purple text-white "
          : "bg-white text-purple hover:bg-light-purple"
      } font-semibold text-base transition-colors duration-300  w-full text-center`}
      onClick={onClick}  
    >
      {title}
    </button>
  );
};

export default Button;


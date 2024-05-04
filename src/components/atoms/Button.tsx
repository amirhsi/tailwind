import React from "react";

interface TButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  additionalClasses?: string;
}

const Button = ({ children, additionalClasses, ...rest }: TButton) => {
  const defaultClasses =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

  return (
    <button className={`${defaultClasses} ${additionalClasses}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;

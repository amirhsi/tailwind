import React from "react";

interface TButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  additionalClasses?: string;
  variant?: "dashed" | "transparent";
  btnType?: "error" | "success" | "warning";
}

const getVariantClasses = (variant?: "dashed" | "transparent") => {
  switch (variant) {
    case "dashed":
      return "border-2 border-dashed";
    case "transparent":
      return "bg-transparent";
    default:
      return "";
  }
};

const getTypeClasses = (btnType?: "error" | "success" | "warning") => {
  switch (btnType) {
    case "error":
      return "bg-error hover:bg-error-hover";
    case "success":
      return "bg-success hover:bg-success-hover";
    case "warning":
      return "bg-warning hover:bg-warning-hover";
    default:
      return "bg-blue hover:bg-blue-hover";
  }
};

const Button = ({
  children,
  additionalClasses,
  variant,
  btnType,
  ...rest
}: TButton) => {
  const variantClasses = getVariantClasses(variant);
  const typeClasses = getTypeClasses(btnType);

  const defaultClasses = `${typeClasses} text-white font-bold py-2 px-4 rounded`;

  return (
    <button
      className={`${defaultClasses} ${variantClasses} ${additionalClasses}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

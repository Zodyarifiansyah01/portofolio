import React from "react";

const Button = ({ label, size, icon, className, onClick }) => {
  const getClassSize = (val) => {
    const listSize = {
      large: "py-3 px-6 text-lg",
      small: "py-1 px-2 text-sm",
      medium: "py-2 px-4 text-base",
      extraSmall: "py-0.5 px-1 text-xs",
    };
    return listSize[val];
  };
  return (
    <button className={`${getClassSize(size)} ${className} `} onClick={onClick}>
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;

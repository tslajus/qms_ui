import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  link?: string;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  className?: string;
};

function Button({
  label,
  onClick,
  link,
  type = "button",
  disabled = false,
  className,
}: ButtonProps) {
  const combinedClassName = `${styles.btn} ${
    disabled && styles["btn--disabled"]
  } ${className || ""} `;

  const buttonElement = (
    <button
      className={combinedClassName}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );

  const linkElement = (
    <Link className={combinedClassName} to={link as string}>
      {label}
    </Link>
  );

  const renderedElement = link ? linkElement : buttonElement;

  return renderedElement;
}

export default Button;

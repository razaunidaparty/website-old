import React, { FC } from "react";

import classNames from "classnames";
import { handletheme } from "./Button.handlers";
import styles from "./Button.module.scss";

const Button: FC<ButtonProps> = ({
  className,
  theme = "primary",
  children,
  ...props
}) => {
  const buttonClasses = classNames(className, styles.btn, handletheme(theme));
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;

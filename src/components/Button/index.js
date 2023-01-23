import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder21: "rounded-radius21",
  CircleBorder29: "rounded-radius29",
};
const variants = { FillLightblue400: "bg-light_blue_400 text-white_A700" };
const sizes = { sm: "p-[12px]", md: "p-[17px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder21", "CircleBorder29"]),
  variant: PropTypes.oneOf(["FillLightblue400"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder21",
  variant: "FillLightblue400",
  size: "sm",
};

export { Button };

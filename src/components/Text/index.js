import React from "react";
const variantClasses = {
  h1: "font-normal text-[9.64px]",
  h2: "font-normal text-[8.04px]",
  h3: "font-normal sm:text-[22.4px] md:text-[24.4px] text-[26.4px]",
  h4: "font-normal sm:text-[17.09px] md:text-[19.09px] text-[21.09px]",
  h5: "font-normal text-[20px]",
  h6: "font-normal text-[19.66px]",
  body1: "font-normal text-[18.15px]",
  body2: "font-normal text-[16.03px]",
  body3: "font-normal text-[16px]",
  body4: "font-normal text-[15.69px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

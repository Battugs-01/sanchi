import React from "react";

const shapes = {
  square: "rounded-none",
  circle: "rounded-[50%]",
  round: "rounded-[24px]",
} as any;

const variants = {
  fill: {
    indigo_900: "bg-indigo-900",
    white_A700: "bg-white-A700 shadow-bs text-gray-900_05",
    blue_700: "bg-blue-700",
    red_A700: "bg-red-A700",
    white_A700_26: "bg-white-A700_26 shadow-bs1",
    white_A700_e5: "bg-white-A700_e5",
    white_A700_19: "bg-white-A700_19",
  },
  gradient: { yellow_700_orange_100: "bg-gradient " },
} as any;

const sizes = {
  xs: "p-1",
  sm: "p-2.5",
  md: "p-3.5",
  lg: "p-[19px]",
  xl: "px-4 py-[22px]",
} as any;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: any;
    shape: any;
    variant: any;
    size: any;
    color: any;
    leftIcon: any;
    rightIcon: any;
    onClick: () => any;
  }>;

const CustomButton: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { CustomButton };

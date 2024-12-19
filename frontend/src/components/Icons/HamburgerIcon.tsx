import React from "react";

type BackgroundColor = "red" | "yellow";
type FillType =
  | "yellow"
  | "red"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "gray"
  | "white"
  | "transparent";

interface HamburgerIconProps {
  size?: number;
  styles?: React.CSSProperties;
  prefixCls?: string;
  bgColor?: BackgroundColor;
  fill?: FillType;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({
  size = 16,
  styles = {},
  prefixCls = "",
  bgColor = "",
  fill = "",
}) => {
  return (
    <span
      className={`${prefixCls} w-full h-full flex justify-center items-center`}
      style={{
        backgroundColor: bgColor,
        width: size,
        height: size,
      }}
    >
      <svg
        style={{
          ...styles,
        }}
        className="text-center flex justify-center items-center"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="hamburger-icon"
      >
        <path
          style={{
            fill: fill,
            width: "100%",
            height: "100%",
          }}
          d="M20,11H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,11,20,11z M4,8h16c0.6,0,1-0.4,1-1s-0.4-1-1-1H4C3.4,6,3,6.4,3,7S3.4,8,4,8z M20,16H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,16,20,16z"
        ></path>
      </svg>
    </span>
  );
};

export default HamburgerIcon;

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

interface CartIconProps {
  size?: number;
  styles?: React.CSSProperties;
  prefixCls?: string;
  bgColor?: BackgroundColor;
  fill?: FillType;
}

const CartIcon: React.FC<CartIconProps> = ({
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
        viewBox="0 0 35 35"
        id="cart"
      >
        <path
          style={{
            fill: fill,
            width: "100%",
            height: "100%",
          }}
          d="M27.47,23.93H14.92A5.09,5.09,0,0,1,10,20L8,11.87a5.11,5.11,0,0,1,5-6.32h16.5a5.11,5.11,0,0,1,5,6.32l-2,8.15A5.1,5.1,0,0,1,27.47,23.93ZM12.94,8.05a2.62,2.62,0,0,0-2.54,3.23l2,8.15a2.6,2.6,0,0,0,2.54,2H27.47a2.6,2.6,0,0,0,2.54-2l2-8.15a2.61,2.61,0,0,0-2.54-3.23Z"
        ></path>
        <path
          style={{
            fill: fill,
            width: "100%",
            height: "100%",
          }}
          d="M9.46 14a1.25 1.25 0 0 1-1.21-1L6.46 5.23A3.21 3.21 0 0 0 3.32 2.75H1.69a1.25 1.25 0 0 1 0-2.5H3.32A5.71 5.71 0 0 1 8.9 4.66l1.78 7.77a1.24 1.24 0 0 1-.93 1.5A1.43 1.43 0 0 1 9.46 14zM15.11 34.75a4 4 0 1 1 4-4A4 4 0 0 1 15.11 34.75zm0-5.54a1.52 1.52 0 1 0 1.52 1.52A1.52 1.52 0 0 0 15.11 29.21zM28.93 34.75a4 4 0 1 1 4-4A4 4 0 0 1 28.93 34.75zm0-5.54a1.52 1.52 0 1 0 1.53 1.52A1.52 1.52 0 0 0 28.93 29.21z"
        ></path>
        <path
          style={{
            fill: fill,
            width: "100%",
            height: "100%",
          }}
          d="M28.93,29.21H12.27a3.89,3.89,0,1,1,0-7.78h2.65a1.25,1.25,0,1,1,0,2.5H12.27a1.39,1.39,0,1,0,0,2.78H28.93a1.25,1.25,0,0,1,0,2.5Z"
        ></path>
      </svg>
    </span>
  );
};

export default CartIcon;

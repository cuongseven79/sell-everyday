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

interface ArrowDownIconProps {
  size?: number;
  styles?: React.CSSProperties;
  prefixCls?: string;
  bgColor?: BackgroundColor;
  fill?: FillType;
}

const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({
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
          fontSize: size,
        }}
        className="text-center flex justify-center items-center"
        width={16}
        height={16}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="down-arrow"
      >
        <path
          fillRule="evenodd"
          style={{
            fill: fill,
            width: "100%",
            height: "100%",
            backgroundColor: "red",
          }}
          d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"
        ></path>
      </svg>
    </span>
  );
};

export default ArrowDownIcon;

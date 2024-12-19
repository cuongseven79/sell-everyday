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

interface ArrowRightIconProps {
  size?: number;
  styles?: React.CSSProperties;
  prefixCls?: string;
  bgColor?: BackgroundColor;
  fill?: FillType;
}

const ArrowRightIcon: React.FC<ArrowRightIconProps> = ({
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
        id="right-arrow"
      >
        <path
          fillRule="evenodd"
          style={{
            fill: fill,
            width: "100%",
            height: "100%",
            backgroundColor: "red",
          }}
          d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"
        ></path>
      </svg>
    </span>
  );
};

export default ArrowRightIcon;

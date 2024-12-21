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

interface ArrowLeftIconProps {
  size?: number;
  styles?: React.CSSProperties;
  prefixCls?: string;
  bgColor?: BackgroundColor;
  fill?: FillType;
}

const ArrowLeftIcon: React.FC<ArrowLeftIconProps> = ({
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
        id="left-arrow"
      >
        <path
          fillRule="evenodd"
          style={{
            fill: fill,
            width: "100%",
            height: "100%",
            backgroundColor: "red",
          }}
          d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"
        ></path>
      </svg>
    </span>
  );
};

export default ArrowLeftIcon;

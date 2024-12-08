import React from "react";

interface SearchIconProps {
  size?: number;
  imgStyles?: React.CSSProperties;
  prefixCls?: string;
  bgColor?: BackgroundColor;
  color?: string;
}

type BackgroundColor = "red" | "yellow";
const SearchIcon: React.FC<SearchIconProps> = ({
  size = 20,
  imgStyles = {},
  prefixCls = "",
  bgColor = "red",
  color = "red",
}) => {
  return (
    <span className="w-full h-full flex justify-center items-center">
      <svg
        style={{
          ...imgStyles,
          // backgroundColor: bgColor,
          // color: bgColor === "white" ? "black" : "white",
        }}
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        id="search"
      >
        <path
          fillRule="evenodd"
          d="m15.7 13.3-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
        ></path>
      </svg>
    </span>
  );
};

export default SearchIcon;

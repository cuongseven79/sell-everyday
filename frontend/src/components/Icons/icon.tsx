import React from "react";

interface IconProps {
  imageUrl: string;
  size?: number;
  className?: string;
  imgStyles?: React.CSSProperties;
  prefixCls?: string;
  bgColor?: "";
}

const Icon: React.FC<IconProps> = ({
  imageUrl = "",
  size = 20,
  imgStyles = {},
  prefixCls = "",
  bgColor = "",
}) => {
  return (
    <span className={`${prefixCls}`}>
      <img
        src={imageUrl}
        width={size}
        height={size}
        style={{
          ...imgStyles,
          backgroundColor: bgColor,
        }}
        alt="Icon"
      />
    </span>
  );
};

export default Icon;

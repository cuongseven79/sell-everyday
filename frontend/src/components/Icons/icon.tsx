import React from "react";

export interface IconProps {
  imageUrl: string;
  size?: number;
  className?: string;
  imgStyles?: React.CSSProperties;
  prefixCls?: string;
}

const Icon: React.FC<IconProps> = ({ imageUrl ='', size = 20, imgStyles={} ,prefixCls=''}) => {
  return (
      <span className={`${prefixCls}`}>
        <img src={imageUrl} width={size} height={size} alt="" style={imgStyles}/>
      </span>
  );
};

export default Icon;

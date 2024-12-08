type colorType =
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "gray"
  | "white"
  | "transparent";
interface BadgeNumberProps {
  badgeContent: number;
  prefixCls?: string;
  styles?: React.CSSProperties;
  bgColor?: colorType;
  textColor?: colorType;
  badgeSize?: number;
  textSize?: number;
}
const BadgeNumber = ({
  badgeContent = 0,
  prefixCls = "",
  styles = {},
  textColor = "white",
  bgColor = "red",
  textSize = 40,
  badgeSize = 20,
}: BadgeNumberProps) => {
  return (
    <div
      className={`${prefixCls} outline-none rounded-[50%] flex justify-center items-center `}
      style={{
        fontSize: `${textSize}px`,
        color: `${textColor}`,
        backgroundColor: `${bgColor}`,
        width: `${badgeSize}px`,
        height: `${badgeSize}px`,
        ...styles,
      }}
    >
      {badgeContent}
    </div>
  );
};

export default BadgeNumber;

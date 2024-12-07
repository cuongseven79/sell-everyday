import React from "react";

interface DropDownTextIconProps {
  title?: string;
  imageURL?: string;
  iconURL?: string;
  iconSize?: number;
  imageSize?: number;
  textSize?: number;
  className?: string;
  styles?: React.CSSProperties;
  items?: DropdownItemProps[];
  onMouseDownItem?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

interface DropdownItemProps {
  imageURL?: string;
  country?: string;
  imageSize?: number;
  textSize?: number;
  items?: DropdownItemProps[];
  onMouseDownItem?: React.MouseEventHandler<HTMLDivElement> | undefined;
  className?: string;
  styles?: React.CSSProperties;
}

const DropDownTextIcon: React.FC<DropDownTextIconProps> = ({
  title = "",
  imageURL = "",
  iconURL = "",
  className = "",
  styles = {},
  imageSize = 20,
  iconSize = 20,
  textSize = 12,
  items = [],
  onMouseDownItem = () => {},
}) => {
  const [visible, setVisible] = React.useState<boolean>(false);

  return (
    <>
      <div
        className={`relative w-fit flex items-center space-x-2 ${className}`}
        style={styles}
        onMouseEnter={() => setTimeout(() => setVisible((prev) => !prev), 150)}
      >
        <span>
          {imageURL && (
            <img
              src={imageURL}
              width={imageSize}
              height={imageSize}
              alt="icon"
            />
          )}
        </span>
        {title && <p style={{ fontSize: `${textSize}px` }}>{title}</p>}
        <span>
          {iconURL && (
            <img src={iconURL} width={iconSize} height={iconSize} alt="icon" />
          )}
        </span>
        {visible && (
          <DropdownItem
            items={items}
            textSize={textSize}
            imageSize={imageSize}
            onMouseDownItem={onMouseDownItem}
          />
        )}
      </div>
    </>
  );
};

const DropdownItem: React.FC<DropdownItemProps> = ({
  imageSize = 20,
  textSize = 12,
  items = [],
  onMouseDownItem = () => {},
  className = "",
  styles = {},
}) => {
  function handleMouseDownItem(value: any) {
    onMouseDownItem(value);
  }
  return items.length > 0 ? (
    <div
      className="border p-3 absolute right-0 top-7 w-[180px]
    bg-cyan-500 shadow-lg shadow-cyan-500/50
    "
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`
             hover:border
            hover:bg-white 
            bg-zinc-200
            boder-black-[2px] pl-3 my-2 cursor-pointer
             h-[45px] w-full flex items-center space-x-2 rounded-[4px]
            ${className}`}
          style={styles}
          onMouseDown={() => handleMouseDownItem(item)}
        >
          <span className="w-fit">
            {item.imageURL && (
              <img
                src={item.imageURL}
                width={imageSize}
                height={imageSize}
                alt="icon"
              />
            )}
          </span>
          <p className="" style={{ fontSize: `${textSize}px` }}>
            {item.country}
          </p>
        </div>
      ))}
    </div>
  ) : null;
};

export default DropDownTextIcon;

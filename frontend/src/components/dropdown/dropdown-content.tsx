import React, { Fragment } from "react";

interface DropdownContentProps<ItemT> {
  menu?: ItemT[];
  renderMenu?: (subMenu: ItemT) => React.ReactNode;
  onSelected?: (item: ItemT) => void;
  className?: string;
  style?: React.CSSProperties;
  position?: "left" | "right" | "top" | "bottom";
  arrow?: boolean;
  prefixItemCls?: string;
}

const DropdownContent = <ItemT,>({
  menu = [],
  renderMenu = () => <></>,
  onSelected = () => {},
  className = "",
  style = {},
  position = "bottom",
  arrow = false,
  prefixItemCls = "",
}: DropdownContentProps<ItemT>) => {
  console.log("menu => ", menu);
  const [open, setOpen] = React.useState(false);

  if (!menu) return null;
  return (
    <Fragment>
      {menu.map((menuItem, index) => (
        <div
          key={index}
          // onClick={() => onSelected && onSelected(menuItem)}
          // className={`${prefixItemCls} bg-white hover:bg-zinc-200 border cursor-pointer h-10 w-full flex items-center justify-center text-sm`}
          className={`${prefixItemCls}`}
        >
          {renderMenu(menuItem)}
        </div>
      ))}
    </Fragment>
  );
};

export default DropdownContent;

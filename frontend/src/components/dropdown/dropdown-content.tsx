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
  return (
    <Fragment>
      {
        menu && menu.length > 0
          ? menu.map((menuItem, index) => (
              <div
                key={index}
                // onClick={() => onSelected && onSelected(menuItem)}
                // className={`${prefixItemCls} bg-white hover:bg-zinc-200 border cursor-pointer h-10 w-full flex items-center justify-center text-sm`}
                className={`${prefixItemCls}`}
              >
                {renderMenu(menuItem)}
              </div>
            ))
          : null
        //  (
        //   <div
        //     className={`${prefixItemCls} bg-white hover:bg-zinc-200 p-5 border cursor-pointer h-10 w-full flex items-center text-sm`}
        //   >
        //     <span>No found item in list</span>
        //   </div>
        // )
      }
    </Fragment>
  );
};

export default DropdownContent;

import React from "react";
import HamburgerIcon from "components/Icons/HamburgerIcon";

interface DropdownMenuProps<ItemT> {
  menu?: ItemT[];
  renderMenuItem: (item: ItemT) => React.ReactNode;
  title?: React.ReactNode;
  arrow?: boolean;
  prefixItemCls?: string;
  styles?: React.CSSProperties;
  className?: string;
  textSize?: number;
  iconSize?: number;
  bgColor?: string;
  width?: string;
  onItemEntered?: (value: ItemT) => void;
  subMenu?: ItemT[];
}

export const DropdownMenu = <T,>({
  menu = [],
  renderMenuItem = () => <></>,
  subMenu = [],
  title = "",
  arrow = false,
  prefixItemCls = "",
  styles = {},
  className = "",
  textSize = 16,
  iconSize = 20,
  bgColor = "white",
  width = "fit-content",
  onItemEntered,
}: DropdownMenuProps<T>) => {
  const [open, setOpen] = React.useState(false);
  const openDropdown = open ? "block" : "block";
  console.log("menu", menu);
  return (
    <div
      className={`relative ${className} w-full flex items-center bg-red-600 `}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* <div
        className={` flex items-center py-2.5 gap-10 px-6 cursor-pointer overflow-hidden rounded-lg`}
        style={{
          backgroundColor: bgColor,
          width: width,
          ...styles,
        }}
      >
        {title && (
          <span style={{ fontSize: textSize, textTransform: "uppercase" }}>
            {title}
          </span>
        )}
        {arrow && <HamburgerIcon size={iconSize} />}
      </div> */}

      <div className={`${openDropdown} w-full shadow-sm rounded-md z-50 `}>
        <div className="">
          {
            menu && menu.length > 0
              ? menu.map((menuItem, index) => (
                  <div
                    key={index}
                    onMouseEnter={() =>
                      onItemEntered && onItemEntered(menuItem)
                    }
                    className={`${prefixItemCls} bg-green-300 hover:bg-zinc-200 
                cursor-pointer text-sm w-full`}
                  >
                    {menuItem && renderMenuItem(menuItem)}
                  </div>
                ))
              : null
            //   (
            //     <div
            //       className={`${prefixItemCls} bg-white hover:bg-zinc-200 p-5 border cursor-pointer h-10 w-full flex items-center text-sm`}
            //     >
            //       <span>No found item in list</span>
            //     </div>
            //   )
          }
        </div>
      </div>
    </div>
  );
};

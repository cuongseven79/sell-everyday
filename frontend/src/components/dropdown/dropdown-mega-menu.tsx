import React from "react";
import HamburgerIcon from "components/Icons/HamburgerIcon";

interface DropdownMegaMenuProps<ItemT> {
  menu?: ItemT[];
  subMenu?: ItemT[];
  renderMenu?: (item: ItemT) => React.ReactNode;
  renderSubMenu?: (item: ItemT) => React.ReactNode;
  onSelected?: (value: ItemT) => void;
  title?: React.ReactNode;
  arrow?: boolean;
  prefixItemCls?: string;
  styles?: React.CSSProperties;
  className?: string;
  textSize?: number;
  iconSize?: number;
  bgColor?: string;
  width?: string;
  fillByKey?: string;
}

const DropdownMegaMenu = <T,>({
  menu = [],
  renderMenu = () => <></>,
  renderSubMenu = () => <></>,
  onSelected,
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
  fillByKey = "category_types",
}: DropdownMegaMenuProps<T>) => {
  const [open, setOpen] = React.useState(false);
  const openDropdown = open ? "block" : "hidden";
  const [menuItemSelected, setMenuItemSelected] = React.useState<T>({} as T);

  function handleMenuItem(item: T) {
    setMenuItemSelected(item);
  }

  return (
    <div
      className={`relative ${className} w-fit h-full flex items-center `}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className={`flex items-center py-2.5 gap-10 px-6 cursor-pointer overflow-hidden rounded-lg`}
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
      </div>

      <div
        className={`${openDropdown} absolute top-10 right-0  w-full shadow-sm rounded-md z-50`}
      >
        <div className="mt-4 shadow-md">
          {menu && menu.length > 0 ? (
            menu.map((menuItem, index) => (
              <div
                key={index}
                onMouseEnter={() => handleMenuItem(menuItem)}
                className={`${prefixItemCls} bg-white hover:bg-[#F7F7F7] border cursor-pointer h-10 w-full flex items-center justify-center text-sm`}
              >
                <div className="flex justify-between items-center w-full h-full px-2 cursor-pointer">
                  {renderMenu(menuItem)}
                </div>
              </div>
            ))
          ) : (
            <div
              className={`${prefixItemCls} bg-white hover:bg-zinc-200 p-5 border cursor-pointer h-10 w-full flex items-center text-sm`}
            >
              <span>No found item in list</span>
            </div>
          )}
        </div>
        <div
          className={`mt-4 absolute top-0 left-full grid grid-flow-col grid-rows-2 w-max gap-5 p-5`}
        >
          {menuItemSelected && renderSubMenu(menuItemSelected)}
        </div>
      </div>
    </div>
  );
};

export default DropdownMegaMenu;

import React from "react";
import ArrowDownIcon from "components/Icons/ArrowDownIcon";

interface DropdownButtonProps<ItemT> {
  items?: ItemT[];
  renderItem: (item: ItemT) => React.ReactNode;
  title?: React.ReactNode;
  arrow?: boolean;
  prefixItemCls?: string;
  styles?: React.CSSProperties;
  className?: string;
  onSelected?: (value: ItemT) => void;
}

export const DropdownButton = <T,>({
  items = [],
  renderItem = () => <></>,
  title = "",
  arrow = false,
  prefixItemCls = "",
  styles = {},
  className = "",
  onSelected,
}: DropdownButtonProps<T>) => {
  const [open, setOpen] = React.useState(false);
  const openDropdown = open ? "block" : "hidden";

  return (
    <div
      className={`relative ${className} w-full h-full flex px-2`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center space-x-2 " style={styles}>
        {title && <span>{title}</span>}
        {arrow && <ArrowDownIcon size={20} />}
      </div>
      <div
        className={`${openDropdown} border px-2 absolute right-0 w-[180px] bg-cyan-500 shadow-lg shadow-cyan-500/50 z-50`}
      >
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <div
              key={index}
              onMouseDown={() => onSelected && onSelected(item)}
              className={`${prefixItemCls} hover:border hover:bg-white bg-zinc-200 boder-black-[2px] my-2 cursor-pointer h-[45px] w-full flex items-center space-x-2 rounded-[4px]`}
            >
              {item && renderItem(item)}
            </div>
          ))
        ) : (
          <div
            className={`${prefixItemCls} hover:border hover:bg-white bg-zinc-200 boder-black-[2px] pl-3 my-2 cursor-pointer h-[45px] w-full flex items-center space-x-2 rounded-[4px]`}
          >
            <span>No found item in list</span>
          </div>
        )}
      </div>
    </div>
  );
};

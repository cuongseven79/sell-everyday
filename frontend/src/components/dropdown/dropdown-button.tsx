import React, { useMemo } from "react";
import downArrowIc from "assets/icons/down-arrow.svg";

interface DropdownButtonProps<ItemT> {
  items?: ItemT[];
  children: (item: ItemT) => React.ReactNode;
  title?: React.ReactNode;
  arrow?: boolean;
  prefixCls?: string;
  styles?: React.CSSProperties;
  className?: string;
  onSelected?: (value: ItemT) => void;
}

export const DropdownButton = <T,>({
  items = [],
  children = () => <></>,
  title = "",
  arrow = false,
  prefixCls = "",
  styles = {},
  className = "",
  onSelected,
}: DropdownButtonProps<T>) => {

  const [open, setOpen] = React.useState(false);
  const openDropdown = open ? 'block' : 'hidden';
  
  return (
    <div 
    className="relative"
    onMouseEnter={() => setOpen(true)} 
    onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center space-x-2 " style={styles} >
        {title && <span>{title}</span>}
        {arrow && <img src={downArrowIc} width={20} alt="arrow" />}
      </div>
      <div
        className={` ${className} ${openDropdown} border px-2 absolute right-0 w-[180px] bg-cyan-500 shadow-lg shadow-cyan-500/50`}
      >
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <div
              key={index}
              onMouseDown={() =>  onSelected && onSelected(item)}
              className={`${prefixCls} hover:border hover:bg-white bg-zinc-200 boder-black-[2px] my-2 cursor-pointer h-[45px] w-full flex items-center space-x-2 rounded-[4px]`}
            >
              {item && children(item)}
            </div>
          ))
        ) : (
          <div
            className={`${prefixCls} hover:border hover:bg-white bg-zinc-200 boder-black-[2px] pl-3 my-2 cursor-pointer h-[45px] w-full flex items-center space-x-2 rounded-[4px]`}
          >
            <span>No found item in list</span>
          </div>
        )}
      </div>
    </div>
  );
};

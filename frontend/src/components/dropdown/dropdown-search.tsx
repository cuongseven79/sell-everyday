import React from "react";
import SearchIcon from "components/Icons/SearchIcon";

interface DropdownSearchProps<ItemT> {
  items: ItemT[];
  renderItem: (item: ItemT) => React.ReactNode;
  optionDefault: string;
  onSubmitForm: (value: ItemT) => void;
  prefixCls?: string;
  selectCls?: string;
  inputCls?: string;
  textSize?: number;
  searchBtnCls?: string;
}

export const DropdownSearch = <T,>({
  items = [],
  renderItem = () => <></>,
  prefixCls = "",
  selectCls = "",
  inputCls = "",
  textSize = 13,
  searchBtnCls = "",
  onSubmitForm,
  optionDefault = "",
}: DropdownSearchProps<T>) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const selectRef = React.useRef<HTMLSelectElement>(null);

  function handleSubmitForm(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    let value = {
      select: selectRef.current?.value,
      input: inputRef.current?.value,
    };
    onSubmitForm(value as T);
  }

  // const [open, setOpen] = React.useState(false);
  // const openDropdown = open ? "block" : "hidden";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmitForm}
      className={`${prefixCls} flex rounded-md overflow-hidden h-full`}
    >
      <div className="text-black flex justify-center items-center border">
        <select
          name=""
          id=""
          className={`${selectCls} px-4 h-full outline-none text-[${textSize}px]`}
          ref={selectRef}
        >
          <option value={"all"}>{optionDefault}</option>
          {items && items.length > 0 ? (
            items.map((item, index) => (
              <option key={index}>{item && renderItem(item)}</option>
            ))
          ) : (
            <option value="nonvalue">No value</option>
          )}
        </select>
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder="Search anything..."
          className={`${inputCls} text-black h-full w-full outline-none text-[${textSize}px]`}
          ref={inputRef}
        />
      </div>
      <button
        type="submit"
        className={`${searchBtnCls} flex items-center justify-center h-full`}
      >
        <SearchIcon size={70} prefixCls={`${searchBtnCls}`} />
      </button>
    </form>
  );
};

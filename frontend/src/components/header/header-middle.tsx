import { DropdownSearch } from "components/dropdown/dropdown-search";
import { equipments } from "assets";
import CartIcon from "components/Icons/CartIcon";
import BadgeNumber from "components/badge/BadgeNumber";
import PopupCart from "components/PopupCart";

const HeaderMiddle = () => {
  return (
    <div className="bg-[#292931] flex justify-between items-center py-8 px-3">
      <div className="">
        <span className="text-[25px] text-white">SELL EVERYDAY</span>
      </div>
      <div className=" w-1/2 h-[50px]">
        <DropdownSearch
          items={equipments}
          inputCls="px-5"
          optionDefault="Categories"
          renderItem={(item) => item.name}
          searchBtnCls={"bg-[#FFD200]"}
          onSubmitForm={(value) => console.log(value)}
          textSize={15}
        />
      </div>
      <div className="relative bg-white h-full rounded-[5px] flex justify-center items-center ">
        <div className="flex px-5 py-3.5 border-r border-r-[#ddd] relative">
          <CartIcon size={21} />
          <BadgeNumber
            badgeContent={2}
            badgeSize={20}
            textSize={13}
            prefixCls="absolute right-[-10px]"
          />
        </div>
        <div className="">
          <span className="text-[#292931] px-5 text-sm">
            My Cart: $1,530.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;

import { DropdownSearch } from "components/dropdown/dropdown-search";
import { equipments } from "assets";
import Cart from "components/Cart";
import React from "react";
import { Link } from "react-router";
import { getCart, removeCart, setCart } from "constants/sessionStorage.const";
import { products as dummy } from "constants/cart.data";

const HeaderMiddle = () => {
  const products = getCart("cart");
  const [openPopup, setOpenPopup] = React.useState<boolean>(false);

  return (
    <div className="bg-[#292931] flex justify-between items-center py-8 px-3">
      <Link to={"/"} className="">
        <span className="text-[25px] text-white">SELL EVERYDAY</span>
      </Link>
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

      <button className="py-5 bg-white" onClick={() => setCart("cart", dummy)}>
        ADD
      </button>
      <button className="py-5 bg-white" onClick={() => removeCart("cart")}>
        REMOVE{" "}
      </button>

      <Cart
        products={products}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      />
    </div>
  );
};

export default HeaderMiddle;

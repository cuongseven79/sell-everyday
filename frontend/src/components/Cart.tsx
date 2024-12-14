import React, { useCallback, useEffect, useMemo } from "react";
import { Product } from "types/product.type";
import ip16pro from "assets/images/iphone_16pro.png";
import TrashIcon from "./Icons/TrashIcon";
import { Link } from "react-router";
import CartIcon from "./Icons/CartIcon";
import { setCart } from "constants/sessionStorage.const";
import BadgeNumber from "./badge/BadgeNumber";
import PopupConfirm from "./popup/PopupConfirm";

interface CartProps {
  products?: Product[];
  className?: string;
  style?: React.CSSProperties;
  openPopup?: boolean;
  setOpenPopup?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart = ({
  products,
  className,
  style,
  openPopup = false,
  setOpenPopup = () => {},
}: CartProps) => {
  const [cartProducts, setCartProducts] = React.useState<Product[]>(
    products || [],
  );
  const [popupConfirm, setPopupConfirm] = React.useState<boolean>(false);
  const [confirm, setConfirm] = React.useState<boolean>(false);

  const handlePopupConfirm = useCallback((confirm: boolean) => {
    setConfirm(confirm);
    setPopupConfirm(false);
  }, []);

  const subtotal = useMemo(() => {
    return cartProducts
      .reduce((total, product) => {
        return total + product.product_price * product.product_quantity;
      }, 0)
      .toFixed(2);
  }, [cartProducts]);

  useEffect(() => {
    setCartProducts(products || []);
  }, [products]);

  /*== Update == */
  const updateCart = useCallback((updatedProducts: Product[]) => {
    setCartProducts(updatedProducts);
    setCart("cart", updatedProducts);
  }, []);

  /*== Increase == */
  const handleIncrease = useCallback(
    (id: string) => {
      const updatedProducts = cartProducts.map((product) => {
        if (product.product_id === id) {
          return { ...product, product_quantity: product.product_quantity + 1 };
        }
        return product;
      });
      updateCart(updatedProducts);
    },
    [cartProducts, updateCart],
  );

  /*== Decrease == */
  const handleDecrease = useCallback(
    (id: string) => {
      const updatedCartProducts = cartProducts.map((product, index) => {
        if (product.product_id === id && product.product_quantity > 1) {
          return { ...product, product_quantity: product.product_quantity - 1 };
        }
        // CHƯA XỬ LÝ TRƯỜNG HỢP SẢN PHẨM CÓ SỐ LƯỢNG = 1
        if (product.product_id === id && product.product_quantity === 1) {
          alert(
            "CHƯA XỬ LÝ TRƯỜNG HỢP SẢN PHẨM CÓ SỐ LƯỢNG = 1, dòng 78 [Cart.tsx]",
          );
        }
        return product;
      });
      updateCart(updatedCartProducts);
    },
    [cartProducts, updateCart],
  );

  /*== Remove == */
  const handleRemove = useCallback(
    (id: string) => {
      const updatedProducts = cartProducts.filter(
        (product) => product.product_id !== id,
      );
      updateCart(updatedProducts);
    },
    [cartProducts, updateCart],
  );

  /*== Input Change == */
  const handleOnchange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
      const newQuantity = Number(e.target.value);
      const updatedProducts = cartProducts.map((product) => {
        if (product.product_id === id) {
          return { ...product, product_quantity: newQuantity };
        }
        return product;
      });
      updateCart(updatedProducts);
    },
    [cartProducts, updateCart],
  );

  const activePopup = openPopup ? "block" : "hidden";
  return (
    <div
      className="relative bg-white h-full rounded-[5px] flex justify-center items-center "
      onMouseEnter={() => setOpenPopup(true)}
      onMouseLeave={() => setOpenPopup(false)}
    >
      <div className="flex px-5 py-3.5 border-r border-r-[#ddd] relative">
        <CartIcon size={21} />
        <BadgeNumber
          badgeContent={cartProducts.length}
          badgeSize={20}
          textSize={13}
          prefixCls="absolute right-[-10px]"
        />
      </div>
      <span className=" text-[#292931] px-5 text-sm block">
        {" "}
        My Cart: <b className="w-20 truncate">${subtotal}</b>
      </span>
      <div className={` absolute right-0 w-[25em] top-12`}>
        <div
          className={`${activePopup} bg-white w-[25em] mt-3 p-4 shadow-xl transition-all delay-200`}
        >
          <div className="absolute right-10 top-[1px] w-0 h-0 border-l-[10px] border-l-transparent border-b-[15px] border-b-white border-r-[10px] border-r-transparent"></div>
          <div>
            <div className="flex justify-between text-sm">
              <span>
                <b>{cartProducts.length || 0}</b> products in Cart
              </span>
              <span>Cart Subtotal:</span>
            </div>
            <div className="text-right text-2xl font-semibold">
              <h1>$ {subtotal}</h1>
            </div>
            <Link
              to={"/checkout"}
              className="block text-center w-full my-3 py-4 uppercase rounded-md hover:bg-[#c9ae39] bg-[#FFD200] text-white text-[14px] font-semibold font-[Open Sans, sans-serif]"
            >
              proceed to checkout
            </Link>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {cartProducts && cartProducts.length > 0 ? (
              cartProducts.map((item) => {
                return (
                  <div
                    key={item.product_id}
                    className="flex justify-evenly items-center gap-6 border-b-[#DDDDDD] border-b p-5 hover:bg-[#dddddd]/50 cursor-pointer"
                  >
                    <div>
                      <img
                        src={ip16pro || item.product_image}
                        width={100}
                        alt=""
                      />
                    </div>
                    <div className="w-full h-full flex flex-col justify-between gap-4 text-[14px]">
                      <Link
                        to={`/${item.product_name?.toLowerCase().replaceAll(" ", "-")}`}
                      >
                        <h2 className="hover:text-[#FFD200]">
                          {item.product_name}
                        </h2>
                        <span className="font-bold">${item.product_price}</span>
                      </Link>
                      <div className="w-full h-full flex justify-between items-center">
                        <div>
                          <button
                            className="hover:bg-[#9e9a9a] bg-[#dbdbdb] p-1 px-3 rounded-sm"
                            onClick={() => handleDecrease(item.product_id)}
                          >
                            -
                          </button>
                          <input
                            className="bg-[#ffffff] text-center border w-1/6 mx-1 p-1 outline-none"
                            type="number"
                            min={0}
                            value={item.product_quantity}
                            onChange={(e) => handleOnchange(e, item.product_id)}
                            disabled
                          />
                          <button
                            className="hover:bg-[#9e9a9a] bg-[#dbdbdb] p-1 px-3 rounded-sm"
                            onClick={() => handleIncrease(item.product_id)}
                          >
                            +
                          </button>
                        </div>
                        <div onClick={() => handleRemove(item.product_id)}>
                          <TrashIcon size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className=" w-full h-full flex flex-col items-center justify-center text-[14px] py-5 gap-5">
                <CartIcon size={40} />
                You have no items in your shopping cart.
              </div>
            )}
          </div>
          {popupConfirm && <PopupConfirm onConfirm={handlePopupConfirm} />}
          <div className="py-5">
            <Link
              to={"/cart"}
              className="block text-center w-full uppercase hover:bg-[#979797]  bg-[#DDDDDD] p-3 rounded-md text-[14px] font-semibold font-[Open Sans, sans-serif]"
            >
              view and edit cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import { categories } from "assets";
import DropdownMegaMenu from "components/dropdown/dropdown-mega-menu";
import DropdownContent from "components/dropdown/dropdown-content";
import ArrowDownIcon from "components/Icons/ArrowDownIcon";
import { Link } from "react-router";
import { Fragment } from "react/jsx-runtime";

export const HeaderBottom = () => {
  return (
    <div className="p-3 bg-[#292931]">
      <DropdownMegaMenu
        arrow
        menu={categories}
        title={"All categories"}
        textSize={14}
        iconSize={24}
        bgColor={"#FFD200"}
        renderMenu={(menuItem) => (
          <div className="flex justify-between w-full">
            {menuItem.category_name}
            {menuItem && menuItem.category_types.length > 0 && (
              <ArrowDownIcon />
            )}
          </div>
        )}
        renderSubMenu={(itemSelected) => (
            <DropdownContent
              menu={itemSelected.category_types}
              prefixItemCls="text-sm "
              renderMenu={(type) => {
                return (
                  <Fragment>
                    <h3 className="font-semibold ">{type.name}</h3>
                    <div className="mt-1.5 flex flex-col">
                      {type.products.map((product) => (
                        <Link
                          key={product.product_id}
                          to={`/products/${product.product_name.toLowerCase().replaceAll(" ", "-")}`}
                          className="text-gray-600 hover:text-[#FFD200]"
                        >
                          {product.product_name}
                        </Link>
                      ))}
                    </div>
                  </Fragment>
                );
              }}
            />
        )}
      />
    </div>
  );
};

import { DropdownSearch } from "components/dropdown/dropdown-search";
import { equipments } from "assets";

const HeaderMiddle = () => {
  return (
    <div className="bg-[#292931] flex justify-between items-center ">
      <div className="">
        <span className=" text-[40px]">LOGO</span>
      </div>
      <div>
        <DropdownSearch
          items={equipments}
          optionDefault="Categories"
          renderItem={(item) => item.name}
          searchBgColor={"bg-[#FFD200]"}
          onSubmitForm={(value) => console.log(value)}
        />
      </div>
      <div className=""></div>
    </div>
  );
};

export default HeaderMiddle;

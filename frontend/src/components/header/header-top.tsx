import React from "react";
import { Link } from "react-router";
import { locates } from "assets";
import { DropdownButton } from "components/dropdown/dropdown-button";
import useLanguage from "hooks/useLanguage";

const HeaderTop: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  function handleMouseDownItem(language: any) {
    const { country, currency, flagURL, url } = language;
    setLanguage({ country, currency, flagURL, url });
  }

  return (
    <div className="h-9 flex justify-between items-center text-[12px] px-5 bg-[#ffd200]" >
      <div className="flex space-x-7">
        <p className="text-[12px]">Welcome to Sell Everyday</p>
        <div className="uppercase space-x-2">
          <Link to="/sign-in">Sign In</Link> {"/"}
          <Link to="/sign-up">Create an account</Link>
        </div>
      </div>
      <div className="flex h-full">
        <DropdownButton
          arrow
          items={locates}
          onSelected={handleMouseDownItem}
          title={
            <div className="flex gap-2 items-center">
              <img src={language.flagURL} width={20} alt="icon" />
              <span>
                {language.country} - {language.currency}
              </span>
            </div>
          }
          renderItem={(item) => (
            <Link
              to={item.url}
              className="flex items-center gap-2 w-full h-full pl-3"
            >
              <img src={item.flagURL} width={20} height={20} alt="icon" />
              <span>
                {item.country} - {item.currency}
              </span>
            </Link>
          )}
        />
      </div>
    </div>
  );
};

export default HeaderTop;

import Homepage from "pages/homepage/Homepage";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const BodyLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
      {/* <Homepage /> */}
    </div>
  );
};

export default BodyLayout;

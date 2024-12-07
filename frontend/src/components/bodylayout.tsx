import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const BodyLayout: React.FC<LayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default BodyLayout;

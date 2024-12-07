import React from "react";
import BodyLayout from "components/bodylayout";
import HeaderTop from "components/header/header-top";
import HeaderMiddle from "components/header/header-middle";
import HeaderBottom from "components/header/header-bottom";
import { BrowserRouter } from "react-router";

interface RootLayoutProps {
  children?: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <BrowserRouter>
      <header>
        <HeaderTop />
        {/* <HeaderMiddle /> */}
        {/* <HeaderBottom /> */}
      </header>
      <BodyLayout children={children} />
      <footer>{/* <h1>THIS IS FOOTER</h1> */}</footer>
    </BrowserRouter>
  );
}

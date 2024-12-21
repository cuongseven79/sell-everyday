import React, { Fragment, lazy, Suspense } from "react";
import BodyLayout from "components/BodyLayout";

import HeaderTop from "components/header/header-top";
import HeaderMiddle from "components/header/header-middle";
import { HeaderBottom } from "components/header/header-bottom";
import { Route, Routes } from "react-router";

interface RootLayoutProps {
  children?: React.ReactNode;
}

const Homepage = lazy(() => import("./pages/homepage/Homepage"));
const Products = lazy(() => import("./pages/product/Products"));
const Shop = lazy(() => import("./pages/shop/Shop"));
const Blogs = lazy(() => import("./pages/blogs/Blogs"));
const About = lazy(() => import("./pages/about/About"));
const ProductDetails = lazy(() => import("./pages/product/ProductDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Fragment>
      <header>
        <HeaderTop />
        <HeaderMiddle />
        <HeaderBottom />
      </header>
      <div>
        <Suspense fallback={<div className="container">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <BodyLayout children={children} />
      </div>
      <footer>{/* <h1>THIS IS FOOTER</h1> */}</footer>
    </Fragment>
  );
}

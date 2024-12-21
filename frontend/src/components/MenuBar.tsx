import React from "react";
import { Link } from "react-router";

// interface NavbarProps {}
const routers = [
  { name: "Home", path: "/", active: true },
  { name: "Shop", path: "/shop" },
  { name: "Blog", path: "/blogs" },
  { name: "About Us", path: "/about-us" },
  { name: "Contact", path: "/contact" },
];
const MenuBar: React.FC = () => {
  return (
    <div className="flex gap-2">
      {routers.map((router, index) => (
        <Link
          key={index}
          to={router.path}
          className={`text-white my-auto p-3 rounded-md uppercase text-sm font-semibold hover:bg-[#FFD200] hover:text-black ${router.active ? "bg-[#FFD200] text-black" : ""}`}
        >
          {router.name}
        </Link>
      ))}
    </div>
  );
};

export default MenuBar;

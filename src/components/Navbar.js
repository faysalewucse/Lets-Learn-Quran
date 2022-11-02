import React, { useState } from "react";

export default function Navbar() {
  let Links = [
    { name: "হোম", link: "/" },
    { name: "কুরআন পড়ুন", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="text-white px-10 lg:py-10 py-5 lg:bg-nav bg-navdark lg:flex justify-between lg:items-center">
      <h1 className="font-bold text-2xl">LLQ</h1>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
      >
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>
      <div
        className={`lg:flex justify-between lg:items-center gap-40 mt-10 lg:mt-0 ${
          !open && "hidden"
        }`}
      >
        <ul className="lg:flex justify-around gap-10 font-sandwip text-3xl">
          {/* hover:text-navdark cursor-pointer transition-all duration-300 */}
          {Links.map((link) => (
            <li key={link.name} className="lg:ml-8 text-2xl lg:my-0 my-2">
              <a
                href={link.link}
                className="text-white hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="bg-[#F4C079] hover:bg-[#da9f4d] text-black lg:text-xl lg:px-10 px-1 py-1 rounded-sm font-jonota">
          লগিন
        </button>
      </div>
    </div>
  );
}

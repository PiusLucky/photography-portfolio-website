"use client";

import { useState } from "react";
import { X } from "lucide-react";
import MainButton from "./MainButton";
import { PORTFOLIO_OWNER_FIRSTNAME } from "@/lib/constant";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-[9999] ">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in bg-background p-4 pt-0 pb-0 border-b border-b-superGray">
        <div className="flex justify-between mx-[41px] gap-8 items-center ">
          <div className="flex gap-[2.5rem] items-center">
            <div className="flex border-r border-r-superGray self-stretch h-[7.15rem]"></div>
            <div className="text-2xl md:text-4xl font-extrabold uppercase text-white">
              {PORTFOLIO_OWNER_FIRSTNAME}
            </div>
          </div>
          <div className="flex text-[16px] items-center select-none border border-superGray h-[5.34rem] rounded-t-[0.75rem] mt-[1.88rem]">
            <p
              className={`hover:text-white hover:rounded-tl-[0.75rem] hover:bg-superGray cursor-pointer flex items-center px-[3.12rem] gap-2 border-r border-r-superGray self-stretch  font-[500] text-customGrayAlt2`}
            >
              Home
            </p>
            <p
              className={`hover:text-white hover:bg-superGray cursor-pointer flex items-center px-[3.12rem] gap-2 border-r border-r-superGray self-stretch  font-[500] text-customGrayAlt2`}
            >
              About Me
            </p>
            <p
              className={`hover:text-white hover:bg-superGray cursor-pointer flex items-center px-[3.12rem] gap-2 border-r border-r-superGray self-stretch  font-[500] text-customGrayAlt2`}
            >
              Portfolio
            </p>
            <p
              className={`hover:text-white  hover:rounded-tr-[0.75rem] hover:bg-superGray cursor-pointer flex items-center px-[3.12rem] gap-2 self-stretch   font-[500] text-customGrayAlt2`}
            >
              Services
            </p>
          </div>
          <div className="flex items-center gap-[40px] select-none">
            <div className="flex gap-[2.5rem] items-center">
              <div className="text-2xl md:text-4xl font-extrabold uppercase text-white">
                <MainButton text="Contact Me" />
              </div>

              <div className="flex border-r border-r-superGray self-stretch h-[7.15rem]"></div>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-background animate-in fade-in zoom-in border-b border-b-superGray  ${
          menu ? " bg-primary py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div
            className={`flex gap-[50px] text-[16px] items-center select-none ${
              !menu ? "ml-[1rem]" : ""
            }`}
          >
            <div className="flex gap-4 items-center">
              {!menu && (
                <div className="flex border-r border-r-superGray self-stretch h-[6.4rem]"></div>
              )}

              <div className="text-2xl md:text-4xl font-extrabold uppercase text-white">
                {PORTFOLIO_OWNER_FIRSTNAME}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-white"
                onClick={toggleMenu}
              />
            ) : (
              <div className="flex items-center gap-[40px] select-none">
                <div className="flex items-center">
                  <div className="text-2xl md:text-4xl font-extrabold uppercase mt-8  text-white outline outline-[1px] outline-superGray rounded-tl-[1.25rem] ">
                    <img
                      src="/images/hamburger.png"
                      alt="logo"
                      className="cursor-pointer animate-in fade-in zoom-in"
                      onClick={toggleMenu}
                    />
                  </div>
                  {!menu && (
                    <div className="flex border-r border-r-superGray self-stretch h-[4.15rem] mr-3"></div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              <p className={`text-white cursor-pointer`}>Home</p>
              <p className={`text-white cursor-pointer`}>About Me</p>
              <p className={`text-white cursor-pointer`}>Portfolio</p>
              <p className={`text-white cursor-pointer`}>Services</p>

              <div className="flex flex-col gap-[40px] select-none">
                <MainButton text="Contact Me" classes="hover:bg-background" />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;

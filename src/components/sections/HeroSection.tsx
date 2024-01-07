import { PORTFOLIO_OWNER_FULLNAME } from "@/lib/constant";
import React from "react";

function HeroSection() {
  return (
    <section>
      <section className="flex justify-between md:items-center flex-col md:flex-row px-4 md:px-[6rem] gap-16">
        <div>
          <p className="text-customGray uppercase text-[1.375rem] font-[500]">
            Stunning Photography by
          </p>
          <p className="uppercase font-[600] text-[2.5rem] md:text-[5rem] text-white md:w-[min-content] lg:w-[max-content]">
            {PORTFOLIO_OWNER_FULLNAME}
          </p>
        </div>
        <div className="hidden lg:block">
          <img src="/images/stylish_double_c.png" alt="stylish double c" />
        </div>
        <div className="mt-[1.25rem] md:mt-[0]">
          <div className="flex gap-2">
            <p className="text-[1.75rem] md:text-[3.625rem] text-white font-[600]">
              Let&apos;s
            </p>
            <img
              src="/images/arrow_purple_button.png"
              alt="arrow purple button"
            />
          </div>
          <div className="text-[1.75rem] md:text-[3.625rem] text-white font-[600]">
            Work Together
          </div>
        </div>
      </section>
      <section className="flex w-full mt-[2.5rem] md:mt-0">
        <img
          src="/images/hero_marquee.png"
          className="hidden md:block "
          alt="photography category list"
        />
        <img
          src="/images/hero_marquee_small.png"
          className="block md:hidden grow"
          alt="photography category list"
        />
      </section>
      <section className="flex w-full  md:px-[6rem]">
        <img
          src="/images/hero.png"
          className="hidden md:block grow"
          alt="photography category list"
        />
        <img
          src="/images/hero_small.png"
          className="block md:hidden grow"
          alt="photography category list"
        />
      </section>
    </section>
  );
}

export default HeroSection;

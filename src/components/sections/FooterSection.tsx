import React from "react";
import { Separator } from "../ui/separator";
import Socials from "../common/Socials";

function FooterSection() {
  const homeData = ["About Me", "My Works", "Testimonials"];
  const clientData = ["KLOVESTO", "Nukeway", "Cloven's", "MenVol"];
  const portfolioData = [
    "Events",
    "Portrait",
    "Branding",
    "Commerciale",
    "Wedding",
  ];
  const servicesData = ["Portraits", "Events", "Commercial"];
  return (
    <section>
      <div className="flex justify-between">
        <div className="pt-4 md:pt-[5rem] hidden xl:block">
          <img src="/images/stylish_e.png" alt="stylish e symbol left" />
        </div>
        <div className="border-x border-x-lightDark flex-grow flex justify-between flex-col lg:flex-row">
          <div className="p-4 md:p-[5rem]">
            <p className="text-customGrayAlt text-[1.25rem] mb-16 font-[600]">
              A more meaningful home for photography
            </p>
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
          </div>
          <div className="flex justify-between flex-wrap gap-8 w-full p-4 md:p-[5rem]">
            <div>
              <p className="uppercase mb-[1.63rem] text-customGrayAlt text-[1.125rem] font-[600]">
                Home
              </p>
              {homeData.map((item, index) => (
                <div className="mb-[1.13rem]" key={index}>
                  <p className="uppercase text-[#F2F2F3] text-[1.125rem] font-[600]  cursor-pointer">
                    {item}
                  </p>
                  <div className="w-[6rem]">
                    <Separator className="bg-superGray h-[2px]" />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="uppercase mb-[1.63rem] text-customGrayAlt text-[1.125rem] font-[600]">
                Clients
              </p>
              {clientData.map((item, index) => (
                <div className="mb-[1.13rem]" key={index}>
                  <p className="uppercase text-[#F2F2F3] text-[1.125rem] font-[600]  cursor-pointer">
                    {item}
                  </p>
                  <div className="w-[6rem]">
                    <Separator className="bg-superGray h-[2px]" />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="uppercase mb-[1.63rem] text-customGrayAlt text-[1.125rem] font-[600]">
                Portfolio
              </p>
              {portfolioData.map((item, index) => (
                <div className="mb-[1.13rem]" key={index}>
                  <p className="uppercase text-[#F2F2F3] text-[1.125rem] font-[600]  cursor-pointer">
                    {item}
                  </p>
                  <div className="w-[6rem]">
                    <Separator className="bg-superGray h-[2px]" />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="uppercase mb-[1.63rem] text-customGrayAlt text-[1.125rem] font-[600]">
                Services
              </p>
              {servicesData.map((item, index) => (
                <div className="mb-[1.13rem]" key={index}>
                  <p className="uppercase text-[#F2F2F3] text-[1.125rem] font-[600]  cursor-pointer">
                    {item}
                  </p>
                  <div className="w-[6rem]">
                    <Separator className="bg-superGray h-[2px]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-4 md:pt-[5rem] hidden xl:block">
          <img src="/images/stylish_e_right.png" alt="stylish e symbol right" />
        </div>
      </div>
      <div className="px-4 md:px-[10rem] border-t py-[1.25rem] border-lightDark text-customGrayAlt text-[1.125rem] flex justify-between flex-col gap-4 xl:flex-row items-center">
        <div className="flex gap-3 items-center">
          <p>Terms & Conditions</p>
          <Separator
            orientation="vertical"
            className="h-[1.3125rem] bg-lightDark"
          />
          <p>Privacy Policy</p>
        </div>
        <Socials />
        <p>© 2024 Damien Braun Photography. All rights reserved.</p>
      </div>
    </section>
  );
}

export default FooterSection;

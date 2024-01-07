import React from "react";

function LargeTextSection() {
  return (
    <section className="mt-[5rem] md:mt-[12.5rem]">
      <div className="flex justify-end px-4 md:px-[6rem]  mb-4 md:mb-[6.25rem]">
        <img
          src="/images/damien_big_text.png"
          alt="large portfolio owner text"
        />
      </div>
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
    </section>
  );
}

export default LargeTextSection;

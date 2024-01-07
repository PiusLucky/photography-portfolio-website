import React from "react";

function Socials() {
  return (
    <div className="z-[90]   lg:border lg:border-lightDark  rounded-[6.25rem] inline-flex justify-between p-[0.62rem] gap-4">
      <img
        src="/images/facebook_icon.png"
        alt="facebook icon"
        className="cursor-pointer w-[2rem] h-[2rem]"
      />
      <img
        src="/images/x_icon.png"
        alt="x icon"
        className="cursor-pointer w-[2rem] h-[2rem]"
      />
      <img
        src="/images/instagram_icon.png"
        alt="instagram icon"
        className="cursor-pointer w-[2rem] h-[2rem]"
      />
    </div>
  );
}

export default Socials;

import React from "react";
import Socials from "../common/Socials";

interface IProps {
  name: string;
  country: string;
  review: string;
}

function TestimonialCard({ name, country, review }: IProps) {
  return (
    <div className="relative md:min-w-[25rem] bg-[#0E0E10] z-[50] py-[3rem] px-3 md:px-[2.5rem] rounded-[0.75rem] rounded-tr-[0]">
      <div className="flex justify-between gap-8">
        <div>
          <p className="text-customGray90 text-[1.25rem] font-[500]">{name}</p>
          <p className="text-customGray text-[1.125rem]">{country}</p>
        </div>
        <Socials />
      </div>
      <div className="z-[90]">
        <div className=" mb-[1.87rem]">
          <img src="/images/stars.png" alt="star rating" />
        </div>
        <p className="text-customGray90 text-[1.25rem] font-[500]">{review}</p>

        <div className="absolute top-0 right-0 -z-[10] rounded-[0.75rem]">
          <img src="/images/top_right_shape.png" alt="top right shape" />
        </div>

        <div className="absolute bottom-0 left-0 -z-[50]">
          <img
            src="/images/bottom_left_shape.png"
            alt="bottom left shape"
            className="-z-10"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;

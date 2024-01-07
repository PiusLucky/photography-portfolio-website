import React from "react";

function ServiceCard() {
  const serviceHighlightData = [
    "Coverage for weddings, parties, corporate functions, and more.",
    "Skilled photographers who know how to seize the moment.",
    "A mix of candid and posed shots for a comprehensive story.",
    "Quick turnaround for you to relive the day's highlights.",
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      <div>
        <div className="flex gap-2">
          <p className="text-[1.75rem] md:text-[3.625rem] text-customGrayAlt font-[600] uppercase">
            Events
          </p>
          <img
            src="/images/arrow_purple_button.png"
            alt="arrow purple button"
          />
        </div>
        <p className="text-customGrayAlt2 text-[1/125rem] mt-[0.75rem]">
          Our event photography service is dedicated to capturing the magic of
          your special occasions. Whether it&apos;s a wedding, corporate event,
          or milestone celebration, we&apos;re there to document every heartfelt
          moment. We blend into the background, ensuring natural and candid
          shots that reflect the emotions of the day
        </p>

        <p className="mt-[3.12rem] mb-[1.25rem] text-lightGray font-[500] text-[1.125rem]">
          Service Highlights
        </p>
        <div className="flex flex-col gap-[0.62rem]">
          {serviceHighlightData.map((highlight, index) => (
            <div
              key={index}
              className="flex items-center gap-2 border border-lightDark p-[1.12rem] rounded-[0.75rem]"
            >
              <img src="/images/legged_stars_gray.png" alt="gray star" />
              <p className="uppercase text-customGrayAlt2 text-[1.125rem]">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <img
          src="/images/damien_2.png"
          alt="damien on stage"
          className="rounded-[1.25rem] rounded-bl-[6.25rem]"
        />
      </div>
    </div>
  );
}

export default ServiceCard;

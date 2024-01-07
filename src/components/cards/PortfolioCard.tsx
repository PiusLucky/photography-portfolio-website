import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";

interface IProps {
  imageUrl: string;
  title: string;
  date: string;
  link: string;
}

function PortfolioCard({ imageUrl, title, date, link }: IProps) {
  return (
    <div>
      <div className="mb-[1.19rem]">
        <img
          src={imageUrl}
          alt="portfolio image"
          className="rounded-[1.25rem] w-[31.18rem] h-[32.43rem] object-cover"
        />
      </div>
      <div className="flex md:justify-between flex-col gap-4 xl:flex-row">
        <div>
          <p className="text-lightGray font-[500] text-[1.25rem]">{title}</p>
          <p className="text-customGray font-[500] text-[1.25rem]">{date}</p>
        </div>
        <div>
          <Link href={link}>
            <div>
              <div className="flex gap-4 underline">
                <p className="text-[1.125rem] text-[#F2F2F3] font-[500]">
                  View Project
                </p>
                <div className="w-8 h-8">
                  <img src="/images/arrow_up.png" alt="arrow up icon" />
                </div>
              </div>
              <Separator className="bg-superGray h-1 hidden xl:block" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;

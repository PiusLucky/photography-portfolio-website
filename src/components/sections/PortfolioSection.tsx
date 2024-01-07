import React from "react";
import Header from "../common/Header";
import MainButton from "../common/MainButton";
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import PortfolioCard from "../cards/PortfolioCard";

function PortfolioSection() {
  const portfolioData = [
    {
      id: 0,
      title: "Faces of Resilience",
      date: "March 2022",
      link: "/",
      imageUrl: "/images/lady_1.png",
    },
    {
      id: 1,
      title: "A Wedding Tale",
      date: "January 2020",
      link: "/",
      imageUrl: "/images/lady_2.png",
    },
    {
      id: 2,
      title: "Product Elegance",
      date: "January 2020",
      link: "/",
      imageUrl: "/images/box.png",
    },
  ];
  return (
    <section className="">
      <section className="flex justify-between flex-col md:flex-row gap-[1.25rem]">
        <div>
          <Header
            title="Portfolio"
            description="Explore My photography work."
          />
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden lg:inline-flex border border-lightDark rounded-[6.25rem]  justify-between p-[0.62rem] gap-4 w-[170px]">
            <img
              src="/images/left_icon.png"
              alt="facebook icon"
              className="cursor-pointer"
            />
            <img
              src="/images/right_icon.png"
              alt="x icon"
              className="cursor-pointer"
            />
          </div>
          <MainButton
            text="View All Works"
            rightIconComponent={<ArrowRight />}
            classes="w-[13.12rem]"
          />
        </div>
      </section>
      <Separator className="bg-lightDark my-8 mb-[2.5rem] md:mb-[5rem]" />
      <div className="flex justify-between gap-[3.12rem] flex-col xl:flex-row">
        {portfolioData.map((portfolio) => (
          <PortfolioCard
            imageUrl={portfolio.imageUrl}
            key={portfolio.id}
            title={portfolio.title}
            date={portfolio.date}
            link={portfolio.link}
          />
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;

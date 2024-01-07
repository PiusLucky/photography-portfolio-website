import React from "react";
import Header from "../common/Header";
import MainButton from "../common/MainButton";
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
  return (
    <section className="">
      <section className="flex justify-between flex-col md:flex-row gap-[1.25rem]">
        <div>
          <Header title="Services" description="My Photography Services" />
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
            text="View All Services"
            rightIconComponent={<ArrowRight />}
            classes="w-[13.12rem]"
          />
        </div>
      </section>
      <Separator className="bg-lightDark my-8 mb-[2.5rem] md:mb-[5rem]" />
      <ServiceCard />
    </section>
  );
}

export default ServiceSection;

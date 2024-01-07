import React from "react";
import Header from "../common/Header";
import { PORTFOLIO_OWNER_FIRSTNAME } from "@/lib/constant";
import MainButton from "../common/MainButton";
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import AboutCard from "../cards/AboutCard";
function AboutSection() {
  return (
    <section>
      <section className="flex justify-between gap-[1.25rem]">
        <div>
          <Header
            title="About"
            description={`I AM ${PORTFOLIO_OWNER_FIRSTNAME}`}
          />
        </div>
        <div>
          <MainButton text="Know More" rightIconComponent={<ArrowRight />} />
        </div>
      </section>
      <Separator className="bg-lightDark my-8 mb-[2.5rem] md:mb-[5rem]" />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-[1.25rem]">
        <div className="flex-grow-1">
          <img src="/images/damien_alt.png" alt="portfolio owner" />
        </div>
        <AboutCard />
      </section>
    </section>
  );
}

export default AboutSection;

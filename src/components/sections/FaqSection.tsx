import React from "react";
import Header from "../common/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FaqSection() {
  const faqData = [
    {
      id: "0",
      question: "What type of photography do you specialize in?",
      answer:
        "I specialize in [Portrait, Landscape, Event, etc. photography, capturing moments that tell unique stories.",
    },
    {
      id: "1",
      question: "How can I book a photography session with you?",
      answer:
        "I specialize in [Portrait, Landscape, Event, etc. photography, capturing moments that tell unique stories.",
    },
    {
      id: "2",
      question: "What equipment do you use for your photography?",
      answer:
        "I specialize in [Portrait, Landscape, Event, etc. photography, capturing moments that tell unique stories.",
    },
    {
      id: "3",
      question: "Can I request a specific location for a ",
      answer:
        "I specialize in [Portrait, Landscape, Event, etc. photography, capturing moments that tell unique stories.",
    },
    {
      id: "4",
      question: "What is your editing process like?",
      answer:
        "I specialize in [Portrait, Landscape, Event, etc. photography, capturing moments that tell unique stories.",
    },
    {
      id: "5",
      question: "Are digital files included in your photography packages?",
      answer:
        "I specialize in [Portrait, Landscape, Event, etc. photography, capturing moments that tell unique stories.",
    },
    {
      id: "6",
      question: "Do you offer prints of your photographs?",
      answer:
        "Yes, prints are available for purchase. Explore the 'Prints' section for more details on sizes and pricing.",
    },
    {
      id: "7",
      question:
        "How long does it take to receive the edited photos after a session?",
      answer:
        "Yes, prints are available for purchase. Explore the 'Prints' section for more details on sizes and pricing.",
    },
  ];

  const validIndexForBorderRight = (index: number) => {
    if (index === 0 || index === 2 || index === 4 || index === 6) {
      return true;
    }
    return false;
  };
  return (
    <section className="">
      <section className="flex justify-between gap-[1.25rem] mb-[3.12rem]">
        <div>
          <Header title="faqs" description="Frequently Asked Questions" />
        </div>
      </section>
      <div className="flex justify-between gap-[3.12rem] flex-col xl:flex-row">
        <Accordion
          type="single"
          collapsible
          className="w-full grid grid-cols-1 md:grid-cols-2"
        >
          {faqData.map((faq, index) => (
            <AccordionItem
              value={faq.id}
              key={faq.id}
              className={`border-y border-y-lightDark px-[3.12rem] py-[1.88rem] ${
                validIndexForBorderRight(index)
                  ? "md:border-r md:border-r-lightDark"
                  : ""
              }`}
            >
              <AccordionTrigger className="text-customGrayAlt2 font-[600] text-[1rem] md:text-[1.25rem] uppercase">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-customGrayAlt text-[0.875rem] md:text-[1.125rem]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FaqSection;

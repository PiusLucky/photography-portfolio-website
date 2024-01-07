import React from "react";

interface IProps {
  title: string;
  description: string;
  isSmall?: boolean;
}

export default function Header({ title, description, isSmall }: IProps) {
  return (
    <div>
      <p
        className={`text-customGrayAlt font-[600] text-[0.875rem] ${
          isSmall ? "md:text-[1.125rem]" : "md:text-[1.25rem]"
        } uppercase`}
      >
        {title}
      </p>
      <p
        className={`text-white font-[600] text-[1.75rem] ${
          isSmall ? "md:text-[1.75rem] text-[#CACACE]" : "md:text-[3.625rem]"
        } uppercase`}
      >
        {description}{" "}
      </p>
    </div>
  );
}

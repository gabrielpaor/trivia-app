import React, { FC, JSX } from "react";
import Image from "next/image";

interface HeaderProps {
  title?: string;
  className?: string;
  questionIndex?: number | undefined;
}

const Header: FC<HeaderProps> = ({ title, className, questionIndex }) => {
  const logo = require("../../../public/images/logo.png");
  return (
    <div className="flex items-center justify-start py-4 w-full border-b">
      <div className="flex flex-row justify-between items-center lg:w-full">
        <div className="flex flex-row items-center gap-4">
          <Image src={logo} alt="Zeniark Logo" width={50} height={50} />
          <p className="text-sm font-semibold md:text-md lg:text-md lg:text-lg">
            {title}
          </p>
        </div>
        <div className="flex justify-center items-center w-[4rem] lg:w-[6rem]">
          <p className="text-sm md:text-md lg:text-xl ">
            {questionIndex} of 10
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

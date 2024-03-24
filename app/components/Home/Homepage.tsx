import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface HomepageProps {
  title?: string;
  subTitle?: string;
}

const Homepage: FC<HomepageProps> = ({ title, subTitle }) => {
  const zeniarkLogo = require("@/public/images/zeniark-logo.png");
  return (
    <div className="items-center justify-center flex flex-col py-[5rem]">
      <Image src={zeniarkLogo} alt="Zeniark Logo" />
      <h1 className="text-3xl font-bold mt-8 text-center sm:text-center">
        {title}
      </h1>
      <p className="text-lg sm:text-md mt-3 font-semibold text-center sm:text-center ">
        {subTitle}
      </p>
      <div className="custom-bg-sky flex items-center justify-center py-4 px-[5rem] rounded-lg my-8">
        <p className="text-2xl text-white font-bold">Can you score 10/10?</p>
      </div>
      <Link
        href="/quiz"
        className="underline underline-offset-8 custom-text-sky text-3xl font-bold mt-5"
      >
        LET&apos;S START!
      </Link>
    </div>
  );
};

export default Homepage;

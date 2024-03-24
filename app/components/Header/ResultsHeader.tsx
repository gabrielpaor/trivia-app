import React, { FC, JSX } from "react";
import Image from "next/image";

interface ResultsHeaderProps {}

const ResultsHeader: FC<ResultsHeaderProps> = ({}) => {
  return (
    <div className="flex items-center justify-between py-3 w-full flex-row">
      <Image
        src={require("@/public/images/logo.png")}
        alt="Zeniark Logo"
        width={50}
        height={50}
      />
      <p className="text-xl font-semibold ml-[-3rem]">Quiz Result</p>
      <div></div>
    </div>
  );
};

export default ResultsHeader;

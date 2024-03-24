import React, { JSX, FC } from "react";
import ResultsHeader from "../Header/ResultsHeader";

interface ResultContainerProps {
  children?: React.ReactNode;
}

const ResultContainer: FC<ResultContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[100%]">
      <div className="w-full max-w-3xl bg-white rounded-md shadow-md items-center justify-center flex flex-col pb-10 px-8 lg:my-[5rem] md:w-[80%] md:my-[2rem]">
        <ResultsHeader />
        {children}
      </div>
    </div>
  );
};

export default ResultContainer;

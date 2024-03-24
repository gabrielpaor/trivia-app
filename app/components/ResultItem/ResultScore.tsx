import React, { FC } from "react";

interface ResultScoreProps {
  score?: number;
  totalQuestions?: number;
}

const ResultScore: FC<ResultScoreProps> = ({ score, totalQuestions }) => {
  return (
    <div className="py-6 border-y-2 mb-5">
      <h1 className="text-5xl py-3 text-center font-bold">
        {score}/{totalQuestions}
      </h1>
      <p className="text-2xl text-center font-semibold">Your score</p>
    </div>
  );
};

export default ResultScore;

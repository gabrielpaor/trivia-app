"use client";
import React, { FC, JSX, useContext, useState } from "react";
import FormContainer from "../components/Container/FormContainer";
import ResultContainer from "../components/Container/ResultContainer";
import questions from "../questions.json";
import Link from "next/link";
import ResultItem from "../components/ResultItem/ResultItem";
import { useRouter } from "next/router";
import { Context } from "../globalContext/GlobalContext";
import ResultScore from "../components/ResultItem/ResultScore";

interface ResultPageProps {}

const ResultPage: FC<ResultPageProps> = ({}) => {
  const [loading, setLoading] = useState(true);
  const globalContext = useContext(Context);
  const {
    answeredQuestions,
    correctAnswers,
    setAnsweredQuestions,
    setCorrectAnswers,
  } = globalContext || {};

  const handlePlayAgain = async () => {
    if (setAnsweredQuestions && setCorrectAnswers) {
      await Promise.all([setAnsweredQuestions([]), setCorrectAnswers(0)]);
    }
  };

  return (
    <ResultContainer>
      <div className="w-full max-w-screen-lg mx-auto">
        <div className="pb-6 rounded-xl flex flex-col">
          <ResultScore
            score={correctAnswers}
            totalQuestions={answeredQuestions?.length}
          />
          <div className="w-full flex flex-col gap-3">
            {answeredQuestions?.map((question, index) => (
              <ResultItem question={question} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href="/"
          className="underline underline-offset-8 custom-text-sky text-3xl font-bold mt-5"
          onClick={handlePlayAgain}
        >
          Play Again
        </Link>
      </div>
    </ResultContainer>
  );
};

export default ResultPage;

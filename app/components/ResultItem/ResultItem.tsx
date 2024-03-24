import React, { FC, JSX, use, useEffect } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import QuestionDescription from "./QuestionDescription";

interface ResultItemProps {
  question?: {
    question?: string;
    correctAnswer?: string;
    selectedAnswer?: string;
    isCorrect?: string;
  };
  index?: number | undefined;
}

const ResultItem: FC<ResultItemProps> = ({ question, index = 0 }) => {
  const newQuestion = question?.question
    ?.replace(/&deg;C/g, "°C")
    .replace(/&deg;F/g, "°F")
    .replace(/&rsquo;|&quot;|&#039;/g, "'");
  return (
    <div key={index} className="flex flex-col border-b pb-4">
      <div className="flex flex-row gap-3 items-center">
        <p className="text-sm text-gray-400"> {(index + 1).toString()}.</p>
        <QuestionDescription
          question={newQuestion}
          correctAnswer={question?.correctAnswer}
          selectedAnswer={question?.selectedAnswer}
        />
        <div className="justify-self-end flex items-center">
          {question?.isCorrect?.toString() === "true" ? (
            <AiOutlineCheck className="text-green-500" size={20} />
          ) : (
            <AiOutlineClose className="text-red-500" size={20} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultItem;

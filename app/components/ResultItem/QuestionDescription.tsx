import React, { FC, JSX } from "react";

interface QuestionDescriptionProps {
  question?: string;
  correctAnswer?: string;
  selectedAnswer?: string;
}

const QuestionDescription: FC<QuestionDescriptionProps> = ({
  question,
  correctAnswer,
  selectedAnswer,
}) => {
  return (
    <div className="flex flex-col flex-1">
      <p className="text-sm font-semibold">{question}</p>
      <p className="text-xs italic text-gray-500">
        The correct answer is{" "}
        <span
          className={
            correctAnswer === "True"
              ? "text-green-500 font-bold"
              : "text-red-500 font-bold"
          }
        >
          {correctAnswer}
        </span>
        . You answered{" "}
        <span
          className={
            selectedAnswer === "True"
              ? "text-green-500 font-bold"
              : "text-red-500 font-bold"
          }
        >
          {selectedAnswer}
        </span>
      </p>
    </div>
  );
};

export default QuestionDescription;

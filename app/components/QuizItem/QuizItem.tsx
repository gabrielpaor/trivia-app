import React, { FC, useContext, useState, useEffect } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { Context } from "../../globalContext/GlobalContext";
import { useRouter } from "next/navigation";
import Toast from "../Toast/Toast";
// import correct from "../../../public/sound/correct-bg-sound.mp3";
// import wrong from "../../../public/sound/correct-bg-sound.mp3";

interface QuizItemProps {
  question?: string;
  correctAnswer?: string;
  handleNextQuestion?: () => void;
}

const QuizItem: FC<QuizItemProps> = ({
  question,
  correctAnswer,
  handleNextQuestion,
}) => {
  const globalContext = useContext(Context);
  const router = useRouter();

  // const correct = require("../../../public/sound/correct-bg-sound.mp3");
  // const wrong = require("../../../public/sound/correct-bg-sound.mp3");

  // const correctSound: HTMLAudioElement = new Audio(correct);
  // const wrongSound: HTMLAudioElement = new Audio(wrong);

  const {
    correctAnswers,
    setCorrectAnswers,
    answeredQuestions,
    setAnsweredQuestions,
  } = globalContext || {};

  const answerOptions = ["True", "False"];
  const [showToast, setShowToast] = useState<boolean>(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>();

  const handleAnswerSelection = (answer: string) => {
    const isCorrect = answer === correctAnswer;
    const questionAlreadyAnswered = answeredQuestions?.some(
      (item) => item.question === question
    );
    if (!questionAlreadyAnswered) {
      if (isCorrect) {
        setCorrectAnswers && setCorrectAnswers((correctAnswers ?? 0) + 1);
        setIsCorrectAnswer(true);
        // correctSound.play();
        setShowToast(true);
      } else {
        setIsCorrectAnswer(false);
        // wrongSound.play();
        setShowToast(true);
      }

      setAnsweredQuestions &&
        setAnsweredQuestions([
          ...(answeredQuestions ?? []),
          {
            question,
            correctAnswer,
            selectedAnswer: answer,
            isCorrect,
          },
        ]);
    } else {
      setShowToast(true); // Show toast indicating question already answered
    }
  };

  // Function to handle hiding the toast after some time
  const hideToast = () => {
    setShowToast(false);

    handleNextQuestion && handleNextQuestion();
  };

  useEffect(() => {
    // Hide the toast after 2 seconds
    if (showToast) {
      const timer = setTimeout(() => {
        hideToast();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  useEffect(() => {
    console.log("CheckAnswer", isCorrectAnswer);
  }, [isCorrectAnswer]);

  return (
    <>
      <div className="flex flex-col items-center justify-center relative h-[50vh] sm:h-[70vh] md:h-[70vh] lg:h-[50vh] border-b-2 min-w-full">
        <h1 className="lg:text-3xl md:text-xl text-center relative sm:text-sm sm:py-[1rem] lg:px-[10rem]">
          {question}
        </h1>
        {showToast && <Toast isCorrect={isCorrectAnswer?.toString()} />}{" "}
      </div>
      <div className="flex flex-row gap-2 md:gap-7 w-full justify-center items-center my-10">
        {answerOptions.map((answer, index) => (
          <button
            key={index}
            value={answer}
            onClick={() => handleAnswerSelection(answer)}
            className={`px-2 py-1 text-white rounded-md text-sm lg:px-4 lg:py-3 md:py-2 justify-between gap-5 items-center ${
              index === 0
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            <div className="flex flex-row justify-between items-center w-full">
              <span className="flex items-center relative">
                {index === 0 ? (
                  <AiOutlineCheck
                    className="mr-1 ml-[-.5rem] md:mr-3"
                    size={24}
                  />
                ) : index === 1 ? (
                  <AiOutlineClose
                    className="mr-1 ml-[-.5rem] md:mr-3"
                    size={24}
                  />
                ) : null}
                <p className="font-semibold text-lg">{answer}</p>
              </span>
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default QuizItem;

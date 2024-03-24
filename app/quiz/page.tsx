"use client";
import React, { useState, useContext, useEffect, FC } from "react";
import FormContainer from "../components/Container/FormContainer";
import Header from "../components/Header/Header";
import QuizItem from "../components/QuizItem/QuizItem";
import questionsData from "../questions.json";
import { Context } from "../globalContext/GlobalContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useRedirectToResult from "../hooks/useRedirectToResult";

interface QuizPageProps {}

const QuizPage: FC<QuizPageProps> = ({}) => {
  const globalContext = useContext(Context);
  const { questions, setQuestions } = globalContext || {};

  const [selectedQuestions, setSelectedQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (questionsData.results) {
      // Shuffle questions
      const shuffledQuestions = shuffleArray(questionsData.results);
      // Take first 10 questions
      const selected = shuffledQuestions.slice(0, 10);
      setSelectedQuestions(selected);
      if (setQuestions) {
        setQuestions(selected);
      }
      console.log("selected", selected);
    }
  }, [setQuestions]);

  useEffect(() => {
    console.log("questions", questions);
  }, [questions]);

  const shuffleArray = (array: any[]) => {
    // loop over the array backwards
    for (let i = array.length - 1; i > 0; i--) {
      // generate a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));
      // swap elements array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  useEffect(() => {
    if (currentQuestionIndex === 10) {
      router.push("/result");
    }
  }, [currentQuestionIndex, router]);

  return (
    <FormContainer
      header={
        <Header
          title={currentQuestion ? "Category: " + currentQuestion.category : ""}
          questionIndex={currentQuestionIndex + 1}
        />
      }
    >
      {currentQuestion && (
        <QuizItem
          question={currentQuestion.question
            ?.replace(/&deg;C/g, "°C")
            .replace(/&deg;F/g, "°F")
            .replace(/&rsquo;|&quot;|&#039;/g, "'")}
          correctAnswer={currentQuestion.correct_answer}
          handleNextQuestion={handleNextQuestion}
        />
      )}
    </FormContainer>
  );
};

export default QuizPage;

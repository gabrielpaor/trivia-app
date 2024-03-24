"use client";
import React, { createContext, useState, useEffect } from "react";

interface GlobalContextProps {
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  questions: any[];
  setQuestions: React.Dispatch<React.SetStateAction<any[]>>;
  answers: any[];
  setAnswers: React.Dispatch<React.SetStateAction<any[]>>;
  correctAnswers?: number;
  setCorrectAnswers?: React.Dispatch<React.SetStateAction<number>>;
  totalQuestions?: number;
  setTotalQuestions?: React.Dispatch<React.SetStateAction<number>>;
  answeredQuestions?: any[];
  setAnsweredQuestions?: React.Dispatch<React.SetStateAction<any[]>>;
}

const Context = createContext<GlobalContextProps | null>(null);

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<any[]>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<any[]>([]);

  useEffect(() => {
    console.log("consoled from context", questions);
  }, [questions]);

  const globalContext: GlobalContextProps = {
    correctAnswers,
    setCorrectAnswers,
    totalQuestions,
    setTotalQuestions,
    currentQuestion,
    setCurrentQuestion,
    questions,
    setQuestions,
    answers,
    setAnswers,
    answeredQuestions,
    setAnsweredQuestions,
  };

  return <Context.Provider value={globalContext}>{children}</Context.Provider>;
};

export { Context, Provider };

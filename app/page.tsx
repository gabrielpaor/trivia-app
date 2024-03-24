"use client";
import Image from "next/image";
import Link from "next/link";
import FormContainer from "./components/Container/FormContainer";
import Homepage from "./components/Home/Homepage";

export default function Home() {
  return (
    <FormContainer>
      <Homepage
        title="Welcome to the Trivia Challenge!"
        subTitle="You will be presented with 10 True or False Questions."
      />
    </FormContainer>
  );
}

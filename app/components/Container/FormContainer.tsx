import React from "react";

interface ContainerProps {
  header?: React.ReactNode;
  children?: React.ReactNode;
}

const FormContainer = ({ children, header }: ContainerProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full lg:max-w-3xl sm:max-w-full md:max-w-lg bg-white rounded-md shadow-md items-center justify-center flex flex-col min-h-3xl px-[2rem]">
        {header && <div className="mb-4 w-full">{header}</div>}
        {children}
      </div>
    </div>
  );
};

export default FormContainer;

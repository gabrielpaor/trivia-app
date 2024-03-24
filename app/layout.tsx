import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FormContainer from "./components/Container/FormContainer";
import { Context, Provider } from "./globalContext/GlobalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trivia App",
  description: "Created with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
  );
}

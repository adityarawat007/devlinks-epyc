import React from "react";
import localFont from "next/font/local";
import "./globals.css";

const instrumentSans = localFont({
  src: "./fonts/static/InstrumentSans-Regular.ttf",
  variable: "--font-instrument-sans",
  weight: "100 900",
});

const instrumentSansBold = localFont({
  src: "./fonts/static/InstrumentSans-Bold.ttf",
  variable: "--font-instrument-sans-bold",
  weight: "100 900",
});

const instrumentSansSemiBold = localFont({
  src: "./fonts/static/InstrumentSans-SemiBold.ttf",
  variable: "--font-instrument-sans-semibold",
  weight: "100 900",
});

export const metadata = {
  title: "Devlinks-Epyc",
  description: "Devlinks for Devs",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${instrumentSansBold.variable} ${instrumentSansSemiBold.variable}`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

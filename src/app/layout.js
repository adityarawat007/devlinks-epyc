import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./(components)/Navbar";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSansBold.variable} ${instrumentSansSemiBold.variable}`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

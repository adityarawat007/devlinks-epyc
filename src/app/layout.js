import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./(components)/Navbar";

const instrumentSans = localFont({
  src: "./fonts/static/InstrumentSans-Regular.ttf",
  variable: "--font-instrument-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Devlinks-Epyc",
  description: "Devlinks for Devs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable}`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

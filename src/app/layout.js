import localFont from "next/font/local";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}

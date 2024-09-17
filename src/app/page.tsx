import React from "react";
import Image from "next/image";
import Frame from "@/app/(components)/Frame";
import CustomLink from "@/app/(components)/CustomLink";
import Navbar from "./(components)/Navbar";

const Home: React.FC = (): JSX.Element => {
  return (
    <div className=" flex flex-col mx-auto justify-center pb-6 w-full ">
      <Navbar />
      <div className=" w-full flex justify-center px-6 items-stretch gap-x-6 ">
        <div className="w-2/5 lg:flex hidden">
        <Frame />
        </div>
       <div className="lg:w-3/5 w-full">
       <CustomLink />
       </div>
      </div>
    </div>
  );
};

export default Home;

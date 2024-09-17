"use client";
import React, { useState } from "react";
import Button from "../Button";
import Image from "next/image";
import DragableInput from "@/app/(components)/DragableInput";

const CustomLink: React.FC = () => {
  const [links, setLinks] = useState([{ id: "link1" }]);

  const addLink = () => {
    const newLink = { id: `link-${Date.now()}` };
    setLinks([...links, newLink]);
  };
  return (
    <div>
      <div className="flex w-full flex-col items-stretch justify-center gap-y-6 md:gap-10 p-6 md:p-10 bg-white rounded-t-lg ">
        <div className="flex flex-col gap-2">
          <h2 className="font-instrument-sans-bold text-2xl text-base-dark-grey font-bold">
            Customize your links
          </h2>
          <p className="font-instrument-sans text-base-grey font-normal">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>
        <Button title="+ Add New Link" onClick={addLink} />
        {/* <div className="flex flex-col items-center justify-center gap-6 p-5 bg-light-grey rounded-lg text-center">
        <Image
          src="images/illustration-empty.svg"
          width={250}
          height={160}
          alt="illustration-empty"
        />
        <h2 className="font-instrument-sans-bold text-2xl text-base-dark-grey font-bold">
          Let’s get you started
        </h2>
        <p className="font-instrument-sans text-base-grey font-normal">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </p>
      </div> */}
        <div
          className="scrollable-container overflow-y-auto " 
          style={{ height: "260px" }}  
        >
          <DragableInput links={links} setLinks={setLinks} />
        </div>
      </div>
      <div className="flex  bg-white md:justify-end   border-t border-dark-grey w-full px-10 py-6 rounded-b-lg md:p-6 ">
        <div className="w-full sm:w-fit flex ">
          <Button title="Save" />
        </div>
      </div>
    </div>
  );
};

export default CustomLink;

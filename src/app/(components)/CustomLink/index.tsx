import React from "react";
import Button from "../Button";
import Image from "next/image";

const CustomLink: React.FC = () => {
  return (
    <div className="flex w-3/5 flex-col gap-10 p-10 bg-white rounded-lg ">
      <div className="flex flex-col gap-2">
        <h2 className="font-instrument-sans-bold text-2xl text-base-dark-grey font-bold">
          Customize your links
        </h2>
        <p className="font-instrument-sans text-base-grey font-normal">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      <Button title="+ Add New Link" />
      <div className="flex flex-col items-center justify-center gap-6 p-5 bg-light-grey rounded-lg text-center">
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
      </div>
      <div className="flex border-t border-dark-grey w-full pt-6 ">
        <div className="justify-end flex">
          <Button title="Save" />
        </div>
      </div>
    </div>
  );
};

export default CustomLink;

"use client"
import React, { useState, useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import Image from "next/image";

interface SelectOption {
  value: string;
  icon: string;
  title: string;
}

interface LinkInputProps {
  id: string;
  index: number;
  onRemove: (id: string) => void;
}

const LinkInput: React.FC<LinkInputProps> = ({ id, index, onRemove }) => {
  const [platform, setPlatform] = useState<string>("github");
  const [link, setLink] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // // Load data from localStorage after component mounts
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const storedData = localStorage.getItem(id);
  //     if (storedData) {
  //       try {
  //         const parsedData = JSON.parse(storedData);
  //         console.log("data",parsedData)
  //         if (parsedData.savedPlatform) {
  //           setPlatform(parsedData.savedPlatform);
  //           console.log();
  //         }
  //         if (parsedData.savedLink) {
  //           setLink(parsedData.savedLink);
  //           console.log(setLink)
  //         }
  //       } catch (error) {
  //         console.error("Error parsing localStorage data", error);
  //       }
  //     }
  //   }
  // }, [id]);

  // useEffect(() => {
  //   // Save data to localStorage whenever platform or link changes
  //   if (typeof window !== "undefined") {
  //     const data = JSON.stringify({ savedPlatform: platform, savedLink: link });
  //     localStorage.setItem(id, data);
  //   }
  // }, [platform, link, id]);

  const selectOptions: SelectOption[] = [
    { value: "github", icon: "/images/icon-github.svg", title: "Github" },
    { value: "youtube", icon: "/images/icon-youtube.svg", title: "Youtube" },
    { value: "linkedin", icon: "/images/icon-linkedin.svg", title: "Linkedin" },
    { value: "facebook", icon: "/images/icon-facebook.svg", title: "Facebook" },
    {
      value: "frontend-mentor",
      icon: "/images/icon-frontend-mentor.svg",
      title: "Frontend Mentor",
    },
    {
      value: "twitch",
      icon: "/images/icon-twitch.svg",
      title: "Twitch",
    },
    {
      value: "hashnode",
      icon: "/images/icon-hashnode.svg",
      title: "Hashnode",
    },
  ];

  const selectedOption = selectOptions.find(
    (option) => option.value === platform
  );

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLink(value);

    // Show error if input is empty
    if (!value.trim()) {
      setError("Can't be empty");
      return;
    }

    // Validate the link based on the selected platform
    const regexMap: { [key: string]: RegExp } = {
      github: /^https:\/\/(www\.)?github\.com\/.+/i,
      youtube: /^https:\/\/(www\.)?youtube\.com\/.+/i,
      linkedin: /^https:\/\/(www\.)?linkedin\.com\/.+/i,
      facebook: /^https:\/\/(www\.)?facebook\.com\/.+/i,
      twitch: /^https:\/\/(www\.)?twitch\.tv\/.+/i,
      hashnode: /^https:\/\/(www\.)?hashnode\.com\/.+/i,
      "frontend-mentor": /^https:\/\/(www\.)?frontendmentor\.io\/.+/i,
    };

    // Check if the link matches the selected platform's pattern
    if (!regexMap[platform].test(value)) {
      setError(`Please check the URL`);
    } else {
      setError("");
    }
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-light-grey  select-none ring-0 space-y-3 rounded-xl p-5 mb-6"
        >
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <Image
                src="images/icon-drag-and-drop.svg"
                width={16}
                height={16}
                alt="drag-and-drop"
              />
              <h2 className="text-base font-instrument-sans-bold text-base-grey">
                Link #{index + 1}
              </h2>
            </div>
            <button
              onClick={() => onRemove(id)}
              className="text-base-grey font-instrument-sans"
            >
              Remove
            </button>
          </div>
          <div className="">
            <label className="text-sm font-instrument-sans text-base-dark-grey ">
              Platform
            </label>
            <div className="relative mt-1">
              <div
                className="flex w-full pr-4 py-3 px-4 justify-between space-x-3 select-none text-sm sm:text-base bg-white text-base-dark-grey items-center border border-border rounded-md cursor-pointer focus:outline-none focus:ring-1 focus:ring-purple focus:shadow-sm focus:shadow-purple"
                onClick={() => setIsOpen(!isOpen)}
                tabIndex={0}
              >
                {selectedOption && (
                  <div className="items-center flex">
                    <Image
                      src={selectedOption.icon}
                      alt={selectedOption.title}
                      className="inline-block mr-2"
                      width={16}
                      height={16}
                    />
                    {selectedOption.title}
                  </div>
                )}
                <Image
                  src="images/icon-chevron-down.svg"
                  className={`inline-block ${isOpen ? "rotate-180" : ""}`}
                  width={16}
                  height={16}
                  alt="chevron"
                />
              </div>
              {isOpen && (
                <div className="absolute z-50 w-full select-none cursor-pointer mt-1 px-4 text-base-dark-grey py-3 bg-white border border-border rounded-lg shadow-lg">
                  {selectOptions.map((option) => (
                    <div
                      key={option.value}
                      className="flex items-center border-b border-border font-normal text-base-dark-grey py-1 text-base font-instrument-sans cursor-pointer hover:text-purple "
                      onClick={() => {
                        setPlatform(option.value);
                        setIsOpen(false);
                      }}
                    >
                      <Image
                        src={option.icon}
                        alt={option.title}
                        className="mr-3 hover:text-purple "
                        width={16}
                        height={16}
                      />

                      {option.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="relative">
            <label className="text-sm font-instrument-sans text-base-dark-grey mb-1">
              Link
            </label>
            <span className="absolute z-10  inset-y-0 left-3 top-7 flex items-center pointer-events-none">
              <Image
                src="images/icon-link.svg"
                alt="Link Icon"
                width={16}
                height={16}
              />
            </span>
            <input
              type="text"
              value={link}
              onChange={handleLinkChange}
              placeholder={`e.g. https://www.${platform}.com/johnappleseed`}
              className={`mt-1 block w-full px-4 py-3 bg-white border ${
                error
                  ? " focus:ring-red-500 text-red-500 text-base font-instrument-sans focus:shadow-red-500"
                  : " focus:ring-purple  focus:shadow-purple"
              } rounded-lg shadow-sm text-sm sm:text-base font-instrument-sans  focus:outline-none focus:ring-1 focus:shadow-sm pl-10 pr-12 relative`}
            />
            {error && (
              <span className="absolute text-red-500 text-xs font-instrument-sans font-light right-2 top-[52px]  transform -translate-y-1/2">
                {error}
              </span>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default LinkInput;


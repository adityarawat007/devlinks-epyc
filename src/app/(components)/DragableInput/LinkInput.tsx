import React, { useState } from "react";
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
  const [platform, setPlatform] = useState("github");
  const [link, setLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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
  ];

  const selectedOption = selectOptions.find(
    (option) => option.value === platform
  );

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
                <div className="absolute z-10 w-full select-none cursor-pointer mt-1 px-4 text-base-dark-grey py-3 bg-white border border-border rounded-lg shadow-lg">
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
          <div>
            <label className="text-sm font-instrument-sans text-base-dark-grey mb-1">
              Link
            </label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="e.g. https://www.github.com/johnappleseed"
              className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-purple focus:shadow-sm focus:shadow-purple "
            />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default LinkInput;

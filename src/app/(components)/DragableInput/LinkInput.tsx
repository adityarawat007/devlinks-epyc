"use client";
import React, { useState, useEffect } from "react";
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

  console.log("id", id , index);
  

  const selectOptions: SelectOption[] = [
    { value: "github", icon: "/images/icon-github.svg", title: "Github" },
    { value: "youtube", icon: "/images/icon-youtube.svg", title: "Youtube" },
    { value: "linkedin", icon: "/images/icon-linkedin.svg", title: "Linkedin" },
    { value: "facebook", icon: "/images/icon-facebook.svg", title: "Facebook" },
    { value: "frontend-mentor", icon: "/images/icon-frontend-mentor.svg", title: "Frontend Mentor" },
    { value: "twitch", icon: "/images/icon-twitch.svg", title: "Twitch" },
    { value: "hashnode", icon: "/images/icon-hashnode.svg", title: "Hashnode" },
  ];

  const selectedOption = selectOptions.find(option => option.value === platform);

  const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (isOpen && target && !target.closest(".LinkInput")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLink(value);

    if (!value.trim()) {
      setError("Can't be empty");
      return;
    }

    const regexMap: { [key: string]: RegExp } = {
      github: /^https:\/\/(www\.)?github\.com\/.+/i,
      youtube: /^https:\/\/(www\.)?youtube\.com\/.+/i,
      linkedin: /^https:\/\/(www\.)?linkedin\.com\/.+/i,
      facebook: /^https:\/\/(www\.)?facebook\.com\/.+/i,
      twitch: /^https:\/\/(www\.)?twitch\.tv\/.+/i,
      hashnode: /^https:\/\/(www\.)?hashnode\.com\/.+/i,
      "frontend-mentor": /^https:\/\/(www\.)?frontendmentor\.io\/.+/i,
    };

    if (!regexMap[platform].test(value)) {
      setError(`Please check the URL`);
    } else {
      setError("");
    }
  };

  return (
    <div className="bg-light-grey space-y-3 rounded-xl p-5 mb-6">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Image
            src="images/icon-drag-and-drop.svg"
            width={16}
            height={16}
            alt="icon"
          />
          <h2 className="text-base font-bold text-base-grey">Link #{index + 1}</h2>
        </div>
        <button
          onClick={() => onRemove(id)}
          className="text-base-grey"
        >
          Remove
        </button>
      </div>
      <div>
        <label className="text-sm text-base-dark-grey">Platform</label>
        <div className="relative mt-1">
          <div
            className="flex w-full pr-4 py-3 px-4 justify-between space-x-3 text-sm bg-white items-center border rounded-md cursor-pointer"
            onClick={handleDropdownClick}
          >
            {selectedOption && (
              <div className="flex items-center">
                <Image
                  src={selectedOption.icon}
                  alt={selectedOption.title}
                  className="mr-2"
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
            <div className="absolute z-50 w-full cursor-pointer mt-1 px-4 py-3 bg-white border rounded-lg shadow-lg">
              {selectOptions.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center border-b py-3 cursor-pointer hover:text-purple"
                  onClick={() => {
                    setPlatform(option.value);
                    setIsOpen(false);
                  }}
                >
                  <Image
                    src={option.icon}
                    alt={option.title}
                    className="mr-3"
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
        <label className="text-sm mb-1">Link</label>
        <span className="absolute z-10 inset-y-0 left-3 top-7 flex items-center pointer-events-none">
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
            error ? "text-red-500" : ""
          } rounded-lg shadow-sm text-sm`}
        />
        {error && (
          <span className="absolute text-red-500 text-xs right-2 top-[52px]">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default LinkInput;

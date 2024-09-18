"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLinkStore } from "@/app/(store)/LinkStore";
import GithubIcon from "@/app/(icons)/GithubIcon";
import YoutubeIcon from "@/app/(icons)/YoutubeIcon";
import LinkedinIcon from "@/app/(icons)/LinkedinIcon";
import HashnodeIcon from "@/app/(icons)/HashnodeIcon";
import FacebookIcon from "@/app/(icons)/FacebookIcon";
interface SelectOption {
  value: string;
  icon: JSX.Element;
  title: string;
}

interface LinkInputProps {
  id: string;
  index: number;
  onRemove: (id: string) => void;
}

const LinkInput: React.FC<LinkInputProps> = ({ id, index, onRemove }) => {
  const [platform, setPlatform] = useState<string>("Github");
  const [link, setLink] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { addLink, removeLink } = useLinkStore();

  //Runs when there any link platform changes
  useEffect(() => {
    addLink(id, platform);
    return () => {
      removeLink(id);
    };
  }, [id, platform, addLink, removeLink]);

  const selectOptions: SelectOption[] = [
    { value: "github", icon: <GithubIcon />, title: "Github" },
    { value: "youtube", icon: <YoutubeIcon />, title: "Youtube" },
    { value: "linkedin", icon: <LinkedinIcon />, title: "Linkedin" },
    { value: "facebook", icon: <FacebookIcon />, title: "Facebook" },
    { value: "hashnode", icon: <HashnodeIcon />, title: "Hashnode" },
  ];

  const selectedOption = selectOptions.find(
    (option) => option.title === platform
  );

  //Function to handle dropdown click
  const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  //Function to close dropdown when clicked outside
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

  //Function to Verify the link
  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLink(value);

    if (!value.trim()) {
      setError("Can't be empty");
      return;
    }

    const regexMap: { [key: string]: RegExp } = {
      Github: /^https:\/\/(www\.)?github\.com\/.+/i,
      Youtube: /^https:\/\/(www\.)?youtube\.com\/.+/i,
      Linkedin: /^https:\/\/(www\.)?linkedin\.com\/.+/i,
      Facebook: /^https:\/\/(www\.)?facebook\.com\/.+/i,
      Hashnode: /^https:\/\/(www\.)?hashnode\.com\/.+/i,
    };

    if (!regexMap[platform].test(value)) {
      setError(`Please check the URL`);
    } else {
      setError("");
    }
  };

  return (
    <div className="linkCard bg-light-grey space-y-3 select-none rounded-xl p-5 mb-6">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Image
            src="images/icon-drag-and-drop.svg"
            width={16}
            height={16}
            alt="icon"
          />
          <h2 className="text-base font-bold text-base-grey">
            Link #{index + 1}
          </h2>
        </div>
        <button onClick={() => onRemove(id)} className="text-base-grey">
          Remove
        </button>
      </div>
      {/* DropDown */}
      <div>
        <label className="text-sm text-base-dark-grey">Platform</label>
        <div className="relative mt-1">
          <div
            className="flex w-full pr-4 py-3 px-4 justify-between space-x-3 select-none text-sm sm:text-base bg-white text-base-dark-grey items-center border border-border rounded-md cursor-pointer focus:outline-none focus:ring-1 focus:ring-purple focus:shadow-sm focus:shadow-purple"
            onClick={handleDropdownClick}
          >
            {selectedOption && (
              <div className="flex items-center">
                <div className="flex text-base-dark-grey items-center gap-x-2">
                  {selectedOption.icon}
                  {selectedOption.title}
                </div>
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
                  className="flex items-center border-b py-3 cursor-pointer"
                  onClick={() => {
                    setPlatform(option.title);
                    setIsOpen(false);
                  }}
                >
                  <div className="flex text-base-dark-grey hover:text-purple items-center gap-x-2">
                    {option.icon}
                    {option.title}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Link Input */}
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
            error
              ? " focus:ring-red-500 text-red-500 text-base font-instrument-sans focus:shadow-red-500"
              : " focus:ring-purple  focus:shadow-purple"
          } rounded-lg shadow-sm text-sm sm:text-base font-instrument-sans  focus:outline-none focus:ring-1 focus:shadow-sm pl-10 pr-12 relative`}
        />
        {error && (
          <span className="absolute text-red-500 text-xs right-2 top-[46px]">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default LinkInput;

"use client";

import Image from "next/image";
import React from "react";
import Button from "../Button";
import LinkIcon from "@/app/(icons)/LinkIcon";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white sm:rounded-lg sm:shadow-sm  mb-6 sm:m-6">
      <div className="flex items-center gap-2">
        <Image
          src="images/logo-devlinks-small.svg"
          width={32}
          height={32}
          alt="logo-devlinks"
        />
        <span className="font-instrument-sans-bold sm:flex hidden text-2xl text-base-dark-grey">
          devlinks
        </span>
      </div>

      <div className="flex gap-4">
        {/* Links Tab */}
        <div className="flex items-center gap-2 cursor-pointer bg-light-purple text-purple rounded-lg py-3 px-7">
          <LinkIcon/>
          <span className="font-instrument-sans-semibold text-base hidden sm:flex text-purple">
            Links
          </span>
        </div>

        {/* Profile Tab */}
        <div className="flex items-center gap-2 cursor-pointer rounded-lg py-3 px-7">
          <Image
            src="/images/icon-profile-details-header.svg"
            width={20}
            height={20}
            alt="Profile"
          />
          <span className="font-instrument-sans-semibold text-base hidden sm:flex text-base-grey hover:text-purple">
            Profile
          </span>
        </div>
      </div>

      <div>
      <div className="border sm:hidden border-purple py-3 px-4 rounded-lg">
      <Image
            src="/images/icon-preview-header.svg"
            width={20}
            height={20}
            alt="Links"
          />
      </div>
        <div className="hidden sm:flex">
        <Button title="Preview" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


"use client";

import Image from 'next/image';
import React from 'react';
import Button from '../Button';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white rounded-lg shadow-md m-6">
      <div className="flex items-center gap-2">
        <Image
          src="images/logo-devlinks-small.svg"
          width={32}
          height={32}
          alt="logo-devlinks"
        />
        <span className="font-instrument-sans-bold text-2xl text-base-dark-grey">devlinks</span>
      </div>
      <div className=''>
        <Button title="Preview" />
      </div>
    </nav>
  );
};

export default Navbar;


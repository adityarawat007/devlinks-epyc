import React from 'react';
import Image from 'next/image';
import Frame from '@/app/(components)/Frame';
import CustomLink from '@/app/(components)/CustomLink';


const Home: React.FC = (): JSX.Element => {
  return (
  
      <div className="flex items-stretch justify-center gap-6 px-6 pb-6 w-full ">
      <Frame />
      <CustomLink />
    </div>

  );
};

export default Home;

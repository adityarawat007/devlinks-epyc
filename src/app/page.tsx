import React from 'react';
import Image from 'next/image';
import Frame from '@/app/(components)/Frame';
import CustomLink from '@/app/(components)/CustomLink';
import Navbar from './(components)/Navbar';


const Home: React.FC = (): JSX.Element => {
  return (
  
      <div className=" flex flex-col mx-auto  max-w-6xl justify-center pb-6 w-full ">
           <Navbar />
     <div className=' w-full flex justify-center items-stretch gap-x-6 '>
     <Frame />
     <CustomLink />
     </div>
    </div>

  );
};

export default Home;

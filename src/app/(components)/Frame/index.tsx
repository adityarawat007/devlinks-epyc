"use client"

import React from 'react'
import Image from 'next/image'
import { useLinkStore } from '@/app/(store)/LinkStore'
import GithubIcon from '@/app/(icons)/GithubIcon'
import YoutubeIcon from '@/app/(icons)/YoutubeIcon'
import LinkedinIcon from '@/app/(icons)/LinkedinIcon'
import HashnodeIcon from '@/app/(icons)/HashnodeIcon'
import FacebookIcon from '@/app/(icons)/FacebookIcon'

const Frame: React.FC = () => {
  const links = useLinkStore((state) => state.links)

  //Function to get platform bg-color and icon
  const getPlatformStyle = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return { icon: <GithubIcon />, bgColor: 'bg-black' };
      case 'youtube':
        return { icon: <YoutubeIcon />, bgColor: 'bg-red-600' };
      case 'linkedin':
        return { icon: <LinkedinIcon />, bgColor: 'bg-blue-600' };
      case 'hashnode':
        return { icon: <HashnodeIcon />, bgColor: 'bg-blue-400' };
      case 'facebook':
        return { icon: <FacebookIcon />, bgColor: 'bg-blue-700' };
      default:
        return { icon: null, bgColor: 'bg-gray-400' };
    }
  }

return (
  <div className="bg-white p-6 justify-center flex items-center rounded-xl w-full relative">
    <Image src="/images/illustration-phone-mockup.svg" width={250} height={250} alt='phone-mockup' />
    <div className="absolute top-[285px] left-1/2 cursor-pointer transform -translate-x-1/2 w-[192px]">
    {/* Mapping through links */}
      {links.map((link, index) => {
        const { icon, bgColor } = getPlatformStyle(link.platform);
        return (
          <div
            key={index}
            className={`${bgColor} h-10 flex justify-between cursor-pointer items-center px-4 py-3 mb-3 rounded-lg`}
          >
            <div className='text-white flex items-center'>
              {icon}
              <span className='text-white font-instrument-sans text-xs ml-2'>{link.platform}</span>
            </div>
            <Image src="/images/icon-arrow-right.svg" width={16} height={16} alt='arrow-right' />
          </div>
        );
      })}
    </div>
  </div>
)
}

export default Frame
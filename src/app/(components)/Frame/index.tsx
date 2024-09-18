"use client"

import React from 'react'
import Image from 'next/image'
import { useLinkStore } from '@/app/(store)/LinkStore'

const Frame: React.FC = () => {
  const links = useLinkStore((state) => state.links)

  const getPlatformColor = (platform: string): string => {
    switch (platform.toLowerCase()) {
      case 'github': return 'bg-black';
      case 'youtube': return 'bg-red-600';
      case 'linkedin': return 'bg-blue-600';
      case 'twitch': return 'bg-purple-600';
      case 'hashnode': return 'bg-blue-400';
      case 'frontendmentor': return 'bg-white border border-gray-300';
      case 'facebook': return 'bg-blue-700';
      default: return 'bg-gray-400';
    }
  }
console.log("links",links)
  return (
    <div className="bg-white p-6 justify-center flex items-center rounded-xl w-full relative">
      <Image src="/images/illustration-phone-mockup.svg" width={250} height={250} alt='phone-mockup' />
      <div className="absolute top-[285px] left-1/2 cursor-pointer transform -translate-x-1/2 w-[192px]">
        {links.map((link, index) => (
          <div
            key={index}
            className={`${getPlatformColor(link.platform)} h-10 flex justify-between items-center px-4 py-3 mb-3 rounded-lg`}
          >
            <span className='text-white font-instrument-sans text-xs '>{link.platform}</span>
            <Image src="/images/icon-arrow-right.svg" width={16} height={16} alt='arrow-right' />
            </div>
        ))}
      </div>
    </div>
  )
}

export default Frame
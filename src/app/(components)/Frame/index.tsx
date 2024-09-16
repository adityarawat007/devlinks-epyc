import React from 'react'
import styles from '../../page.module.css'
import Image from 'next/image'
const Frame: React.FC = () => {
  return (
    <div className="bg-white p-6 justify-center items-center flex-shrink flex rounded-xl w-2/5 ">
        <Image src="images/illustration-phone-mockup.svg" width={300} height={600}  alt='mockup'/>
    </div>
  )
}

export default Frame
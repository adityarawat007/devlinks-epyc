import React from 'react'
import styles from '../../page.module.css'
import Image from 'next/image'
const Frame: React.FC = () => {
  return (
    <div className="bg-white p-6  justify-center flex items-center  rounded-xl w-full ">
        <Image src="images/illustration-phone-mockup.svg" width={250} height={200}  alt='mockup'/>
    </div>
  )
}

export default Frame
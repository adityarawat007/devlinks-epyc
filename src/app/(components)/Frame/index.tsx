import React from 'react'
import styles from '../../page.module.css'
import Image from 'next/image'
const Frame: React.FC = () => {
  return (
    <div className={styles.frame}>
        <Image src="images/illustration-phone-mockup.svg" width={500} height={500}  alt='mockup'/>
    </div>
  )
}

export default Frame
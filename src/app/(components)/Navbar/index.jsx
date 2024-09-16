import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <Image src="public/image/logo-devlinks-small.svg" width={32} height={32} />
    </nav>
  )
}

export default Navbar
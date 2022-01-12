import React from 'react'
import { FaGithub,FaTwitter,FaDiscord } from "react-icons/fa";
const NavBar = () => {
    return (
        <nav className='flex w-screen flex-row-reverse pr-10 gap-3 pt-5'>
            <a href='https://github.com/jocxyen'><FaGithub className='text-4xl'/></a>
            <a href='https://twitter.com/NgJocelin'><FaTwitter className='text-4xl'/></a>
            <a href='#lololo#7456'><FaDiscord className='text-4xl'/></a>
        </nav>
    )
}

export default NavBar
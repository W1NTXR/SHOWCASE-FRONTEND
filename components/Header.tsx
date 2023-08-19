import React from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
type Props = {}
export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between mx-auto z-20'>
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}

        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        
        transition={{
            duration: 1
        }}
        className='flex flex-row items-center'>
            <SocialIcon url="https://github.com/W1NTXR" fgColor="gray" bgColor="transparent" />
            <SocialIcon url="https://www.linkedin.com/in/saaransh-jindhad-16498820b/" fgColor="gray" bgColor="transparent" />
            <SocialIcon url="https://open.spotify.com/user/fkkaj14fs9kw2kd7f698m4n4g?si=91c580b8a04a4aa0" fgColor="gray" bgColor="transparent" />
        </motion.div>

        <motion.div
         initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}

        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        
        transition={{
            duration: 1
        }}
        className='flex flex-row items-center text-gray-100 cursor-pointer'>
            <SocialIcon className = "cursor-pointer" network="email" fgColor = "gray" bgColor="transparent" />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Drop a Hi!</p>
        </motion.div>
        
    </header>
  );
}
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from "framer-motion"


type Props = {}

export default function About({}: Props) {
  
    return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking -[20px] text-gray-500 text-2xl">

        </h3>
        <motion.img
            initial={{
                x:-200,
                opacity: 0,
            }}
            transition={{
                duration: 2,
            }}
            whileInView={{x: 0, opacity: 1}}
            
            src="https://i.pinimg.com/236x/d0/90/48/d090484bbc44a44f981273a3ad8a6e37.jpg"
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-45 md:h-95/2 xl:w-[500px] xl:h-[600px] sm:w-45/2 sm:h-95/4"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                Here is a {" "}
                <span className="underline decoration-[#F7AB0A]/50 animate-pulse">little</span>{" "}
                background
            </h4>
            <p className="text-sm font-semibold">
            I'm an undergraduate Computer Science student with a passion for web development. I specialize in crafting responsive and user-friendly websites that bring ideas to life in the digital world.  When I'm not coding, you can find me immersed in the pages of a good book. Whether it's diving into a gripping novel or exploring the latest tech trends, I'm always eager to learn and broaden my horizons. Beyond coding, I have a creative side that I express through writing poetry. Crafting verses and expressing thoughts through words is my way of exploring emotions and capturing fleeting moments.Chess is another passion that keeps my mind sharp and strategic. Just like in coding, each move requires careful planning and an ability to adapt to changing situations.
            </p>
        </div>
    </div>
  )
}
import React from 'react'
import { motion } from "framer-motion"
type Props = {}

export default function ExperienceFlash({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
            initial={{
                y:-100,
                opacity: 0
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{
                once: true
            }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src="https://static.vecteezy.com/system/resources/thumbnails/004/297/596/small/education-logo-open-book-dictionary-textbook-or-notebook-with-sunrice-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-vector.jpg"
            alt=""
        />
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Freelance Web Developer</h4>
            <p className="font-bold text-2xl mt-1">SMT. CHANDRO DEVI KANYA VIDYALAYA</p>
            <div className="flex space-x-2 my-2">
                <img className="h-10 w-10 rounded-full"
                src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" />
                <img className="h-10 w-10 rounded-full"
                src="https://avatars.githubusercontent.com/u/67109815?s=200&v=4" />
            </div>
            <p className="py-5 text-gray-300">December,2022 - February,2023</p>
            <ul className="list-disc space-y-4 ml-5 text-xs">
                <li>Created a simple dynamic portfolio website for a school in 3 weeks, saving the
client 20% on the original budget.</li>
                <li>The website was built using Next.js, TailwindCSS and it features a blog,
portfolio gallery, and contact form
</li>
                <li>The website has a 95% satisfaction rating from users</li>
                
            </ul>
        </div>
    </article>
  )
}
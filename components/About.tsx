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
                
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{x: 0, opacity: 1}}
            viewport={{once: true}}
            src="https://i.pinimg.com/236x/d0/90/48/d090484bbc44a44f981273a3ad8a6e37.jpg"
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                Here is a {" "}
                <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
                background
            </h4>
            <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Tristique senectus et netus et malesuada fames. Ipsum consequat nisl vel 
            pretium lectus quam id leo. Aenean et tortor at risus viverra. 
            Proin fermentum leo vel orci porta non pulvinar neque laoreet. 
            Feugiat pretium nibh ipsum consequat nisl. Dui ut ornare lectus sit. Penatibus et magnis dis 
            parturient montes nascetur ridiculus mus mauris. Neque viverra justo nec ultrices dui sapien eget. 
            Dictum at tempor commodo ullamcorper. Vulputate odio ut enim blandit volutpat maecenas volutpat 
            blandit aliquam. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Posuere lorem ipsum 
            dolor sit amet consectetur. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Diam vel 
            quam elementum pulvinar etiam non. Etiam non quam lacus suspendisse faucibus interdum. Pellentesque
             massa placerat duis ultricies. Viverra accumsan in nisl nisi scelerisque. Auctor urna nunc id 
             cursus. Dictum sit amet justo donec enim diam vulputate ut.
            </p>
        </div>
    </div>
  )
}
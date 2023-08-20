import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'
import Cpp from './skillStuff/Cpp'
import Nextjs from './skillStuff/Nextjs'
import Angular from './skillStuff/Angular'
import Java from './skillStuff/Java'
import Rct from './skillStuff/Rct'
import Nde from './skillStuff/Nde'
import Pthn from './skillStuff/Pthn'
import Spring from './skillStuff/Spring'
import Csharp from './skillStuff/Csharp'


type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px]
    xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for current proficiency</h3>
        
        <motion.div className="grid grid-cols-4 gap-5">
            <Cpp/>
            <Nextjs/>
            <Angular/>
            <Java/>
            <Rct/>
            <Pthn/>
            <Spring/>
            <Csharp/>
            
            
        </motion.div>

    </motion.div>
    
  )
}

export default Skills
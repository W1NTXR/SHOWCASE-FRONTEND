import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function Projects({}: Props) {
    const projects = [1,2];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Projects
        </h3>
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
            {projects.map((project) => (
                <div key={project} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="underline decoration-[#F7AB0A]/50">Flight Prices Prediction Model</span>
                        </h4>
                        <p>
                            
                                Developed a machine learning model to predict flight prices, achieving
an impressive 84% accuracy after hypertuning the Random Forest
Regressor algorithm

                                Improved the existing flight price prediction system by implementing
advanced machine learning techniques,resulting in a 20% increase in
accuracy compared to the previous model

                                 Implemented feature engineering techniques to extract relevant
information from raw flight data, leading to 15% boost in model
performance and more precise price predictions.
                            
                        </p>
                    </div>
                    
                </div>
                
            ))}
        </div>
        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  )
}

export default Projects
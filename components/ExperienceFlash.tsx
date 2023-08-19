import React from 'react'
import { motion } from "framer-motion"
type Props = {}

export default function ExperienceFlash({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
            src="https://scontent.fdel11-2.fna.fbcdn.net/v/t39.30808-6/240715744_100591969033245_6823052401666385103_n.png?stp=dst-png_p160x160&_nc_cat=107&ccb=1-7&_nc_sid=85a577&_nc_ohc=Z0Jyx5scnIUAX9-8BKY&_nc_ht=scontent.fdel11-2.fna&oh=00_AfBTYMv9VEZbD7tlsHJRkhgDNEoJBkoYp4tECbMLKfgAKA&oe=64E5F700"
            alt=""
        />
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Freelance Web Developer</h4>
            <p className="font-bold text-2xl mt-1">JaldiDena</p>
            <div className="flex space-x-2 my-2">
                <img className="h-10 w-10 rounded-full"
                src="https://angular.io/assets/images/logos/angular/angular.svg" />
                <img className="h-10 w-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png" />
                <img className="h-10 w-10 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQegowPDKqrJzjjfqfoFznZnVrzdq9uNE6g71NrtBT6R5GBXHvmK4qtr9KF78wB4psgejg&usqp=CAU" />
                <img className="h-10 w-10 rounded-full"
                src="https://w7.pngwing.com/pngs/578/816/png-transparent-java-class-file-java-platform-standard-edition-java-development-kit-java-runtime-environment-coffee-jar-text-class-orange-thumbnail.png" />
            </div>
            <p>December,2022 - February,2023</p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Developed an e-commerce website for a client,resulting in increase in online
sales and improved customer satisfaction</li>
                <li>Implemented Angular to design and develop the frontend,resulting in a
responsive and user-friendly interface, leading to a 25% decrease in bounce
rate and increased customer engagement
</li>
                <li>Successfully implemented CRUD functionalities, enabling the client to manage
and update products,resulting in a 50% reduction in time spent on
administrative tasks.</li>
                <li>Received positive client feedback, with a satisfaction rating of 95%, for
delivering a high-quality, feature-rich website within the agreed-upon
timeframe and budget
</li>
            </ul>
        </div>
    </article>
  )
}
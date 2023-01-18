/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col h-screen rounded-lg items-center space-y-7 flex-shrink-0
    w-[300px] mt-[350px] md:w-[60px] xl:w-[900px]">
       <motion.img
        initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
       className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
       src="./img/viral.webp" alt="viral" />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Frontend Developer in Viral</h4>
            <p className="font-bold text-2xl mt-1">University research hotbed</p>
            <div className="flex space-x-2 my-2">
                <img src="./img/react.png" alt="react" className="h-10 w-10" />
                <img src="./img/angular.png" alt="angular" className="h-10 w-10" />
                <img src="./img/node.png" alt="node" className="h-10 w-10" />
            </div>
            <p className="uppercase py-5 text-gray-500">Tasks:</p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>points</li>
                <li>points</li>
                <li>points</li>
            </ul>
        </div>

    </article>
  )
}

export default ExperienceCard
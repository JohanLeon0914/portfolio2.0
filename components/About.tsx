import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left
  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="./img/yo.jpg"
        className="-mb-20 mt-[150px] md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[300px]  xl:h-[300px]"
      />


      <div className="space-y-10 px-0 md:px-10 mt-[100px] mb-1">
        <h4 className="text-3xl font-semibold text-center">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background:
        </h4>
        <p className="text-base">
        I am a systems engineering student specializing in web development,
          focused on frontend, with experience in technologies such as Reactjs,
          Angular, Nextjs, Nodejs, Bootstrap and TailwindCSS. prepared for any challenge that comes my way.
        </p>
      </div>
    </motion.div>
  );
}

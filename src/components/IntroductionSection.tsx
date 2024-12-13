import profileImage from "../utils/profile.jpg";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

type Prop = {
  contactSectionRef: React.MutableRefObject<HTMLDivElement | null>;
};

export default function IntroductionSection({ contactSectionRef }: Prop) {
  return (
    <div>
      <div className="flex flex-col-reverse 2xl:flex-row gap-8 center dark:text-white">
        <motion.div
          className="flex flex-col justify-around space-y-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Hello, I am Rakshit Mehta
            </h1>
          </motion.div>

          <motion.div
            className="flex flex-col gap-8 sm:text-lg my-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a Developer passionate about crafting efficient, scalable web solutions.
                With expertise in modern technologies, I transform ideas into polished digital experiences.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <motion.li
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                >
                  <span className="text-sage-green">▹</span>
                  Full Stack Development
                </motion.li>
                <motion.li
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                >
                  <span className="text-sage-green">▹</span>
                  Cloud & DevOps
                </motion.li>
                <motion.li
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.3 }}
                >
                  <span className="text-sage-green">▹</span>
                  Modern Web Technologies
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-[50%]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={profileImage}
            alt="Profile"
            className="rounded-lg border border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-none
              hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      <motion.button
        className="flex justify-center items-center gap-4 font-bold text-2xl sm:text-3xl
          font-mono border-b-2 my-10 hover:gap-10 border-transparent
          hover:border-black hover:dark:border-white transition-all
          text-gray-800 dark:text-gray-200"
        onClick={() => contactSectionRef.current?.scrollIntoView()}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ y: -2 }}
      >
        <span>contact me</span>
        <IoArrowForwardCircleOutline className="transition-transform group-hover:translate-x-1" />
      </motion.button>
    </div>
  );
}

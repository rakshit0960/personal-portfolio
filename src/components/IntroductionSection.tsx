import profileImage from "../utils/profile.jpg";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { FiCode, FiServer, FiDatabase } from "react-icons/fi";

type Prop = {
  contactSectionRef: React.MutableRefObject<HTMLDivElement | null>;
};

export default function IntroductionSection({ contactSectionRef }: Prop) {
  return (
    <div className="my-10">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Image section */}
        <motion.div
          className="w-full md:w-2/5 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative group">
            <div className="absolute -inset-2 bg-sage-green/70 dark:bg-sage-green/10 rounded-lg blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            <motion.img
              src={profileImage}
              alt="Profile"
              className="relative w-full rounded-lg border-2 border-gray-400 dark:border-dark-border-green shadow-md hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-sage-green/70 dark:border-sage-green/20 rounded-lg -z-10 hidden md:block"></div>
        </motion.div>

        {/* Content section */}
        <motion.div
          className="w-full md:w-3/5 flex flex-col space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="font-fira text-green-700 dark:text-sage-green font-semibold text-sm tracking-wider">FULL STACK DEVELOPER</span>
            <h1 className="text-3xl sm:text-5xl font-bold font-fira-mono text-gray-900 dark:text-white">
              Hello, I'm <span className="text-green-700 dark:text-sage-green">Rakshit Mehta</span>
            </h1>
            <div className="h-1.5 w-20 bg-green-700 dark:bg-sage-green rounded-full mt-2"></div>
            <p className="text-gray-700 dark:text-gray-400 text-sm mt-2">
              B.Tech in Computer Science | Graphic Era University (Expected May 2026)
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="space-y-6">
              <p className="text-gray-900 dark:text-gray-300 leading-relaxed font-medium text-lg">
                I'm a Full Stack Developer specializing in building <span className="font-bold text-green-700 dark:text-sage-green">scalable web applications</span> and <span className="font-bold text-green-700 dark:text-sage-green">real-time communication systems</span> using modern technologies.
              </p>
              <p className="text-gray-800 dark:text-gray-400 leading-relaxed font-medium">
                My expertise includes React/Next.js frontend development, Node.js backend services, and DevOps practices with Docker and AWS. I'm passionate about creating efficient, secure, and user-focused digital solutions.
              </p>

              <div className="flex flex-col gap-4 my-4">
                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                >
                  <FiCode className="text-green-700 dark:text-sage-green text-xl mt-1 shrink-0" />
                  <div>
                    <h3 className="font-fira-mono font-semibold text-gray-900 dark:text-white">Frontend Development</h3>
                    <p className="text-gray-800 dark:text-gray-400 text-sm">React, Next.js, TypeScript, Tailwind CSS, Framer Motion</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                >
                  <FiServer className="text-green-700 dark:text-sage-green text-xl mt-1 shrink-0" />
                  <div>
                    <h3 className="font-fira-mono font-semibold text-gray-900 dark:text-white">Backend & Infrastructure</h3>
                    <p className="text-gray-800 dark:text-gray-400 text-sm">Node.js, Express, Socket.IO, WebRTC, Docker, AWS</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.3 }}
                >
                  <FiDatabase className="text-green-700 dark:text-sage-green text-xl mt-1 shrink-0" />
                  <div>
                    <h3 className="font-fira-mono font-semibold text-gray-900 dark:text-white">Database & API</h3>
                    <p className="text-gray-800 dark:text-gray-400 text-sm">PostgreSQL, MongoDB, Redis, Prisma ORM, REST</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.button
              className="flex items-center gap-2 self-start font-fira-mono border-b-2 border-transparent
                hover:border-green-700 dark:hover:border-sage-green text-gray-900 dark:text-gray-200
                transition-all duration-300 py-1 group mt-2"
              onClick={() => contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ y: -2 }}
            >
              <span className="text-xl">contact me</span>
              <IoArrowForwardCircleOutline className="text-xl group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

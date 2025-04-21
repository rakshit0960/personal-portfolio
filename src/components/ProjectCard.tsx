import { FaGithub } from "react-icons/fa6";
import { IProject } from "../utils/interfaces";
import CardWrapper from "./CardWrapper";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiSocketdotio, SiDocker, SiAmazonaws,
  SiTailwindcss, SiJavascript, SiPython, SiHtml5, SiCss3,
  SiMongodb, SiGraphql, SiOpencv, SiTensorflow, SiKubernetes, SiD3Dotjs,
  SiTypescript, SiNextdotjs, SiExpress, SiJsonwebtokens, SiPrisma,
  SiPostgresql, SiRedis, SiFramer, SiWebrtc, SiAmazons3
} from "react-icons/si";
import { TbBrandCpp, TbBrandOauth } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import { BiSolidCoinStack } from "react-icons/bi";

// Map tech names to their icons with enhanced visibility
const techIcons: { [key: string]: JSX.Element } = {
  'React': <SiReact className="text-[#0D8AAE] dark:text-[#61DAFB] drop-shadow-sm" />,
  'Node.js': <SiNodedotjs className="text-[#1F7A1F] dark:text-[#339933] drop-shadow-sm" />,
  'Socket.IO': <SiSocketdotio className="text-gray-900 dark:text-gray-300 drop-shadow-sm" />,
  'Docker': <SiDocker className="text-[#0B6BAD] dark:text-[#2496ED] drop-shadow-sm" />,
  'AWS': <SiAmazonaws className="text-[#D97B00] dark:text-[#FF9900] drop-shadow-sm" />,
  'TailwindCSS': <SiTailwindcss className="text-[#0597AF] dark:text-[#06B6D4] drop-shadow-sm" />,
  'JavaScript': <SiJavascript className="text-[#B5A000] dark:text-[#F7DF1E] drop-shadow-sm" />,
  'Python': <SiPython className="text-[#2A5B85] dark:text-[#3776AB] drop-shadow-sm" />,
  'HTML': <SiHtml5 className="text-[#C43C17] dark:text-[#E34F26] drop-shadow-sm" />,
  'CSS': <SiCss3 className="text-[#0E5A8A] dark:text-[#1572B6] drop-shadow-sm" />,
  'C++': <TbBrandCpp className="text-gray-900 dark:text-gray-300 drop-shadow-sm" />,
  'MongoDB': <SiMongodb className="text-[#357A34] dark:text-[#47A248] drop-shadow-sm" />,
  'GraphQL': <SiGraphql className="text-[#B00078] dark:text-[#E10098] drop-shadow-sm" />,
  'OpenCV': <SiOpencv className="text-[#4A31BA] dark:text-[#5C3EE8] drop-shadow-sm" />,
  'TensorFlow': <SiTensorflow className="text-[#D45D00] dark:text-[#FF6F00] drop-shadow-sm" />,
  'Kubernetes': <SiKubernetes className="text-[#2756B8] dark:text-[#326CE5] drop-shadow-sm" />,
  'D3.js': <SiD3Dotjs className="text-[#D17B1E] dark:text-[#F9A03C] drop-shadow-sm" />,
  'Computer Vision': <SiOpencv className="text-[#4A31BA] dark:text-[#5C3EE8] drop-shadow-sm" />,
  'TypeScript': <SiTypescript className="text-[#2F74C0] dark:text-[#3178C6] drop-shadow-sm" />,
  'Next.js': <SiNextdotjs className="text-gray-900 dark:text-gray-100 drop-shadow-sm" />,
  'Express': <SiExpress className="text-gray-800 dark:text-gray-300 drop-shadow-sm" />,
  'JWT': <SiJsonwebtokens className="text-[#000000] dark:text-[#FFFFFF] drop-shadow-sm" />,
  'Prisma ORM': <SiPrisma className="text-[#0C344B] dark:text-[#5A67D8] drop-shadow-sm" />,
  'PostgreSQL': <SiPostgresql className="text-[#336791] dark:text-[#4169E1] drop-shadow-sm" />,
  'Redis': <SiRedis className="text-[#DC382D] dark:text-[#FF6B6B] drop-shadow-sm" />,
  'Tailwind CSS': <SiTailwindcss className="text-[#0597AF] dark:text-[#06B6D4] drop-shadow-sm" />,
  'Framer Motion': <SiFramer className="text-[#0055FF] dark:text-[#38BDF8] drop-shadow-sm" />,
  'WebRTC': <SiWebrtc className="text-[#333333] dark:text-[#FFFFFF] drop-shadow-sm" />,
  'Solana Blockchain': <BiSolidCoinStack className="text-[#9945FF] dark:text-[#14F195] drop-shadow-sm" />,
  'AWS S3': <SiAmazons3 className="text-[#D97B00] dark:text-[#FF9900] drop-shadow-sm" />,
  'Monaco Editor': <FaCode className="text-[#1B1B1B] dark:text-[#FFFFFF] drop-shadow-sm" />,
  'AI Algorithms': <FaCode className="text-[#4A31BA] dark:text-[#5C3EE8] drop-shadow-sm" />,
  'YOLOv8': <FaCode className="text-[#4A31BA] dark:text-[#5C3EE8] drop-shadow-sm" />,
  'AI': <FaCode className="text-[#4A31BA] dark:text-[#5C3EE8] drop-shadow-sm" />,
  'OAuth': <TbBrandOauth className="text-[#333333] dark:text-[#FFFFFF] drop-shadow-sm" />
};

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <motion.div
        initial={{ boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)" }}
        whileHover={{
          boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          transition: { duration: 0.3 }
        }}
        className="h-full"
      >
        <CardWrapper name={project.name} isProject={true}>
          <div className="group flex flex-col h-full">
            {/* Image Container */}
            <div className="relative aspect-video w-full border-2 border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
              <img
                className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110"
                src={project.preview}
                alt={project.name}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm transform -translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  View Project
                </span>
              </div>
            </div>

            {/* Content Section */}
            <motion.div
              className="flex-1 flex flex-col justify-between py-4 space-y-4"
              initial={{ opacity: 0.9 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Info */}
              <div>
                <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed line-clamp-3 mb-3 font-medium">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Icons */}
              <div className="flex flex-wrap gap-3 py-3 px-3 bg-gray-50 dark:bg-gray-800/40 border-t border-b border-gray-300 dark:border-gray-700 rounded-md">
                {project.techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center gap-1"
                    whileHover={{ scale: 1.15, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-xl filter drop-shadow-sm dark:drop-shadow-md">
                      {techIcons[tech] || <FaCode className="text-gray-700 dark:text-gray-300" />}
                    </span>
                    <span className="text-[10px] text-gray-700 dark:text-gray-300 font-medium">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3
                    bg-gray-800 dark:bg-gray-800/60 rounded-md
                    border border-gray-400 dark:border-gray-700
                    text-white text-sm font-medium
                    hover:bg-black hover:border-black
                    dark:hover:bg-gray-700 dark:hover:border-emerald-500/50
                    transform hover:scale-[1.02] active:scale-[0.98]
                    transition-all duration-300"
                  href={project.repositoryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-lg" />
                  <span>GitHub</span>
                </a>

                <a
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3
                    rounded-md border border-gray-400 dark:border-gray-700
                    text-gray-800 dark:text-emerald-400 text-sm font-medium
                    hover:bg-gray-100 dark:hover:bg-gray-800/40 dark:hover:border-emerald-500/50
                    transform hover:scale-[1.02] active:scale-[0.98]
                    transition-all duration-300"
                  href={project.HostedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="text-lg" />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          </div>
        </CardWrapper>
      </motion.div>
    </motion.div>
  );
}

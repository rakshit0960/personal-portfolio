import { FaGithub } from "react-icons/fa6";
import { IProject } from "../utils/interfaces";
import CardWrapper from "./CardWrapper";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiSocketdotio, SiDocker, SiAmazonaws,
  SiTailwindcss, SiJavascript, SiPython, SiHtml5, SiCss3
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

// Map tech names to their icons
const techIcons: { [key: string]: JSX.Element } = {
  'React': <SiReact />,
  'Node.js': <SiNodedotjs />,
  'Socket.IO': <SiSocketdotio />,
  'Docker': <SiDocker />,
  'AWS': <SiAmazonaws />,
  'TailwindCSS': <SiTailwindcss />,
  'JavaScript': <SiJavascript />,
  'Python': <SiPython />,
  'HTML': <SiHtml5 />,
  'CSS': <SiCss3 />,
  'C++': <TbBrandCpp />
};

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        initial={{ boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)" }}
        whileHover={{
          boxShadow: "0 5px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          transition: { duration: 0.3 }
        }}
      >
        <CardWrapper name={'Project'}>
          <div className="group flex flex-col h-full">
            {/* Image Container */}
            <div className="relative aspect-[2/1] w-full border border-gray-400 dark:border-dark-border-green rounded-lg overflow-hidden">
              <img
                className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                src={project.preview}
                alt={project.name}
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content Section */}
            <motion.div
              className="flex-1 flex flex-col justify-between py-3 space-y-3"
              initial={{ opacity: 0.9 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Info */}
              <div>
                <h3 className="text-sm font-mono dark:text-sage-green mb-1.5 transition-colors duration-300 ">
                  {project.name}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Icons */}
              <div className="flex flex-wrap gap-3 py-1">
                {project.techStack.map((tech, index) => (
                  techIcons[tech] && (
                    <span
                      key={index}
                      className="text-2xl text-gray-600 dark:text-gray-300
                        hover:text-gray-800 dark:hover:text-sage-green
                        transform hover:scale-110
                        transition-all duration-300"
                      title={tech}
                    >
                      {techIcons[tech]}
                    </span>
                  )
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3
                    bg-gray-700 dark:bg-transparent rounded-md
                    border-2 border-gray-400 dark:border-dark-border-green
                    text-white dark:text-sage-green text-sm font-medium
                    hover:bg-black hover:border-black
                    dark:hover:border-sage-green dark:hover:text-sage-green
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
                    rounded-md border-2 border-gray-400 dark:border-dark-border-green
                    text-gray-700 dark:text-sage-green text-sm font-medium
                    hover:bg-gray-100 dark:hover:border-sage-green
                    transform hover:scale-[1.02] active:scale-[0.98]
                    transition-all duration-300"
                  href={project.HostedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="text-lg" />
                  <span>Demo</span>
                </a>
              </div>
            </motion.div>
          </div>
        </CardWrapper>
      </motion.div>
    </motion.div>
  );
}

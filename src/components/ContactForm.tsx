import SectionWrapper from "./SectionWrapper";
import { useRef, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { sendEmail } from "../utils/sendEmail";
import { motion } from "framer-motion";
import { IoMailOutline, IoPersonOutline } from "react-icons/io5";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await sendEmail(formRef);
      setIsSent(true);
      if (formRef.current) formRef.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
    }
    setIsLoading(false);
  };

  return (
    <SectionWrapper name="Contact">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-mono dark:text-sage-green mb-3">
            Get In Touch
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <IoPersonOutline className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="firstName"
                required
                placeholder="First Name"
                className="w-full pl-10 pr-4 py-2 text-sm
                  bg-transparent border rounded-lg
                  border-gray-300 dark:border-dark-border-green
                  text-gray-700 dark:text-gray-300
                  focus:border-sage-green dark:focus:border-sage-green
                  focus:outline-none transition-colors"
              />
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <IoPersonOutline className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="lastName"
                required
                placeholder="Last Name"
                className="w-full pl-10 pr-4 py-2 text-sm
                  bg-transparent border rounded-lg
                  border-gray-300 dark:border-dark-border-green
                  text-gray-700 dark:text-gray-300
                  focus:border-sage-green dark:focus:border-sage-green
                  focus:outline-none transition-colors"
              />
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <IoMailOutline className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 text-sm
                bg-transparent border rounded-lg
                border-gray-300 dark:border-dark-border-green
                text-gray-700 dark:text-gray-300
                focus:border-sage-green dark:focus:border-sage-green
                focus:outline-none transition-colors"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-2 text-sm
                bg-transparent border rounded-lg
                border-gray-300 dark:border-dark-border-green
                text-gray-700 dark:text-gray-300
                focus:border-sage-green dark:focus:border-sage-green
                focus:outline-none transition-colors
                resize-none"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {!isLoading ? (
              <motion.button
                type="submit"
                className="w-full py-2.5 text-sm font-medium
                  bg-gray-800 dark:bg-transparent
                  border border-gray-800 dark:border-sage-green rounded-lg
                  text-white dark:text-sage-green
                  hover:bg-black dark:hover:border-sage-green
                  transition-colors duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {isSent ? 'Message Sent!' : 'Send Message'}
              </motion.button>
            ) : (
              <div className="w-full py-2.5 text-center border border-gray-800 dark:border-sage-green rounded-lg">
                <ImSpinner2 className="animate-spin inline-block" size="1.5em" />
              </div>
            )}
          </motion.div>
        </form>
      </motion.div>
    </SectionWrapper>
  );
}

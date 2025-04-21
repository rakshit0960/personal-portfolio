import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageMainProps {
  children: ReactNode;
}

export default function PageMain({ children }: PageMainProps) {
  return (
    <motion.main
      className="container mx-auto px-4 py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {children}
    </motion.main>
  );
}
import { useState } from "react";
import { motion, MotionProps } from 'framer-motion';

interface prop extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
}

export default function NavLink({
  name: nameProp,
  className,
  ...properties
}: prop) {
  const [name, setName] = useState<string>(nameProp);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handelHover = () => {
    let iterations = 0;
    if (isAnimating) return;
    setIsAnimating(true);

    const interval = setInterval(() => {
      const newName = name
        .split("")
        .map((_, index) => {
          if (index < iterations) return nameProp.charAt(index);
          return String.fromCharCode(
            "a".charCodeAt(0) + Math.floor(Math.random() * 26)
          );
        })
        .join("");
      setName(newName);

      if (iterations >= name.length) clearInterval(interval);

      iterations += 1 / 2;
    }, 30);

    setIsAnimating(false);
  };

  return (
    <div className="relative px-3">
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={
          "relative font-mono text-lg cursor-pointer text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-emerald-400 transition-colors after:absolute after:w-0 after:h-[1px] after:bottom-0 after:left-0 dark:after:bg-emerald-400 after:bg-gray-800 hover:after:w-full after:transition-all after:duration-300 " +
          className
        }
        {...(properties as MotionProps)}
        onMouseOver={handelHover}
      >
        {name}
      </motion.a>
    </div>
  );
}

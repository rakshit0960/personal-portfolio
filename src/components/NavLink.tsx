import { useState } from "react";

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
    <div className="relative">
      <a
        className={
          "hover:text-5xl after:absolute after:origin-bottom-left after:duration-700 after:w-full dark:after:bg-white after:scale-x-0 after:bottom-0 hover:after:scale-x-100 after:transition-all after:h-[2px] after:left-0 after:bg-red-700 transition-all cursor-pointer font-mono " +
          className
        }
        {...properties}
        onMouseOver={handelHover}
      >
        {name}
      </a>
    </div>
  );
}

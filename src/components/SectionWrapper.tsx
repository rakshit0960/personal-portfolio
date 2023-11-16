import React from "react";

interface Prop {
  children: string | React.JSX.Element | React.JSX.Element[];
  name: string;
}
export default function SectionWrapper({children, name}: Prop) {
  return (
    <section className="relative flex flex-col justify-between py-7 pl-6">
      <code className="text-2xl lg:text-3xl dark:text-sage-green">{`<${name}>`}</code>

      <div className="flex jus">
        <div className="ml-3 border-[1px] dark:border-dark-border-green"></div>
        <div className="ml-2 lg:ml-20 mr-6 my-9 w-full">{children}</div>
      </div>

      <code className="text-2xl lg:text-3xl dark:text-sage-green">{`</${name}>`}</code>
    </section>
  );
}

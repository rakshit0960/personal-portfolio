export default function SectionWrapper({
  children,
  name,
}: {
  children: string | JSX.Element | JSX.Element[];
  name: string;
}) {
  return (
    <section className="relative flex flex-col justify-between py-10 px-8 dark:bg-dark-bg dark:text-dark-text">
      <code className="text-3xl dark:text-sage-green">{`<${name}>`}</code>

      <div className="flex jus">
        <div className="ml-3 border-[1px] dark:border-dark-border-green"></div>
        <div className=" mx-20 my-9 w-full">{children}</div>
      </div>
      
      <code className="text-3xl dark:text-sage-green">{`</${name}>`}</code>
    </section>
  );
}

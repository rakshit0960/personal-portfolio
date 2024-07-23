
interface Prop {
    icon: JSX.Element | string
    info: string
    link: string
}

export default function ContactComponent({icon, info, link}: Prop) {
  return (
    <a href={link} target="_blank" className="px-3 py-2 lg:px-6 lg:py-4 border shadow-big-shadow rounded-2xl cursor-pointer hover:border-gray-600 dark:border-gray-400 dark:hover:border-white dark:text-white hover:scale-105 transition-all ">
      <code className="flex items-center lg:text-2xl text-lg">
        {`<`}
            <div className="lg:pl-3 pl-2">{icon}</div> 
            <div className="lg:mx-6 my-0 mx-2 lg:text-xl text-sm">{info}</div>
        {`/>`}
      </code>
    </a>
  );
}

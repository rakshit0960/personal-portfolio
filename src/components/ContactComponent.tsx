
interface Prop {
    icon: JSX.Element | string
    info: string
    link: string
}

export default function ContactComponent({icon, info, link}: Prop) {
  return (
    <a href={link} target="_blank" className="px-6 py-6 border-2 rounded-2xl cursor-pointer hover:border-gray-600 ">
      <code className="flex items-center text-2xl">
        {`<`}
            <div className="pl-3">{icon}</div> 
            <div className="mx-6 my-0 text-xl">{info}</div>
        {`/>`}
      </code>
    </a>
  );
}

interface Props {
  children: string | JSX.Element | JSX.Element[],
  name: string
}

export default function CardWrapper({children, name}: Props) {
  return (
    <div className="border-[1px] border-gray-400 p-2 sm:p-6 rounded-lg dark:border-white shadow-big-shadow">
        <code className="text-xl sm:text-2xl md:text-3xl dark:border-white">{`<${name}>`}</code>
            <div className="mx-6 my-4">{children}</div>
        <code className="text-xl sm:text-2xl md:text-3xl dark:border-white">{`</${name}>`}</code>
    </div>
  )
}

interface Props {
  children: string | JSX.Element | JSX.Element[],
  name: string
}

export default function CardWrapper({children, name}: Props) {
  return (
    <div className="border-2 dark:border-[1px] p-6 rounded-lg dark:border-light-coral ">
        <code className="text-2xl dark:text-sage-green">{`<${name}>`}</code>
            <div className="mx-6 my-4">{children}</div>
        <code className="text-2xl dark:text-sage-green">{`</${name}>`}</code>
    </div>
  )
}

export default function CardWrapper({children, name}: {children: string | JSX.Element | JSX.Element[], name: string}) {
  return (
    <div className="border-2 p-6">
        <code className="text-2xl">{`<${name}>`}</code>
            <div className="mx-6 my-4">{children}</div>
        <code className="text-2xl">{`</${name}>`}</code>
    </div>
  )
}

export default function SectionWrapper({children, name}: {children: string | JSX.Element | JSX.Element[], name: string}) {
  return (
    <section className="min-h-screen flex flex-col justify-between py-10 px-8">
      <code className="text-4xl">{`<${name}>`}</code>
        {children}
      <code className="text-4xl">{`</${name}>`}</code>
    </section>
  )
}

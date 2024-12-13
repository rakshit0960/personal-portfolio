import React from "react"

interface Prop {
    name: string,
    className?: string,
    children: React.JSX.Element | React.JSX.Element[] | string
}

export default function SingleComponentWrapper({name, children, className = 'text-xl'}: Prop) {
  return (
    <div className="flex items-center">
      <code className={`lg:text-2xl dark:text-sage-green ${className}`}>{`<${name}`}</code>
        <div className="w-full px-2"> {children} </div>
      <code className={`lg:text-2xl dark:text-sage-green ${className}`}>{`/>`}</code>
    </div>
  )
}

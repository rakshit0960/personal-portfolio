import React from "react"

interface Prop {
    name: string,
    fontSize?: string,
    children: React.JSX.Element | React.JSX.Element[] | string
}

export default function SingleComponentWrapper({name, children, fontSize = '1.875rem'}: Prop) {
  return (    
        <div className="flex items-center">  
            <code className= "text-3xl dark:text-sage-green" style={{fontSize: fontSize}}>{`<${name}`}</code>
                <div className="w-full mx-2"> {children} </div>
            <code className= "text-3xl dark:text-sage-green" style={{fontSize: fontSize}}>{`/>`}</code>
        </div>
    )
}

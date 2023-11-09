export default function SingleComponentWrapper({name, children, fontSize = '1.875rem'}: {name: string, fontSize?: string, children: JSX.Element | JSX.Element[] | string}) {
  return (    
        <div className="flex items-center">  
            <code className= "text-3xl dark:text-sage-green" style={{fontSize: fontSize}}>{`<${name}`}</code>
                <div className="w-full mx-2"> {children} </div>
            <code className= "text-3xl dark:text-sage-green" style={{fontSize: fontSize}}>{`/>`}</code>
        </div>
    )
}

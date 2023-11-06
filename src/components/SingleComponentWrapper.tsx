export default function SingleComponentWrapper({name, children}: {name: string, children: JSX.Element | JSX.Element[] | string}) {
  return (    
        <div className="flex items-center ml-8">  
            <code className= "text-3xl">{`<${name}`}</code>
                <div className="w-full mx-2"> {children} </div>
            <code className= "text-3xl">{`/>`}</code>
        </div>
    )
}

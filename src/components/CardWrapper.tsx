interface Props {
  children: string | JSX.Element | JSX.Element[],
  name: string,
  compact?: boolean,
  isProject?: boolean
}

export default function CardWrapper({ children, name, compact = false, isProject = false }: Props) {
  return (
    <div className={`border-[1px] border-gray-400 dark:border-gray-700 ${compact || isProject ? 'p-2 sm:p-4' : 'p-2 sm:p-6'
      } rounded-lg shadow-md dark:shadow-lg dark:shadow-black/20 bg-white dark:bg-gray-900/80 backdrop-blur-sm`}>
      <code className={`${isProject ? 'text-base sm:text-xl text-gray-900' : 'text-xl sm:text-2xl md:text-3xl'
        } dark:text-emerald-400 font-mono`}>{`<${name}>`}</code>
      <div className={`${isProject ? 'mx-3 my-5' : 'mx-6 my-4'}`}>{children}</div>
      <code className={`${isProject ? 'text-base sm:text-xl text-gray-900' : 'text-xl sm:text-2xl md:text-3xl'
        } dark:text-emerald-400 font-mono`}>{`</${name}>`}</code>
    </div>
  )
}

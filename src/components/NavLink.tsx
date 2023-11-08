export default function NavLink({name, href}: {name: string, href: string}) {
  return (
    <a className="hover:font-semibold" href={href}>
        {name}
    </a>
  )
}

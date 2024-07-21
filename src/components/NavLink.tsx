interface prop extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
}

export default function NavLink({ name, href, ...properties}: prop) {
  return (
    <a className="hover:font-semibold" {...properties}>
      {name}
    </a>
  );
}

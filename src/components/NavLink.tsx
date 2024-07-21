interface prop extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
}

export default function NavLink({ name, ...properties}: prop) {
  return (
    <a className="hover:font-semibold cursor-pointer" {...properties}>
      {name}
    </a>
  );
}

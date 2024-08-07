
interface Props {
  src: string;
  Icon: React.ReactNode;
}

export default function NavIconButton({ src, Icon }: Props) {
  return (
    <a
      className="lg:border-2 border-gray-400 px-6 lg:px-2 2xl:px-6 py-4 lg:py-2 rounded-md hover:border-gray-900 flex items-center dark:hover:bg-white dark:hover:text-black"
      href={src}
      target="_blank"
      rel="noreferrer"
    >
      {Icon}
      {/* <AiOutlineDownload size="1em"/> */}
    </a>
  );
}

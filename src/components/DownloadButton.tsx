import { AiOutlineDownload } from "react-icons/ai";

export default function DownloadButton({filePath, fileName, name}: {filePath: string, fileName: string, name: string}) {
  return (
    <a
      className="border-2 border-gray-400 px-6 py-2 rounded-md hover:border-gray-900 flex items-center dark:hover:bg-white dark:hover:text-black"
      href={filePath}
      download={fileName}
      target="_blank"
      rel="noreferrer"
    >
      <div className="pr-4">{name}</div>
      <AiOutlineDownload size="1em" />
    </a>
  );
}

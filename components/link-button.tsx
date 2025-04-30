import Link from "next/link";

type BtnColor = "blue" | "orange" | "green" | "red" | "purple" | "pink" | "yellow" | "gray";  

type Props = {
  href: string;
  label: string;
  color?: BtnColor;
};

const LinkButton = ({ href, label, color = "blue" }: Props) => {
  return (
    <Link
      className={`text-white bg-${color}-500 border-2 border-${color}-600 p-2 focus:outline-none hover:bg-${color}-700 rounded inline-block text-center break-words whitespace-normal md:w-auto w-3/4 md:text-lg text-sm`}
      href={href}
    >
      {label}
    </Link>
  );
};
export default LinkButton;

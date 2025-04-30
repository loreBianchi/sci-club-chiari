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
      className={`text-white bg-${color}-500 border-2 border-${color}-600 py-2 px-6 focus:outline-none hover:bg-${color}-700 rounded text-lg`}
      href={href}
    >
      {label}
    </Link>
  );
};
export default LinkButton;

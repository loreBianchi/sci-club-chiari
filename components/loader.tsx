import { FaSnowflake } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="w-full flex justify-center items-center mt-4">
      <div>
        <FaSnowflake className="text-6xl text-gray-500 animate-spin" />
      </div>
    </div>
  );
}

export default Loader;
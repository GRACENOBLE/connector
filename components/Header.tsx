import Image from "next/image";

export default function Header() {
  return (
    <div className="border group/sidebar py-4 h-screen absolute left-0 top-0 w-20 hover:w-72 transition-all ease-in-out duration-200">
      <div className="flex gap-4">
        <div className="bg-white absolute ps-4">
          <Image
            src={"/images/icon.png"}
            alt={""}
            width={1000}
            height={1000}
            className="w-10"
          />
        </div>

        <div className="mt-2 -z-10 text-transparent translate-x-2 group-hover/sidebar:text-black group-hover/sidebar:translate-x-16 group-hover/sidebar:transition-all group-hover/sidebar:ease-in-out group-hover/sidebar:duration-300 transition-all ease-in-out duration-300">
          Connector
        </div>
      </div>
    </div>
  );
}

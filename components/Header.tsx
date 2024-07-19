import Image from "next/image";
import { Button } from "./ui/button";
import { Search, Star } from "lucide-react";
import { Slider } from "./ui/slider";
import SuggestionsCard from "./SuggestionsCard";

export default function Header() {
  return (
    <div className="border flex flex-col gap-5 group/sidebar py-4 h-screen absolute left-0 top-0 w-20 hover:w-72 transition-all ease-in-out duration-200 bg-connectorgray">
      <div className="flex gap-4">
        <div className="bg-connectorgray absolute ps-4 z-10">
          <Image
            src={"/images/icon.png"}
            alt={""}
            width={1000}
            height={1000}
            className="w-10"
          />
        </div>

        <div className="mt-2  text-transparent translate-x-2 group-hover/sidebar:text-black group-hover/sidebar:translate-x-16 group-hover/sidebar:transition-all group-hover/sidebar:ease-in-out group-hover/sidebar:duration-300 transition-all ease-in-out duration-300 pb-8">
          Connector
        </div>
      </div>
      <div className=" flex justify-center ">
        <form action="submit" className="relative">
          <div className="text-transparent group-hover/sidebar:text-black transition-all ease-in-out duration-300 flex items-center">
            <input
              type="text"
              className="border bg-transparent rounded-md border-transparent -translate-x-16 group-hover/sidebar:border-black group-hover/sidebar:translate-x-0  outline-none w-full text-xs py-[1px] pe-5 ps-2"
            />
            <button className="bg-transparent absolute right-0 pe-1">
              <Search strokeWidth={1.5} className="size-4 " />
            </button>
          </div>
        </form>
      </div>
      <div>
        <form action="submit">
          <div className="flex">
            <p>Radius</p>
            <Slider className="outline-none mx-2" />
          </div>
          <div className="flex">
            <div className=" flex text-transparent -translate-x-20 group-hover/sidebar:translate-x-20 group-hover/sidebar:text-black transition-all duration-300 ease-in-out">
              <Star strokeWidth={0.75} className="" />
              <Star strokeWidth={0.75} className="" />
              <Star strokeWidth={0.75} className="" />
              <Star strokeWidth={0.75} className="" />
              <Star strokeWidth={0.75} className="" />
            </div>
            <p className="absolute bg-connectorgray">Rating</p>
          </div>
        </form>
      </div>
      <div>
        <div className="border mx-2 rounded-lg border-transparent text-transparent -translate-x-20 group-hover/sidebar:translate-x-0 group-hover/sidebar:text-black group-hover/sidebar:border-black transition-all duration-300 ease-in-out">
          <h2 className="text-center text-xs font-bold">Suggestions</h2>
          <SuggestionsCard />
          <SuggestionsCard />
          <SuggestionsCard />
          <SuggestionsCard />
        </div>
      </div>
    </div>
  );
}

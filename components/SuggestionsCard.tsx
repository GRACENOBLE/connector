import Image from "next/image";
import React from "react";
import Icon from "./Icon";

const SuggestionsCard = () => {
  return (
    <div className="border border-transparent py-4 border-t-black mx-4 flex justify-between items-center">
      <Image
        src="https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width={1000}
        height={1000}
        alt=""
        className="rounded-full h-10 w-10"
      />
      <div className="text-xs w-full max-w-40">
        <h2 className="font-bold">Business title</h2>
        <span>promoted</span>
      </div>
      <div><Icon className="h-5 w-5"/></div>
    </div>
  );
};

export default SuggestionsCard;

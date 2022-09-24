import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function MemberCard(props) {
  const {src,name,designation,desc,knowmore} = props;
  return (
    <div className="h-75 w-80 m-7 rounded-xl flex flex-col justify-center items-center text-black bg-white border-2 border-black hover:bg-[#010D51] hover:text-white hover:border-white ">
       <div className="-mt-20 rounded-xl">
            <Image  className="rounded-xl " src={src}  width="250" height="250" />
       </div>
       <div className="flex flex-col justify-center Description">
        <h1>{name}</h1>
        <h2>{designation}</h2>
        <h4>{desc}</h4>
        <button className=" text-xs font-thin mb-6 mt-2 hover:text-base hover:font-extrabold">{knowmore}</button>
       </div>
    </div>
  );
}

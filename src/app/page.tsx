import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-yellow-200 min-h-screen flex items-center justify-center m-auto flex-col">
      <h1 className=" text-bold ">Welcome to recipe app </h1>
      <Link className=" mt-5 text-red-600 border-b-2 border-black hover:bg-yellow-500 hover:text-white hover:scale-2" href={"/recipe-list"}>
        EXPLORE recepie
      </Link>
    </div>
  );
}

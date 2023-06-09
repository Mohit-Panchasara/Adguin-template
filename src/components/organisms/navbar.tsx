import Link from "next/link";
import Image from "next/image";
import CustomButton from "../atoms/themebutton";

const Navbar = () => {
  return (
    <nav className=" flex list-none items-center justify-between bg-gray-100 flex-wrap p-6">
       
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <li className="text-white font-bold text-xl ">
            <Image alt="logo" src={"/logo.png"} width={100} height={100} />
          </li>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >   
            <title>Menu</title>
            <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center hover:text-gray lg:w-auto text-black">
        <div className="text-lg lg:flex-grow ml-[20vw]">
          <Link href="/">
            <li className="block mt-4 lg:inline-block lg:mt-0 text-black  mr-[7vw]">
              Home
            </li>
          </Link>
          <Link href="/solutions">
            <li className="block mt-4 lg:inline-block lg:mt-0 mr-[7vw]">
              Solutions
            </li>
          </Link>
          <Link href="/resources">
            <li className="block mt-4 lg:inline-block lg:mt-0 mr-[7vw]">
              Resources
            </li>
          </Link>
          <Link href="/about">
            <li className="block mt-4 lg:inline-block lg:mt-0 ">About</li>
          </Link>
        </div>
        <div className=" w-[109px] px-40">
          <button className="bg-violet-700 font-miriam w-[150px] hover:bg-violet-500 text-white font-light py-2 px-4 rounded">
            Connect Wallet
          </button>
        </div>
        <CustomButton />
      </div>
    </nav>
  );
};

export default Navbar;

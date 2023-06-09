import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/organisms/navbar";
import SignUpSection from "@/components/organisms/signup";
import {useTheme} from 'next-themes'


// import ImageSlider from "@/components/organisms/imageslider";
// import SlidingText from "@/components/molecules/textslide";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {theme, setTheme} = useTheme()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="w-[100vw] h-[100vh] z-10 mb-[163vh]">
  
      <div
        className="bg-cover bg-center flex flex-col justify-center"
        style={{ backgroundImage: "url('/testbg.png')" }}
      >
       
        <div className=""></div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className=" max-w-6xl w-full px-4">
            {/* First Row */}
            <div className="flex flex-col items-center justify-center mt-20 mb-16">
              <h1 className="text-8xl font-bold text-gray-800 text-center mb-4 font-abandoned">
                THE BEST PRIVACY ONLINE
                {/* <SlidingText /> */}
              </h1>
              <h2 className="text-4xl font-light text-gray-800 text-center font-miriam">
                Browse privately. Search privately. And ditch Big Tech.
                {/* <SlidingText /> */}
              </h2>
            </div>

            {/* Second Row */}
            <div className="flex items-center justify-center mb-16">
              {/* <button className="py-4 px-8 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700"> */}
              <button className="bg-violet-700 text-2xl font-miriam w-[250px] hover:bg-violet-500 text-white font-light py-2 px-4 rounded">
                Continue As Guest
              </button>
            </div>

            {/* Third Row */}
            <div className="bg-gray-700 bg-blur bg-opacity-25 rounded-3xl py-8 px-4 lg:px-16">
              <div className="flex flex-col lg:flex-row lg:justify-between">
                {/* First Column */}
                <div className="flex flex-col items-center lg:w-1/3 lg:pr-4">
                  <h3 className="text-lg font-semibold text-gray-800 font-miriam mb-4">
                    USERS EVERY MONTH
                  </h3>
                  <p className="text-5xl font-abandoned text-white">25K+</p>
                </div>

                {/* Second Column */}
                <div className="border-l border-gray-800 flex flex-col items-center lg:w-1/3 lg:px-4 mt-8 lg:mt-0">
                  <h3 className="text-lg font-semibold text-gray-800 font-miriam mb-4">
                    TRACKERS BLOCKED
                  </h3>
                  <p className="text-5xl font-abandoned text-white">1,35L+</p>
                </div>

                {/* Third Column */}
                <div className="border-l border-gray-800 flex flex-col items-center lg:w-1/3 lg:pl-4 mt-8 lg:mt-0">
                  <h3 className="text-lg font-semibold text-gray-800 font-miriam mb-4">
                    COMPANIES JOINED
                  </h3>
                  <p className="text-5xl font-abandoned text-white">8K+</p>
                </div>
              </div>
              <div className="border-gray-800 mt-8 border-t items-center">
                <button className="bg-black text-2xl font-miriam w-[250px] items-center hover:bg-gray-800 pt-2 pb-2 ml-[19vw] mt-8 text-white font-light rounded">
                  Get Started
                </button>
              </div>
            </div>
            {/*fourth row */}
            <div className="flex flex-col items-center justify-center mt-20 mb-16">
              <h1 className="text-7xl font-bold text-gray-900 text-center mb-4 font-abandoned">
                Why Adguin
              </h1>
            </div>
            {/*fifth row*/}
            <div className="grid grid-cols-3 gap-10 h-[50vh] pb-[1vh]">
              <div className="bg-white shadow rounded-xl overflow-hidden">
                <div className="relative bg-white shadow shadow-[#7808FF] p-2 w-20 h-20 text-center rounded-full  ">
                  <Image
                    className="items-center ml-1 mt-2"
                    alt="logo"
                    src={"/rocket.svg"}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="p-8">
                  <h2 className="ml-2 mt-12 text-3xl font-bold text-gray-900 text-left mb-4 font-abandoned">
                    Whatever
                  </h2>
                  <p className="text-gray-700 not-italic font-normal text-base leading-5 flex items-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow rounded-xl overflow-hidden">
                <div className="relative bg-white shadow shadow-[#7808FF] p-2 w-20 h-30 top-84 text-center rounded-full  ">
                  <Image
                    className="items-center ml-1 mt-2"
                    alt="logo"
                    src={"/rocket.svg"}
                    width={50}
                    height={50}
                  />
                </div>
                {/* this is it */}
                <div className="p-8">
                  <h2 className="ml-2 mt-12 text-3xl font-extrabold text-gray-900 text-left mb-4 font-abandoned">
                    Whatever
                  </h2>
                  <p className="text-gray-700 not-italic font-normal text-base leading-5 flex items-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow rounded-xl overflow-hidden">
                <div className="relative bg-white shadow shadow-[#7808FF] w-12 h-12 p-2  w-20 h-20 left-160 top-84 text-center rounded-full  ">
                  <Image
                    className="items-center ml-1 mt-2"
                    alt="logo"
                    src={"/rocket.svg"}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="p-8">
                  <h2 className="ml-2 mt-12 text-3xl font-black text-gray-900 text-left mb-4 font-abandoned">
                    Whatever
                  </h2>
                  <p className="text-gray-700 not-italic font-normal text-base leading-5 flex items-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow rounded-xl overflow-hidden">
                <div className="relative bg-white shadow shadow-[#7808FF] w-12 h-12 p-2  w-20 h-20  top-120 text-center rounded-full  ">
                  <Image
                    className="items-center ml-1 mt-2"
                    alt="logo"
                    src={"/rocket.svg"}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="p-8">
                  <h2 className="ml-2 mt-12 text-3xl font-bold text-gray-900 text-left mb-4 font-abandoned">
                    Whatever
                  </h2>
                  <p className="text-gray-700 not-italic font-normal text-base leading-5 flex items-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow rounded-xl overflow-hidden">
                <div className="relative bg-white shadow shadow-[#7808FF] w-12 h-12 p-2  w-20 h-20 left-30 top-84 text-center rounded-full  ">
                  <Image
                    className="items-center ml-1 mt-2"
                    alt="logo"
                    src={"/rocket.svg"}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="p-8">
                  <h2 className="ml-2 mt-12 text-3xl font-bold text-gray-900 text-left mb-4 font-abandoned">
                    Whatever
                  </h2>
                  <p className="text-gray-700 not-italic font-normal text-base leading-5 flex items-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow rounded-xl overflow-hidden">
                <div className="relative bg-white shadow shadow-[#7808FF] w-12 h-12 p-2  w-20 h-20 left-160 top-120 text-center rounded-full  ">
                  <Image
                    className="items-center ml-1 mt-2"
                    alt="logo"
                    src={"/rocket.svg"}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="p-8">
                  <h2 className="ml-2 mt-12 text-3xl font-bold text-gray-900 text-left mb-4 font-abandoned">
                    Whatever
                  </h2>
                  <p className="text-gray-700 not-italic font-normal text-base leading-5 flex items-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            {/*sixth row */}
            <div className="flex flex-col items-center justify-center mt-40 mb-40 h-[50vh]">
              <h1 className="text-7xl font-bold text-gray-900 text-center mb-4 font-abandoned">
                REASONS TO SWITCH
              </h1>
              
              <Image
                    className="items-center ml-[0vw] mt-2"
                    alt="logo"
                    src={"/test.png"}
                    width={1000}
                    height={1000}
                  />
            </div>
            {/* <div className="h-[50vh]">
                           <ImageSlider />
                           </div> */}
                           <SignUpSection />d    

          </div>
        </div>
        {/* <Image src={'/bg.png'} alt="bg-image" className="relative w-[100vw] z-0 top-0 h-[120vh] bg-white" width="1000" height="1000" /> */}
       </div>
      </main>
    </>
  );
}

import Link from "next/link";
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-[100vw] mt-[150vh] bottom-0 bg-gray-50 text-black border-t border-gray-800">
      <div className="container mx-auto py-6">
        <div className="lg:flex">
          <div className="lg:w-1/4">
            <h2 className="text-lg font-medium mb-4 ml-20 items-center">
              <Image
                alt="logo"
                src={"/footerlogo.svg"}
                width={100}
                height={100}
              />
            </h2>
            <div className="flex items-center align-center text-center mb-3">
              <a
                href="#"
                className="text-gray-100 hover:text-white mr-8 ml-8 items-center"
              >
                <Image alt="logo" src={"/discord.svg"} width={25} height={25} />
              </a>
              <a href="#" className="text-gray-100 hover:text-white mr-8">
                <Image
                  alt="logo"
                  src={"/instagram.svg"}
                  width={25}
                  height={25}
                />
              </a>
              <a href="#" className="text-gray-100 hover:text-white mr-8">
                <Image alt="logo" src={"/twitter.svg"} width={25} height={25} />
              </a>
              <a href="#" className="text-gray-100 hover:text-white">
                <Image alt="logo" src={"/youtube.svg"} width={25} height={25} />
              </a>
            </div>
          </div>
          <div className="lg:w-1/4 border-l border-gray-800 ">
            <h2 className="text-lg font-medium ml-4 mb-4">HOW TO JOIN</h2>
            <ul className="list-reset mb-4 ml-4">
              <li className="mt-2">
                <Link href="/blog">
                  <li>Mission</li>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/faq">
                  <li>Adguin Bases</li>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/privacy">
                  <li>History</li>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/terms">
                  <li>FAQs</li>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/sitemap">
                  <li>News & Events</li>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/4 border-l border-gray-800 ">
            <h2 className="text-lg font-medium ml-4 mb-4">HOW TO JOIN</h2>
            <ul className="list-reset mb-4 ml-4">
              <li className="mt-2">
                <Link href="/about">
                  <li>Career Finder</li>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/services">
                  <li>Education</li>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/team">
                  <li>Benefits</li>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/career">
                  <li>Training</li>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/contact">
                  <li>More Info</li>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/4 border-l border-gray-800 ">
            <h2 className="text-lg font-medium ml-4 mb-4">HOW TO JOIN</h2>
            <ul className="list-reset mb-4 ml-4">
              <li className="mt-2">
                <Link href="/support">
                  <li>How to join</li>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/feedback">
                  <li>Apply Now</li>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/newsletter">
                  <li>Application</li>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/siteupdates">
                  <li>Future Joining</li>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/press">
                  <li>More Info</li>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t bg-blue border-gray-800 pt-4 flex flex-col items-center">
          <p className="text-sm text-black mb-2 bg-blue">
            Copyright © 2023 Adguin Ltd. All rights reserved.
            <div className="inline-block text-lg text-black pl-40">
              Privacy & Policy
            </div>
            <div className="inline-block text-lg text-black pl-40">
              News & Events
            </div>
            <div className="inline-block text-lg text-black pl-40">
              Cookie Settings
            </div>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

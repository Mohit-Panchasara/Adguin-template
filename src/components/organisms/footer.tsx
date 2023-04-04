import Link from 'next/link'
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import Image from 'next/image'


const Footer = () => {
  return (
    <footer className="bg-gray-50 text-black">
      <div className="container mx-auto py-6">
        <div className="lg:flex">
          <div className="lg:w-1/4">
            <h2 className="text-lg font-medium mb-4"><Image alt='logo' src={'/footerlogo.svg'} width={100} height={100} /></h2>
            <div className="flex items-center mb-4">
              <a href="#" className="text-gray-100 hover:text-white mr-4">
                <Image alt='logo' src={'/discord.svg'} width={50} height={50} />
              </a>
              <a href="#" className="text-gray-100 hover:text-white mr-4">
                {/* <FaTwitter size={24} /> */}
              </a>
              <a href="#" className="text-gray-100 hover:text-white">
                {/* <FaInstagram size={24} /> */}
              </a>
            </div>
          </div>
          <div className="lg:w-1/4">
            <h2 className="text-lg font-medium mb-4">Heading 1</h2>
            <ul className="list-reset mb-4">
              <li className="mt-2">
                <Link href="/about">
                  <li>About Us</li>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/services">
                <li>Our Services</li>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/team">
                <li>Our Team</li>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/career">
                <li>Careers</li>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/contact">
                <li>Contact Us</li>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/4">
            <h2 className="text-lg font-medium mb-4">Heading 2</h2>
            <ul className="list-reset mb-4">
              <li className="mt-2">
                <Link href="/blog">
                <li>Blog</li>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/faq">
                <li>FAQ</li>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/privacy">
                <li>Privacy Policy</li>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/terms">
                <li>Terms of Use</li>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/sitemap">
                <li>Sitemap</li>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/4">
            <h2 className="text-lg font-medium mb-4">Heading 3</h2>
            <ul className="list-reset mb-4">
            <li className="mt-2">
            <Link href="/support">
            <li>Support</li>
            </Link>
          </li>
          <li className="mt-2">
            <Link href="/feedback">
            <li>Feedback</li>
            </Link>
          </li>
          <li className="mt-2">
            <Link href="/newsletter">
            <li>Newsletter</li>
            </Link>
          </li>
          <li className="mt-2">
            <Link href="/siteupdates">
            <li>Site Updates</li>
            </Link>
          </li>
          <li className="mt-2">
            <Link href="/press">
            <li>Press</li>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-800 pt-4 mt-4 flex flex-col items-center">
      <p className="text-sm text-gray-100 mb-2">
        © 2023 My Awesome Company. All rights reserved.
      </p>
      <p className="text-sm text-gray-100">
        Built with <a href="https://nextjs.org/" className="text-gray-100 hover:text-white">Next.js</a> and <a href="https://tailwindcss.com/" className="text-gray-100 hover:text-white">Tailwind CSS</a>.
      </p>
    </div>
  </div>
</footer>

)
}

export default Footer
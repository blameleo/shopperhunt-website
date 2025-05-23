import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="p-10  lg:mx-[3em] bg-black text-white rounded-t-[24px] space-y-10 md:space-y-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row  md:items-center gap-5 md:justify-between space-y-8 md:space-y-0">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/footerlogo.png"
            alt="shopper hunt logo"
            width={200}
            height={50}
            className="cursor-pointer w-[150px] lg:w-[200px] h-auto"
          />
        </div>

        {/* Links */}
        <ul className="flex flex-col  sm:flex-row justify-center gap-x-4 lg:gap-x-6 gap-y-5 text-sm md:text-sm lg:text-base text-center sm:text-left flex-wrap">
          <li>
            <Link
              href="#"
              className="sm:underline hover:text-gray-300 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="sm:underline hover:text-gray-300 transition-colors"
            >
              Become a Vendor
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="sm:underline hover:text-gray-300 transition-colors"
            >
              Become a Shopper
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="sm:underline hover:text-gray-300 transition-colors"
            >
              Blog
            </Link>
          </li>
        </ul>

        {/* Socials */}
        <div className="flex justify-center md:justify-end items-center gap-4 ">
          <Image
            src="/socials/linkedin.png"
            alt="linkedin"
            width={24}
            height={24}
            className="cursor-pointer w-6 h-6 hover:opacity-80 transition-opacity"
          />
          <Image
            src="/socials/facebook.png"
            alt="facebook"
            width={24}
            height={24}
            className="cursor-pointer w-6 h-6 hover:opacity-80 transition-opacity"
          />
          <Image
            src="/socials/twitter.png"
            alt="twitter"
            width={24}
            height={24}
            className="cursor-pointer w-6 h-6 hover:opacity-80 transition-opacity"
          />
        </div>
      </div>

      {/* Contact & Subscribe */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-10">
        {/* Contact */}
        <div className="space-y-3 text-base md:text-lg text-center md:text-left">
          <h2 className="bg-[#F2DA10] text-black px-2 py-1 inline-block rounded-md font-semibold">
            Contact Us:
          </h2>
          <p>Email: info@shopperhunt.com</p>
          <p>Phone: 555-567-8901</p>
          <div>
            <p>Address: 1234 Main St</p>
            <p>Moonstone City, Stardust State 12345</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="sm:hidden space-y-6 lg:space-y-0 w-full lg:w-auto lg:flex flex-col sm:flex-row gap-4 bg-gray-800 sm:bg-[#8F8F8F] rounded-[12px] p-4 sm:p-5 items-center justify-center">
          <input
            type="email"
            placeholder="Email"
            className="w-full sm:w-64 md:w-72 bg-transparent border border-white px-3 py-3 sm:px-4 sm:py-4 rounded-lg placeholder:text-white text-white outline-none"
          />
          <button className="w-full sm:w-auto whitespace-nowrap bg-[#F2DA10] text-black px-4 py-3 sm:py-4 rounded-lg hover:bg-[#e0ca0f] transition-colors font-medium">
            Subscribe to news
          </button>
        </div>
      </div>

      {/* Bottom */}
      <hr className="border-gray-600" />
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm md:text-base text-center sm:text-left space-y-3 sm:space-y-0">
        <span>
          © {new Date().getFullYear()} ShopperHunt. All Rights Reserved.
        </span>
        <Link
          href="#"
          className="underline hover:text-gray-300 transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}

export default Footer;

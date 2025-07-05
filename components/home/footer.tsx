import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-8 md:px-16 py-8 md:py-10 text-black w-full">
      {/* Top grid: Logo, Nav, Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-[#2e6651] pb-8">
        {/* Logo + Email */}
        <div className="flex flex-col gap-2 items-start">
          <Image
            src="/claylab assets/general/claylab-logo.png"
            alt="Claylab Logo"
            width={120}
            height={40}
            className="w-auto h-8 md:h-12"
          />
          <a
            href="mailto:claylableducation@gmail.com"
            className="text-xs sm:text-sm underline break-all"
          >
            claylableducation@gmail.com
          </a>
        </div>

        {/* Nav + Address */}
        <div className="flex flex-col gap-4 items-start md:items-end">
          <nav className="flex flex-wrap gap-4 sm:gap-6 justify-start md:justify-end align-center text-xs sm:text-sm w-full">
            <a href="/about" className="hover:underline block">About us</a>
            <a href="/support" className="hover:underline block">Support us</a>
            <a href="/entrepreneurship" className="hover:underline block">Entrepreneurship</a>
            <a href="/mentorship" className="hover:underline block">Mentorship</a>
          </nav>
          <address className="text-left md:text-end text-xs sm:text-sm w-full break-words">
            525 First floor Sector 9–A Gurugram, Haryana 122001 India
          </address>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 sm:gap-4 mt-4 w-full">
        <a
          href="#"
          className="flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
        >
          <FaXTwitter /> Twitter
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
        >
          <FaInstagram /> Instagram
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
        >
          <FaFacebookF /> Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;

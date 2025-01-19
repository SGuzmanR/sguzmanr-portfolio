 import Image from "next/image";
import Link from "next/link";

import { navLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="paddingX flex flex-col w-full justify-center items-center gap-4 mb-[120px] max-sm:mb-[40px]">
      <div className="flex justify-between items-end w-full max-sm:flex-col max-sm:items-start max-sm:gap-5">
        <div>
          <Link href="/" className="cursor-pointer uppercase text-[14px] font-medium leading-[100%] no-underline">
            <Image 
              src="/logo.svg"
              alt="SGuzmanR Logo"
              width={90}
              height={90}
              className="object-contain"
            />
          </Link>
        </div>

        <div className="flex flex-row max-[380px]:flex-col max-[640px]:flex-row max-sm:gap-2 gap-4 text-primaryWhite">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:underline">
              {link.name}
            </Link>
          ))} 
        </div>
      </div>

      <div className="flex flex-row justify-between w-full text-sm text-secondaryGrayLight max-sm:flex-col max-sm:gap-2">
        <div>
          Copyrigth &copy;2025 | SGuzmanR
        </div>

        <div>
          Todos los derechos reservados
        </div>
      </div>
    </footer>
  )
}

export default Footer
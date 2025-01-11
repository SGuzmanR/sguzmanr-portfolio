import Image from "next/image";
import Link from "next/link";

import { navLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="paddingX flex flex-col w-full justify-center items-center py-6 gap-4 text-sm">
      <div className="flex justify-between items-center w-full">
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

        <div className="flex flex-row gap-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))} 
        </div>
      </div>

      <div className="flex flex-row justify-between w-full">
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
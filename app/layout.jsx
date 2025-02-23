import { Montserrat, Birthstone } from "next/font/google";

import "./globals.css";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const birthstone = Birthstone({
  variable: "--font-birthstone",
  subsets: ["latin"],
  weight: '400'
});

export const metadata = {
  title: "SGuzmanR Portafolio",
  description: "Explora mi portafolio, Desarrollador Full Stack, Diseñador Grafico y Tecnico en Computadoras.",
  author: "Sergio Guzman",
  keywords: [
    "Full Stack",
    "Digital Solution Specilist",
    "Web Developer",
    "UX/UI Designer",
    "Front-End Development",
    "Back-End Development",
    "Web Design Portfolio",
    "Web Application Development",
    "Creative Web Solutions",
    "Digital Design Portfolio",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${birthstone.variable} antialiased bg-black text-white`}>
        {/* <Preloader /> */}

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

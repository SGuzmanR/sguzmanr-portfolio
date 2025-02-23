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
  description: "Bienvenido a portafolio de Sergio Guzmán, un experto en desarrollo Full Stack, diseño gráfico, y soluciones tecnológicas personalizadas. Explora mis proyectos de desarrollo web, diseño UX/UI y aplicaciones innovadoras.",
  author: "Sergio Guzman",
  keywords: [
    "Desarrollador Full Stack",
    "Soluciones Digitales",
    "Desarrollador Web",
    "Diseño UX/UI",
    "Desarrollo Front-End",
    "Desarrollo Back-End",
    "Desarrollo de Aplicaciones Web",
    "Portafolio Web de Diseño",
    "Soluciones Creativas Web",
    "Portafolio de Diseño Digital",
    "Tecnologías Web Avanzadas",
    "Servicios Web Profesionales",
    "Desarrollo de Software",
  ],
  openGraph: {
    title: "SGuzmanR Portafolio",
    description: "Descubre los proyectos más recientes y las soluciones innovadoras de Sergio Guzmán. Especialista en desarrollo Full Stack, diseño UX/UI y más.",
    url: "https://sguzmanr-portfolio.vercel.app/",
    site_name: "SGuzmanR Portafolio",
  },
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

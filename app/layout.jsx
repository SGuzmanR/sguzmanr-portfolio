import { Montserrat, Birthstone } from "next/font/google";

import "./globals.css";

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
  title: "SGuzmanR",
  description: "Bienvenido a SGuzmanR, tu experto en desarrollo web Full Stack, diseño UX/UI, branding, redes sociales y soporte técnico. Ofrezco soluciones digitales personalizadas para impulsar tu negocio en línea. Explora mis proyectos innovadores y servicios profesionales.",
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
    "Desarrollador UX/UI",
    "Proyectos Web Innovadores",
    "Branding Digital",
    "Redes Sociales para Negocios",
    "Soporte Técnico Web",
    "Estrategias Digitales",
    "Consultoría Web Personalizada",
    "Diseño de Identidad Corporativa",
    "Marketing Digital para Empresas",
    "Desarrollo Web a Medida",
    "Transformación Digital Empresarial",
  ],
  openGraph: {
    title: "SGuzmanR Portafolio",
    description: "Descubre los proyectos más recientes y las soluciones innovadoras de Sergio Guzmán. Especialista en desarrollo Full Stack, diseño UX/UI y más.",
    url: "https://sguzmanr-portfolio.vercel.app/",
    site_name: "SGuzmanR Portafolio",
    // images: [
    //   {
    //     url: "https://sguzmanr-portfolio.vercel.app/og-image.png", 
    //     width: 1200,
    //     height: 630,
    //     alt: "Portafolio SGuzmanR"
    //   }
    // ],
    type: "website",
  },
  favicon: "/icon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${birthstone.variable} antialiased bg-white text-black`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};
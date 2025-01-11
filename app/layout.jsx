import { Montserrat } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/lib/ThemeProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
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
      <body className={`${montserrat.variable} antialiased bg-primaryWhite dark:bg-secondaryBlack`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          {children}
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}

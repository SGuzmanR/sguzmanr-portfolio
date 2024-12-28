import { Montserrat } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "SGuzmanR Portfolio",
  description: "Explore the portfolio of SGuzmanR, a full stack developer &digital solution specialist, a skilled web developer and UX/UI designer. Specializing in modern front-end technologies like React, JavaScript, and creating user-centric designs to enhance digital experiences.",
  author: "Sergio Guzman",
  keywords: [
    "Full Stack",
    "Digital Solution Specilist",
    "Web Developer",
    "UX/UI Designer",
    "Front-End Development",
    "Back-End Development",
    "JavaScript",
    "React",
    "Web Design Portfolio",
    "User Experience Design",
    "Responsive Web Design",
    "UI/UX Projects",
    "HTML/CSS",
    "Web Application Development",
    "Creative Web Solutions",
    "Digital Design Portfolio",
    "CI/CD",
    "Node.js",
    "MongoDB",
    "SQL"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

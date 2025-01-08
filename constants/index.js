import {
  IconBrandBehance,
  IconBrandGithub,
  IconBrandGitlab,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Portafolio", href: "#portfolio" },
  { name: "Sobre Mi", href: "#about" },
  { name: "Contacto", href: "#contactme" },
];

export const socialLinks = [
  { name: "Linkedin", href: "https://www.linkedin.com/in/sergio-g-308737295/" },
  { name: "Github", href: "https://github.com/SGuzmanR?tab=overview&from=2024-12-01&to=2024-12-28" },
  { name: "Gitlab", href: "https://gitlab.com/SGuzmanR" },
  { name: "Behance", href: "https://www.behance.net/sguzmanr" },
];

export const floatingDockLinks = [
  {
    title: "Linkedin",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/sergio-g-308737295/",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/SGuzmanR?tab=overview&from=2024-12-01&to=2024-12-28",
  },
  {
    title: "Gitlab",
    icon: (
      <IconBrandGitlab className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://gitlab.com/SGuzmanR",
  },
  {
    title: "Behance",
    icon: (
      <IconBrandBehance className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.behance.net/sguzmanr",
  },
];

export const projects = [
  {
    id: 1,
    title: "BikeHub",
    des: "",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Awwwards",
    des: "",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "XORA Saas Landing Page",
    des: "",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, implementing GSAP animations",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/gsap.svg"],
    link: "https://sguzmanr.github.io/apple_website/",
  },
];
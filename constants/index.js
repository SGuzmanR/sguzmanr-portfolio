import {
  IconBrandGithub,
  IconBrandGitlab,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About Me", href: "#about" },
  { name: "Contact", href: "#contact" },
  // { name: "ACO", href: "#aco" },
];

export const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/sguzmanr_/" },
  { name: "Linkedin", href: "https://www.linkedin.com/in/sergio-g-308737295/" },
  { name: "Github", href: "https://github.com/SGuzmanR?tab=overview&from=2024-12-01&to=2024-12-28" },
  { name: "Gitlab", href: "https://gitlab.com/SGuzmanR" },
];

export const floatingDockLinks = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "Instagram",
    icon: (
      <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.instagram.com/sguzmanr_/",
  },
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
]
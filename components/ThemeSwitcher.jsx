"use client";

import { gsap } from "gsap"
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mount, setMount] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  
  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMount(true);
  }, []);

  return mount ? (
    <div className="">
      <button
        onClick={toggleTheme}
        type="button"
        className="flex h-7 w-7 items-center justify-center text-secondaryGray dark:text-secondaryGray"
      >
        <Image
          src="/Sun.svg"
          alt="sun"
          width={25}
          height={25}
          className="object-contain hidden dark:block"
        />

        <Image
          src="/Moon.svg"
          alt="moon"
          width={25}
          height={25}
          className="object-contain dark:hidden"
        />
      </button>
    </div>
  ) : null;
};

export default ThemeSwitcher;
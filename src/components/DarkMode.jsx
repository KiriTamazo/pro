import { useEffect, useState } from "react";
import { GoMoon, GoSun } from "react-icons/go";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("lwha-theme") || "light"
  );

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") {
        localStorage.setItem("lwha-theme", "dark");
        return "dark";
      } else {
        localStorage.setItem("lwha-theme", "light");
        return "light";
      }
    });
  };
  useEffect(() => {
    const body = document.querySelector("body");
    const currentTheme = localStorage.getItem("lwha-theme");

    if (!currentTheme) localStorage.setItem("lwha-theme", theme);

    if (currentTheme === "dark") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div
      className="fixed cursor-pointer z-[40] shadow-sm p-3 grid content-center rounded-tl-full  rounded-bl-full bg-slate-100 dark:bg-indigo-500/40 dark:text-white top-28 right-0"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <GoSun className="" />
      ) : (
        <GoMoon className="rotate-90" />
      )}
    </div>
  );
};
export default DarkMode;

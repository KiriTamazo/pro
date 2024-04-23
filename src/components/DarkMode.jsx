import { useEffect, useState } from "react";
import { GoMoon, GoSun } from "react-icons/go";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("lwha-theme") || "light"
  );
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    const body = document.querySelector("body");
    if (theme === "light") {
      body.classList.add("dark");
      localStorage.setItem("lwha-theme", "light");
    } else {
      body.classList.toggle("dark");
      localStorage.setItem("lwha-theme", "dark");
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

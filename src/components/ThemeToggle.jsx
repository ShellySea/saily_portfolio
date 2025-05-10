import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    // setIsDarkMode(!isDarkMode);
    // isDarkMode
    //   ? document.documentElement.classList.remove("dark")
    //   : document.documentElement.classList.add("dark");

    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      setIsDarkMode(true);
    } else if (localStorage.getItem("theme") === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, [localStorage.getItem("theme")]);

  return (
    <>
      <button
        onClick={handleToggleTheme}
        className={cn(
          "fixed top-5 right-16 z-50 p-2 rounded-full transition-colors duration-300",
          "foucs:outlin-hidden"
        )}
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 cursor-pointer text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 cursor-pointer text-blue-900" />
        )}
      </button>
    </>
  );
};

export default ThemeToggle;

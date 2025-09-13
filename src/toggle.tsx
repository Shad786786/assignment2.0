import { useTheme } from "./Theamcontext";
import { Moon, Sun } from "lucide-react";

const ToggleDarkMode = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className=" w-12 h-6 flex items-center rounded-full px-1 bg-gray-300 dark:bg-gray-700 relative transition-colors duration-300"
    >
      <div
        className={`w-4 h-4 bg-white dark:bg-black rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          theme === "dark" ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
      <div className="absolute left-1 text-yellow-500 dark:text-transparent">
        <Sun size={16} />
      </div>
      <div className="absolute right-1 text-transparent dark:text-white">
        <Moon size={16} />
      </div>
    </button>
  );
};

export default ToggleDarkMode;

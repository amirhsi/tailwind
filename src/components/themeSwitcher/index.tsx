import { useTheme } from "../../contexts/themeContext";

const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useTheme();

  const buttonClasses = `text-color-${theme} border-color-${theme} hover:bg-color-${theme}-hover bg-gray-100 hover:text-gary-100 font-bold p-2 rounded-lg`;

  return (
    <div className="flex flex-row gap-x-2">
      <button
        onClick={() => {
          toggleTheme("light");
        }}
        className={buttonClasses}
      >
        Light
      </button>
      <button
        onClick={() => {
          toggleTheme("dark");
        }}
        className={buttonClasses}
      >
        Dark
      </button>
    </div>
  );
};

export default ThemeSwitcher;

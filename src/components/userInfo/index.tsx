import { useTheme } from "../../contexts/themeContext";

export const UserInfo = () => {
  const { theme } = useTheme();

  const inputClasses = "p2 border rounded-lg p-4";

  return (
    <div
      className={`bg-color-card-${theme} flex flex-col gap-2 border rounded-lg p-4`}
    >
      <input className={inputClasses} type="text" placeholder="First Name" />
      <input className={inputClasses} type="text" placeholder="Last Name" />
      <button
        className={`text-color-${theme} border-color-${theme} hover:bg-color-${theme}-hover bg-gray-100 hover:text-gary-100 font-bold p-2 rounded-lg`}
      >
        Save
      </button>
    </div>
  );
};

export default UserInfo;

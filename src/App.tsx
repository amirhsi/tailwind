import { ThemeProvider } from "./contexts/themeContext";
import ThemeSwitcher from "./components/themeSwitcher";
import UserInfo from "./components/userInfo";

function App() {
  return (
    <ThemeProvider>
      <div className="flex w-full h-screen place-items-center place-content-center">
        <div className="flex flex-col gap-4 max-w-lg">
          <ThemeSwitcher />
          <UserInfo />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

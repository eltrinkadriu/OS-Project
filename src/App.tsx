import { Login } from "@pages/Login";
import { Home } from "@pages/Home";
import { Icon } from "@components/shared/Icon/Icon";
import { useAuthContext } from "@context/AuthContext/AuthContext";
import { useUIContext } from "@context/UIContext/UIContext";
import { DarkMode } from "@components/DarkMode/DarkMode";

function App() {
  const authCtx = useAuthContext();
  const { darkMode } = useUIContext();

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="w-full h-screen bg-gradient-to-b from-primary dark:from-slate-600  to-secondary dark:to-slate-800">
        {authCtx.isAuthenticated ? <Home /> : <Login />}
        <button
          className="border-20 border-blue-200 rounded-full fixed bottom-10 left-10 bg-transparent bg-blue-200"
          onClick={() => authCtx.logout()}
        >
          <Icon icon="power-off" className="w-5 h-5 " />
        </button>
        <DarkMode />
      </div>
    </div>
  );
}
export default App;

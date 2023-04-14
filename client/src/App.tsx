import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chats from "./pages/Chats";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { createContext } from "react";
import { useSelector } from "react-redux";
import { themeStyles } from "./theme";
import Register from "./pages/Register";

interface ThemeStyles {
  theme: any;
}

export const ThemeStyles = createContext<ThemeStyles["theme"]>([]);

const App = () => {
  const mode = useSelector((state: any) => state.mode);

  const theme = themeStyles(mode);

  return (
    <div className={`app ${theme.background}`}>
      <BrowserRouter>
        <ThemeStyles.Provider value={themeStyles(mode)}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/chats/:userId" element={<Chats />} />
            <Route path="/profile/:userId" element={<Profile />} />
          </Routes>
        </ThemeStyles.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;

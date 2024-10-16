import { useContext, createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getMode = () => {
    let mode = "lightmode";
    if (localStorage.getItem("theme")) {
      mode = localStorage.getItem("theme");
      return mode;
    }
    return mode;
  };

  const [theme, setTheme] = useState(() => getMode());
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const val = useContext(ThemeContext);
  if (val === undefined) throw new Error("Context is undefined");
  return val;
};

export default ThemeProvider;

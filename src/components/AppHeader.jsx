import { useContext, useEffect, useState } from "react";
import moonicon from "../assets/icon-moon.svg";
import sunicon from "../assets/icon-sun.svg";
import { ThemeContext, useTheme } from "../context/ThemeContext";

function App({ addtask }) {
  const [value, setValue] = useState("");
  const { theme, setTheme } = useTheme();

  // const getMode = () => {
  //   let mode = "lightmode";
  //   if (localStorage.getItem("theme")) {
  //     mode = localStorage.getItem("theme");
  //     return mode;
  //   }
  //   return mode;
  // };
  // const [Theme, setTheme] = useState(getMode);

  const changemode = () => {
    setTheme((prev) => (prev === "lightmode" ? "darkmode" : "lightmode"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addtask(value);
    setValue("");
  };

  return (
    <header>
      <form className="box-container" onSubmit={(e) => handleSubmit(e)}>
        <h2>
          T O D O
          <span className="mode">
            <img
              src={theme === "darkmode" ? sunicon : moonicon}
              alt="mode"
              className="modeimg"
              onClick={changemode}
            />
          </span>
        </h2>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="task-entry"
          value={value}
          onChange={handleChange}
          required
        />
      </form>
    </header>
  );
}

export default App;

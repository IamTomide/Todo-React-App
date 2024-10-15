import { useEffect, useState } from "react";
import moonicon from "../assets/icon-moon.svg";
import sunicon from "../assets/icon-sun.svg";

function App({ addtask }) {
  const [value, setValue] = useState("");

  const getMode = () => {
    let mode = "lightmode";
    if (localStorage.getItem("theme")) { 
      mode = localStorage.getItem("theme");
      return mode;
    } 
    return mode;
  }
  const [Theme, setTheme] = useState(getMode);

  const changemode = () => {
    setTheme(prev => prev === 'lightmode' ? 'darkmode' : 'lightmode');
  }

  useEffect(() => {
    if (Theme === "lightmode") {
      document.body.classList.remove("darkmode");
    } else {
      document.body.classList.add("darkmode");
    }
    localStorage.setItem("theme", Theme)
  }, [Theme]);

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
            <img src={Theme === "darkmode" ? sunicon : moonicon} alt="mode" className="modeimg" onClick={changemode}/>
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

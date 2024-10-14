import { useState } from "react";
import modeicon from "../assets/icon-moon.svg";

function App({ addtask }) {
  const [value, setValue] = useState("");
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
            <img src={modeicon} alt="mode" className="modeimg" />
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

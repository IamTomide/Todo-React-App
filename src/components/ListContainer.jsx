import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AppHeader from "./AppHeader";
import Filters from "./Filters";
import Tasklist from "./Tasklist";
import { useTheme } from "../context/ThemeContext";

const Tasks = () => {
  const { theme } = useTheme();
  const getTodos = () => {
    let todos = [];
    if (localStorage.getItem("tasks")) {
      todos = JSON.parse(localStorage.getItem("tasks"));
      return todos;
    }
    return todos;
  };

  const [alltasks, setTasks] = useState(() => getTodos());

  const addtask = (task) => {
    const todo = { todo: task, isCompleted: false, id: uuidv4() };
    setTasks([...alltasks, todo]);
  };

  const clearCompleted = () => {
    const Tasks = alltasks.filter((task) => !task.isCompleted);
    setTasks(Tasks);
  };

  const [tasksToDisplay, setTasksToDisplay] = useState([]);

  useEffect(() => {}, [tasksToDisplay]);

  useEffect(() => {}, []);

  useEffect(() => {
    // console.log(alltasks);
    setTasksToDisplay(alltasks);
    localStorage.setItem("tasks", JSON.stringify(alltasks));
  }, [alltasks]);

  return (
    <div className={`body_container ${theme}`}>
      <div className={`container`}>
        <AppHeader addtask={addtask} alltasks={alltasks} />
        <div className="box-container tasks">
          {tasksToDisplay && (
            <Tasklist
              alltasks={tasksToDisplay}
              setTasks={setTasks}
              setTasksToDisplay={setTasksToDisplay}
            />
          )}
          <div className="actions">
            <p className="items-left">{alltasks.length} items left</p>
            <div className="mid-opt">
              <Filters
                alltasks={alltasks}
                setTasksToDisplay={setTasksToDisplay}
              />
            </div>
            <button className="clear" onClick={clearCompleted}>
              Clear Completed
            </button>
          </div>
        </div>
        <div className="actions bottom-div">
          <Filters alltasks={alltasks} setTasksToDisplay={setTasksToDisplay} />
        </div>
      </div>
    </div>
  );
};

export default Tasks;

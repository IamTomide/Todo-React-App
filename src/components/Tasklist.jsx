import React, { Component, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import checkicon from "../assets/icon-check.svg";
import crossicon from "../assets/icon-cross.svg";

const Task = ({ alltasks, setTasksToDisplay, setTasks }) => {
  const [isSorting, setIsSorting] = useState(false);
  const handleTick = (id) => {
    const updatedTasks = alltasks.map((task) => {
      if (task.id === id) {
        const prevCompleted = task.isCompleted;
        return { ...task, isCompleted: !prevCompleted };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    const updatedTasks = alltasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  };

  const updateOrder = (updatedList) => {
    if (!isSorting) return;
    setIsSorting(false);
    setTasks(updatedList);
  };

  return (
    // <ul>
    <ReactSortable
      tag="ul"
      list={alltasks}
      onStart={() => setIsSorting(true)}
      setList={(updatedList) => updateOrder(updatedList)}
      ghostClass='drag'
      animation={150}
      delayOnTouchStart={true}
      delay={120}
    >
      {alltasks.map((task) => (
        <li key={task.id}>
          <div
            onClick={(id) => handleTick(task.id)}
            className={task.isCompleted ? "check" : ""}
          >
            <button
              className={task.isCompleted ? "tocheck checked" : "tocheck"}
            >
              <img
                src={checkicon}
                alt="check"
                className={task.isCompleted ? "showtick tick" : "tick"}
              />
            </button>
            <p>{task.todo}</p>
          </div>
          <button className="tocancel" onClick={(id) => handleDelete(task.id)}>
            <img src={crossicon} alt="delete-task" className="cross" />
          </button>
        </li>
      ))}
    </ReactSortable>
    // </ul>
  );
};

export default Task;

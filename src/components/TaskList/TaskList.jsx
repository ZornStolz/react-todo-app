import React, { useContext } from "react";
import AppContext from "../../store/AppContext";
import "./TaskList.scss";

const TaskList = () => {
  const state = useContext(AppContext);

  return (
    <div className="taskList">
      {state.tasks.map((task) => (
        <p>{task.title}</p>
      ))}
    </div>
  );
};

export default TaskList;

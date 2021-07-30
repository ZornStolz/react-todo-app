import React, { useEffect, useContext } from "react";
import axios from "axios";
import AppContext from "../../store/AppContext";
import TaskList from "../TaskList/TaskList";
import TaskForm from "../TaskForm/TaskForm";
import "./TaskContainer.scss";
import TaskSorter from "../TaskSorter/TaskSorter";

const TaskContainer = () => {
  const state = useContext(AppContext);

  // llamado a backend
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadTask = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      //console.log(response.data);
      const tasks = response.data.slice(0, 5);
      console.log(tasks);
      state.setTasks(tasks);
    } catch (error) {}
  };

  useEffect(() => {
    //console.log("David");
    loadTask();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="tasksContainer">
      <TaskForm />
      <TaskSorter />
      <TaskList />
    </div>
  );
};

export default TaskContainer;

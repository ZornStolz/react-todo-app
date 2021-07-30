import React, { useState } from "react";
import * as uuid from "uuid";
import { SORT_TYPE_ASC, SORT_TYPE_DESC } from "../constants/sort";

const AppContext = React.createContext();

export const AppContextWrapper = (props) => {
  const [tasks, setTasks] = useState([]);

  const setTaskStatus = (id, status) => {
    const tasksUpdated = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: status,
        };
      }
      return task;
    });
    setTasks(tasksUpdated);
  };

  const saveTask = (title) => {
    const newTask = {
      id: uuid.v1(),
      completed: false,
      userId: uuid.v1(),
      title,
    };
    //add new task
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const sortTasks = (sortType) => {
    const tasksCopy = tasks.map((task) => task);
    if (sortType === SORT_TYPE_ASC) {
      tasksCopy.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else if (sortType === SORT_TYPE_DESC) {
      tasksCopy.sort((a, b) => (a.title < b.title ? 1 : -1));
    }
    setTasks(tasksCopy);
  };

  //Json
  const state = { tasks, setTasks, setTaskStatus, saveTask, sortTasks };

  return (
    <AppContext.Provider value={state} displayName="AppContext">
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContext;

import React from "react";
import { AppContextWrapper } from "./store/AppContext";
import TaskContainer from "./components/TaskContainer/TaskContainer";

// function App () {
//   return <p> Hello world David! </p>;
// }
// mismo que lo de abajo

//when a component doesn't have any thing to set up it can be closed or called like in line 14
const App = () => {
  return (
    <AppContextWrapper>
      <TaskContainer />
    </AppContextWrapper>
  );
};

export default App;

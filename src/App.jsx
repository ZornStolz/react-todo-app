import React from "react";
import { AppContextWrapper } from "./store/AppContext";
import TaskContainer from "./components/TaskContainer/TaskContainer";

// function App () {
//   return <p> Hello world David! </p>;
// }
// mismo que lo de abajo

const App = () => {
  return (
    <AppContextWrapper>
      <TaskContainer />
    </AppContextWrapper>
  );
};

export default App;

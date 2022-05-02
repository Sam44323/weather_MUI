import React from "react";
import "./App.css";

// containers
import TopContainer from "./container/TopContainer";
import BottomContainer from "./container/BottomContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <TopContainer />
      <BottomContainer />
    </div>
  );
};

export default App;

import React from "react";
import "./App.css";

// data
import Data from "./data/weather.data.json";

// utils
import { Cloud, Rain, Snow, Sunny } from "./assets/index";

// containers
import TopContainer from "./container/TopContainer";
import BottomContainer from "./container/BottomContainer";

const App: React.FC = () => {
  const [currData, setCurrData] = React.useState<any>(Data[0]);

  const getBgImage = (value: string = "cloud") => {
    switch (value) {
      case "cloud":
        return Cloud;
      case "rain":
        return Rain;
      case "snow":
        return Snow;
      case "sunny":
        return Sunny;
      default:
        return Cloud;
    }
  };

  return (
    <div className="App">
      <div
        className="ImageContainer"
        style={{
          backgroundImage: `url(${getBgImage(currData.weather[0].main)})`,
        }}
      >
        <TopContainer />
        <BottomContainer />
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { Box, Button } from "@mui/material";
import { Input } from "@mui/material";
import { Search } from "@mui/icons-material";
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
  const [searchData, setSearchData] = React.useState<string>("");

  const getBgImage = (value: string = "cloud") => {
    switch (value) {
      case "clouds":
        return Cloud;
      case "rain":
        return Rain;
      case "snow":
        return Snow;
      case "clear":
        return Sunny;
      default:
        return Cloud;
    }
  };

  const getWeatherData = () => {
    const data = Data.filter(
      (item: any) => item.name.toLowerCase() === searchData.toLowerCase()
    );
    console.log(data);
    setSearchData("");
    setCurrData(data.length ? data[0] : Data[0]);
  };

  console.log(currData.weather[0].main.toLowerCase());

  return (
    <div className="App">
      <div
        className="ImageContainer"
        style={{
          backgroundImage: `url(${getBgImage(
            currData.weather[0].main.toLowerCase()
          )})`,
        }}
      >
        <Box className="inputContainer">
          <Input
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            placeholder="City Name"
          />
          <Button onClick={getWeatherData}>
            <Search
              sx={{
                color: "black",
              }}
            />
          </Button>
        </Box>
        <TopContainer
          location={currData.name}
          status={currData.weather[0].description}
          temp={parseFloat(currData.main.temp)}
          pressure={currData.main.pressure}
          humidity={currData.main.humidity}
        />
        <BottomContainer
          temp={parseFloat(currData.main.temp)}
          pressure={currData.main.pressure}
          humidity={currData.main.humidity}
          max_temp={currData.main.temp_max}
          min_temp={currData.main.temp_min}
          air={currData.wind.speed}
        />
      </div>
    </div>
  );
};

export default App;

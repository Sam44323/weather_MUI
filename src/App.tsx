import React from "react";
import { Box } from "@mui/material";
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
          backgroundImage: `url(${getBgImage("sunny")})`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "1.4rem",
          }}
        >
          <Input
            sx={{
              border: "none",
              width: "30%",
            }}
            placeholder="City Name"
          />
          <Search
            sx={{
              color: "white",
            }}
          />
        </Box>
        <TopContainer />
        <BottomContainer />
      </div>
    </div>
  );
};

export default App;

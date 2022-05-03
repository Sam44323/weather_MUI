import React from "react";
import { Box } from "@mui/material";

// components
import Value from "../components/BottomContainer/Value";

interface BottomContainerProps {
  temp: number;
  min_temp: number;
  pressure: number;
  max_temp: number;
  humidity: number;
  air: number;
}

const BottomContainer: React.FC<BottomContainerProps> = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        opacity: 0.8,
        width: "80%",
        margin: "0 auto",
        marginTop: "2.4rem",
        borderRadius: "4px",
        padding: "1.4rem 1rem",
      }}
    >
      <Value value={props.pressure} text="Pressure" icon="pressure" showRight />
      <Value
        value={(props.min_temp - 273.15).toFixed(1)}
        text="Min"
        icon="temp"
        showRight
      />
      <Value
        value={(props.max_temp - 273.15).toFixed(1)}
        text="Max"
        icon="temp"
        showRight
      />
      <Value value={props.humidity} text="Humidity" icon="temp" showRight />
      <Value value={props.air} text="Wind" icon="air" showRight={false} />
    </Box>
  );
};

export default BottomContainer;

import React from "react";
import { Box, Typography } from "@mui/material";
import { Compress, Thermostat, Air } from "@mui/icons-material";

interface ValueProps {
  value: string | number;
  icon: "temp" | "pressure" | "air";
  text: string;
  showRight: boolean;
}

const Value: React.FC<ValueProps> = (props) => {
  const getIcons = (value: "temp" | "pressure" | "air") => {
    switch (value) {
      case "temp":
        return (
          <Thermostat
            sx={{
              color: "white",
            }}
          />
        );
      case "pressure":
        return (
          <Compress
            sx={{
              color: "white",
            }}
          />
        );
      case "air":
        return (
          <Air
            sx={{
              color: "white",
            }}
          />
        );
      default:
        return (
          <Thermostat
            sx={{
              color: "white",
            }}
          />
        );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {getIcons(props.icon)}
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          color: "white",
          marginLeft: "10px",
        }}
      >
        {props.text}: {props.value}{" "}
        {props.icon === "temp" ? "°C" : props.icon === "air" ? "m/s" : ""}
      </Typography>
      {props.showRight && <div className="rightDiv"></div>}
    </Box>
  );
};

export default Value;

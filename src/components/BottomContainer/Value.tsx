import React from "react";
import { Box, Typography } from "@mui/material";
import { Compress, Thermostat } from "@mui/icons-material";

interface ValueProps {
  value: string | number;
  icon: "temp" | "pressure";
  text: string;
}

const Value: React.FC<ValueProps> = (props) => {
  const getIcons = (value: "temp" | "pressure") => {
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
      <Typography variant="body1" sx={{ textAlign: "center", color: "white" }}>
        {props.text}: {props.value}
      </Typography>
    </Box>
  );
};

export default Value;

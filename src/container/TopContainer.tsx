import React from "react";
import { Box, Typography } from "@mui/material";
import { Compress, Thermostat } from "@mui/icons-material";

interface TopContainerData {
  location: string;
  status: string;
  temp: number;
  pressure: number;
  humidity: number;
}

const TopContainer: React.FC<TopContainerData> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        color: "#000",
        alignItems: "center",
        paddingLeft: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "1rem",
        }}
      >
        <Box className="locationContainer">
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontWeight: "600" }}
          >
            {props.location}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontWeight: "600",
              textTransform: "capitalize",
            }}
          >
            {props.status}
          </Typography>
        </Box>
        <Box className="tempContainer">
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              fontSize: "4rem",
              letterSpacing: "1.4px",
              fontWeight: "bold",
            }}
          >
            {(props.temp - 273.15).toFixed(1)}°C
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
          color: "#fff",
          padding: "0.4rem 1rem",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Compress
            sx={{
              color: "white",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              marginLeft: "4px",
            }}
          >
            Pressure: {props.pressure}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Thermostat
            sx={{
              color: "white",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              marginLeft: "4px",
            }}
          >
            Humidity: {props.humidity}°C
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TopContainer;

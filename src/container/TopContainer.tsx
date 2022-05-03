import React from "react";
import { Box, Typography } from "@mui/material";

const TopContainer: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
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
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Warsaw
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Broken Clouds
          </Typography>
        </Box>
        <Box className="tempContainer">
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              fontSize: "4rem",
              letterSpacing: "1.4px",
            }}
          >
            5°C
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TopContainer;

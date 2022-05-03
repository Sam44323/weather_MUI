import React from "react";
import { Box, Typography } from "@mui/material";

// components
import Value from "../components/BottomContainer/Value";

const BottomContainer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        opacity: 0.8,
        width: "80%",
        margin: "0 auto",
        marginTop: "2.4rem",
        borderRadius: "4px",
      }}
    >
      <Value value={1000} text="Pressure" icon="pressure" />
    </Box>
  );
};

export default BottomContainer;

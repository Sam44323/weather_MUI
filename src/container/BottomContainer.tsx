import React from "react";
import { Box } from "@mui/material";

// components
import Value from "../components/BottomContainer/Value";

const BottomContainer: React.FC = () => {
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
      <Value value={1000} text="Pressure" icon="pressure" showRight />
      <Value value={30} text="Min" icon="temp" showRight />
      <Value value={70} text="Max" icon="temp" showRight />
      <Value value={40} text="Humidity" icon="temp" showRight />
      <Value value={1.34} text="Humidity" icon="air" showRight={false} />
    </Box>
  );
};

export default BottomContainer;

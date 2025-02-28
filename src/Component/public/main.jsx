import React from "react";
import { Box, Typography } from "@mui/material";
import img from "../asscerts/image.png"; // Correct the path if necessary
import { red } from "@mui/material/colors";

const Main = () => {
  return (
    <Box mb="20px"

      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        height: "45vh", 
        width: "100%", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        
      }}
    >
      <Typography variant="h3" color="white" fontWeight="bold">
        CONTACT US
      </Typography>
    </Box>
  );
};

export default Main;

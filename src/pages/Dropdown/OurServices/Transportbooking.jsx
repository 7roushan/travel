import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import t1 from "../../../assets/asscerts/images/transport.png";
import Brush from "../../../assets/asscerts/images/blob1.png";
import contactBg from "../../../assets/asscerts/images/contact1.jpg";
const Transportbooking = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      {/* Header Section */}
      <Box
        sx={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPositionX: "60%",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />
        {/* Blob Brush effect */}
        <Box
          component="img"
          width="100%"
          height="30%"
          src={Brush}
          sx={{ position: "absolute", bottom: "0" }}
        />
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            textShadow: "1px 1px 4px #000",
            position: "relative",
            zIndex: 2,
            color: "white",
          }}
        >
          Transport Booking
        </Typography>
      </Box>

      {/* Main Content Section */}
      <Box sx={{ p: 4 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={t1}
              alt="Transport Booking"
              marginLeft={20}
              mb={10}
              sx={{
                width: "60%",
                borderRadius: "8px",
                boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
              }}
            />
          </Grid>

          {/* Right Side Content */}
         <Grid item xs={12} md={6} sx={{ ml: { xs: 5, md: 0 } }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "black" }}
            >
              Transport Booking
            </Typography>
            <Typography variant="body1" sx={{ color: "black", mb: 2 }}>
              Best Rates available for Transport Booking
            </Typography>
            <Typography variant="body1" sx={{ color: "black" }}>
              <Box component="ul" sx={{ listStyleType: "none", padding: 0 }}>
                <li>
                  All Taxis Available: Swift Dzire, Ertiga, Marazzo, Tavera,
                  Innova, Innova Crysta, Tempo Traveller, etc.
                </li>
                <li>
                  <strong>OUTSTATION RATES -</strong>
                </li>
                <li>Swift Dzire - 10 RS/KM</li>
                <li>Ertiga - 12 RS/KM</li>
                <li>Innova - 14 RS/KM</li>
                <li>Innova Crysta - 16 RS/KM</li>
                <li>Tempo Traveller (12) - 20 RS/KM</li>
                <li>Tempo Traveller (16) - 24 RS/KM</li>
                <li>For more details, kindly contact Iconic Travel!</li>
              </Box>
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f56960",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#032d4a" },
              }}
            >
              BOOK NOW
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Transportbooking;

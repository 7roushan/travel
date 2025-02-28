import React from "react";
import { Box, Grid, Typography, Button, useMediaQuery, useTheme } from "@mui/material";

import Brush from "../../../assets/asscerts/images/blob1.png";

import contactBg from "../../../assets/asscerts/images/contact1.jpg";

const Hotelbooking = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      {/* Header Section */}
      <Box
        sx={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPositionX: "60%",
          height: { xs: "300px", sm: "400px", md: "500px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          textAlign: "center",
          px: 2,
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark effect
          }}
        />

        {/* Blob Brush effect */}
        <Box
          component="img"
          width="100%"
          height="30%"
          src={Brush}
          sx={{ position: "absolute", bottom: 0 }}
        />

        <Typography
          variant={isSmallScreen ? "h4" : "h2"}
          sx={{
            fontWeight: "bold",
            textShadow: "1px 1px 4px #000",
            position: "relative",
            zIndex: 2,
            color:"white"
           
          }}
        >
          Hotel Booking
        </Typography>
      </Box>

      {/* Main Content Section */}
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side Image */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src="https://iconictravel.in/assets/img/1649049330WhatsApp Image 2022-04-01 at 12.30.06 (23).jpeg"
              alt="Tour Package"
              sx={{
                width: { xs: "90%", sm: "80%", md: "70%" },
                borderRadius: "8px",
                boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
              }}
            />
          </Grid>

          {/* Right Side Content */}
         <Grid item xs={12} md={6} sx={{ ml: { xs: 5, md: 0 } }}>
            <Typography
              variant={isSmallScreen ? "h5" : "h4"}
              sx={{ fontWeight: "bold", mb: 2, color: "black" }}
            >
              Hotel Booking
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: "black" }}>
              Kindly contact Iconic Travel for discounted Tour Packages.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, color: "black" }}>
              Domestic Best Offers Available:
            </Typography>
            <Box
              component="ul"
              sx={{
                padding: 0,
                textAlign: "left",
                pl: 2,
                listStyleType: "none",
              }}
            >
              {[
                "All Over India Best Hotel Rates available.",
                "Shillong Meghalaya Tour Packages",
                "The Fern Group of Hotels",
                "Kashmir Tour Packages",
                "Uttarakhand Tour Packages",
                "Leh Ladakh Tour Packages",
                "Arunachal Tour Packages",
              ].map((packageItem, index) => (
                <Typography key={index} component="li" sx={{ mb: 1, color: "black" }}>
                  {packageItem}
                </Typography>
              ))}
            </Box>

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

export default Hotelbooking;

import React from "react";
import { Box, Grid, Typography, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

import Brush from "../../../assets/asscerts/images/blob1.png";
import b1 from "../../../assets/asscerts/images/b2.jpg";
import contactBg from "../../../assets/asscerts/images/contact1.jpg";

const B2bdeals = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Mobile: < 600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // Tablet: 600px - 900px

  return (
    <Box sx={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      {/* Header Section */}
      <Box
        sx={{
          // opacity:'0.6',
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPositionX: "60%",
          height: { xs: "500px", sm: "400px", md: "500px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          textAlign: "center",
          color: "white",
        }}
      >
        {" "}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity (0.6 for dark effect)
          }}
        />
        {/* Blob Brush Effect */}
        <Box
          component="img"
          src={Brush}
          alt="Brush Effect"
          sx={{
            width: "100%",
            height: "30%",
            position: "absolute",
            bottom: 0,
          }}
        />
        <Typography
          variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
          sx={{
            fontWeight: "bold",
            textShadow: "1px 1px 4px #000",
            position: "relative",
            zIndex: 2,
            paddingX: isMobile ? "20px" : "0",
            color: "white",
          }}
        >
          B2B Deals
        </Typography>
      </Box>

      {/* Main Content Section */}
      <Box sx={{ px: isMobile ? 2 : isTablet ? 4 : 6, py: isMobile ? 4 : 6 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Image */}
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Box
              component="img"
              src={b1}
              alt="B2B Deals"
              sx={{
                width: isMobile ? "90%" : isTablet ? "80%" : "60%",
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
              }}
            />
          </Grid>

          {/* Right Side - Text Content */}
          <Grid item xs={12} md={6} textAlign={isMobile ? "center" : "left"}>
            <Typography
              variant={isMobile ? "h6" : isTablet ? "h5" : "h4"}
              sx={{ fontWeight: "bold", mb: 2, color: "black" }}
            >
              B2B Deals
            </Typography>

            <Typography color="black" sx={{ mb: 3 }}>
              Elevate your business with our exclusive B2B deals, designed for
              corporate travelers, event organizers, and travel agencies. We
              offer seamless booking solutions, bulk discounts, and premium
              support to ensure a hassle-free experience. Partner with us to
              unlock competitive rates, personalized travel packages, and
              dedicated assistance tailored to your business needs.
            </Typography>

            <Typography color="black"></Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f56960",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#032d4a" },
                px: 4,
                py: 1,
                fontSize: isMobile ? "0.875rem" : "1rem",
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

export default B2bdeals;

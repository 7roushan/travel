import React from "react";
import backimg from "../asscerts/blog/banner.jpg";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import brushEffect from "../asscerts/blog/blob.png"; // Add a brush effect image

import BlogData from "../Data/BlogData";

function Blogs() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          // width: "100%",

          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            width: "100%",
            height: "70vh",
            backgroundImage: `url(${backimg})`,
            backgroundSize: "cover",
            backgroundPosition: {
              lg: "center",
              xs: "center",
              md: "center",
              sm: "center",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            opacity: "0.8",
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
          {/* Title */}
          <Typography
            variant="h2"
            fontWeight="bold"
            color="white"
            sx={{ position: "relative", zIndex: 2 }}
          >
            Blogs cchcg
          </Typography>
        </Box>

        {/* Brush Effect */}
        <Box
          component="img"
          src={brushEffect} // Image with transparent edges for brush effect
          alt="Brush Effect"
          sx={{
            // width: "100%",
            position: "absolute",
            bottom: 0,
          }}
        />
      </Box>

      {/* Blog Cards */}
      <Grid container spacing={3} sx={{ px: 5 }}>
        {BlogData.map((place, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 0,
                height: "400px",
                border: "10px solid white",
                overflow: "hidden", // Ensures the image stays inside the card
                "&:hover .zoom-image": {
                  transform: "scale(1.1)", // Scale only the image
                },
              }}
            >
              <Box sx={{ overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={place.imagePath}
                  alt={place.title}
                  className="zoom-image"
                  sx={{
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </Box>
              <CardContent>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color="#101f46"
                  sx={{
                    transition: "color 0.3s ease-in-out",
                    "&:hover": { color: "#f56960", cursor: "pointer" },
                  }}
                >
                  {place.title}
                </Typography>
                <Typography variant="subtitle2" fontWeight="bold">
                  {place.date}
                </Typography>
                <Typography variant="body2">{place.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Blogs;

import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Box,
} from "@mui/material";
import Slider from "react-slick"; // Import react-slick

// Images
import img1 from "../../assets/asscerts/slidertour/1648652370Dawki River.jpg";
import img2 from "../../assets/asscerts/slidertour/1650610933Chardham-Yatra 3.jpg";
import img3 from "../../assets/asscerts/slidertour/16507201972017_11$largeimg27_Monday_2017_235436412.jpg";

const categories = [
  { title: "Adventure", image: img1 },
  { title: "Trekking", image: img2 },
  { title: "Camp Fire", image: img3 },
  { title: "Pilgrim Trips", image: img2 },
  { title: "Camping", image: img3 },
  { title: "Wildlife Tour", image: img1 },
];

const testimonials = [
  {
    text: "Great experience in Sikkim! The travel services were top-notch.",
    name: "Nemis D",
    location: "Sikkim and Darjeeling",
  },
  {
    text: "Excellent services! Very responsive and professional team.",
    name: "John Doe",
    location: "Goa Trip",
  },
];

const Testimonial = () => {
  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container my={5}  sx={{ py: { xs: 1, md: 4 } }}>

      {/* Travel Categories */}
      <Typography mb={3} variant="h4" align="center" gutterBottom>
        Travel Categories
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {categories.map(({ title, image }, index) => (
          <Grid item xs={6} sm={4} md={2} ld={2} key={index}>
            <Card sx={{ minHeight: 100, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="120"
                image={image}
                alt={title}
              />
              <Card sx={{ py: 0.2 }}>
                <Typography variant="h6" align="center">
                  {title}
                </Typography>
              </Card>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Testimonials */}
      <Grid sx={12} md={12} >
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 5 }}>
        Testimonials
      </Typography>
      <Slider {...settings}>
        {testimonials.map(({ text, name, location }, index) => (
          <Box key={index} textAlign="center">
            <Avatar
              sx={{
                mx: "auto",
                width: 100,
                height: 100,
                bgcolor: "primary.main",
              }}
            />
            <Typography variant="h6" gutterBottom>
              "{text}"
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {location}
            </Typography>
          </Box>
        ))}
      </Slider>
      </Grid>
    </Container>
  );
};

export default Testimonial;

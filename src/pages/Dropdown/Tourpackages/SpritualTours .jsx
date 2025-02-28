import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Pagination,
} from "@mui/material";
import backimg from "../../../assets/images/tours.jpeg";
import brushEffect from "../../../assets/images/blob.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LuggageIcon from "@mui/icons-material/Luggage";
import SprTourData from "../../../Data/SprTourData";
import { useNavigate } from "react-router-dom";

const ITEMS_PER_PAGE = 8;

const SpritualTours = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(SprTourData.length / ITEMS_PER_PAGE);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const displayedTours = SprTourData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <>
      {/* Background Section */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Box
          sx={{
            width: "100%",
            height: { xs: "800px", sm: "600px", md: "600px", lg: "500px" },
            backgroundImage: `url(${backimg})`,
            backgroundSize: "cover",
            backgroundPositionY: "120",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            backgroundRepeat: "no-repeat",
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
          <Typography
            variant="h2"
            fontWeight="bold"
            color="white"
            sx={{ position: "relative", zIndex: 2, textAlign: "center", px: 2 }}
          >
            Spritual Tours
          </Typography>
        </Box>

        {/* Brush Effect */}
        <Box
          component="img"
          src={brushEffect}
          alt="Brush Effect"
          sx={{
            width: "100%",
            position: "absolute",
            bottom: 0,
            height: { xs: "115px" },
          }}
        />
      </Box>

      {/* Section Title */}
      <Box sx={{ textAlign: "center", color: "#032d4a", my: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          SPRITUAL TOURS
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 1 }}>
          <MoreHorizIcon />
          <LuggageIcon />
          <MoreHorizIcon />
        </Box>
      </Box>

      {/* Tour Grid */}
      <Grid
        container
        spacing={2}
        sx={{ px: { xs: 2, sm: 5, md: 10, lg: 15 }, py: 2 }}
      >
        {displayedTours.map((tour, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                borderRadius: "0",
                height: "90%",
                border: "5px solid white",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                {/* Image */}
                <CardMedia
                  component="img"
                  height="225"
                  image={tour.imagePath}
                  alt={tour.title}
                  sx={{
                    objectFit: "cover",
                    width: "100%",
                    opacity: "0.9",
                  }}
                />

                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="#101f46"
                    sx={{
                      textAlign: "center",
                      transition: "color 0.3s ease-in-out",
                      "&:hover": { color: "#f56960", cursor: "pointer" },
                    }}
                  >
                    {tour.title}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box display="flex" justifyContent="center" sx={{ my: 4 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </>
  );
};

export default SpritualTours;

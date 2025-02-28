// import React from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Card,
//   CardMedia,
//   CardContent,
// } from "@mui/material";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Images
// import img1 from "../../asscerts/slidertour/1648652370Dawki River.jpg";
// import img2 from "../../asscerts/slidertour/1650610933Chardham-Yatra 3.jpg";
// import img3 from "../../asscerts/slidertour/16507201972017_11$largeimg27_Monday_2017_235436412.jpg";

// // Tour Data
// const tourData = [
//   {
//     id: 1,
//     title: "Kashmir Tour Package 6 Nights 7 Days",
//     image: img1,
//     price: "₹9699",
//     duration: "06 N/07 D",
//     persons: 4,
//     location: "Kashmir",
//   },
//   {
//     id: 2,
//     title: "Shillong Guwahati Tour Package 6 Night 7 Days",
//     image: img2,
//     price: "₹16700",
//     duration: "06 N/07 D",
//     persons: 4,
//     location: "Meghalaya",
//   },
//   {
//     id: 3,
//     title: "Chardham Yatra Tour Package 8 Nights 9 Days",
//     image: img3,
//     price: "₹15000",
//     duration: "08 N/09 D",
//     persons: 12,
//     location: "Haridwar",
//   },
//   {
//     id: 4,
//     title: "Kashmir Tour Package 6 Nights 7 Days",
//     image: img1,
//     price: "₹9699",
//     duration: "06 N/07 D",
//     persons: 4,
//     location: "Kashmir",
//   },
//   {
//     id: 5,
//     title: "Shillong Guwahati Tour Package 6 Night 7 Days",
//     image: img2,
//     price: "₹16700",
//     duration: "06 N/07 D",
//     persons: 4,
//     location: "Meghalaya",
//   },
//   {
//     id: 6,
//     title: "Chardham Yatra Tour Package 8 Nights 9 Days",
//     image: img3,
//     price: "₹15000",
//     duration: "08 N/09 D",
//     persons: 12,
//     location: "Haridwar",
//   },
// ];

// // Slider Settings
// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 1000,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   slidesToShow: 3,
//   slidesToScroll: 1,
  
// };

// const TrendingTours = () => {
//   return (
//     <Box my={5} textAlign="center">
//       <Typography my={5} variant="h5" fontWeight="bold">
//         TRENDING HOLIDAY TOURS
//       </Typography>
//       <Slider {...settings}>
//         {tourData.map(
//           ({ id, title, image, price, duration, persons, location }) => (
//             <Card
//               key={id}
//               sx={{
//                 boxShadow: 3,
//                 borderRadius: 2,
//                 minHeight: 400,
//                 maxWidth: "100%",
//                 gap: "10px",
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={image}
//                 alt={title}
//               />
//               <CardContent
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   textAlign: "center",
//                 }}
//               >
//                 <Typography variant="subtitle1" fontWeight="bold">
//                   {title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {duration} | {persons} Persons | {location}
//                 </Typography>
//                 <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
//                   {price}
//                 </Typography>
//                 <Box sx={{ mt: "auto" }}>
//                   <Button variant="contained" color="error">
//                     Read More
//                   </Button>
//                 </Box>
//               </CardContent>
//             </Card>
//           )
//         )}
//       </Slider>
//     </Box>
//   );
// };

// export default TrendingTours;

import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import img1 from "../../assets/asscerts/slidertour/1648652370Dawki River.jpg";
import img2 from "../../assets/asscerts/slidertour/1650610933Chardham-Yatra 3.jpg";
import img3 from "../../assets/asscerts/slidertour/16507201972017_11$largeimg27_Monday_2017_235436412.jpg";
 
const tourData = [
  {
    id: 1,
    title: "Kashmir Tour Package 6 Nights 7 Days",
    image: img1,
    price: "₹9699",
    duration: "06 N/07 D",
    persons: 4,
    location: "Kashmir",
  },
  {
    id: 2,
    title: "Shillong Guwahati Tour Package 6 Night 7 Days",
    image: img2,
    price: "₹16700",
    duration: "06 N/07 D",
    persons: 4,
    location: "Meghalaya",
  },
  {
    id: 3,
    title: "Chardham Yatra Tour Package 8 Nights 9 Days",
    image: img3,
    price: "₹15000",
    duration: "08 N/09 D",
    persons: 12,
    location: "Haridwar",
  },
  {
    id: 4,
    title: "Kashmir Tour Package 6 Nights 7 Days",
    image: img1,
    price: "₹9699",
    duration: "06 N/07 D",
    persons: 4,
    location: "Kashmir",
  },
  {
    id: 5,
    title: "Shillong Guwahati Tour Package 6 Night 7 Days",
    image: img2,
    price: "₹16700",
    duration: "06 N/07 D",
    persons: 4,
    location: "Meghalaya",
  },
  {
    id: 6,
    title: "Chardham Yatra Tour Package 8 Nights 9 Days",
    image: img3,
    price: "₹15000",
    duration: "08 N/09 D",
    persons: 12,
    location: "Haridwar",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
        breakpoint: 1050,
        settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "0px",
      },
    },
  ],
};

const TrendingTours = () => {
  return (
    <Grid xs={12} md={4} lg={4}>
    <Box my={2}  sx={{ textAlign: "center", py: 2, }}>
      <Typography my={5}  variant="h5" fontWeight="bold" gutterBottom>
        MOST VISITED PLACES/DESTINATIONS
      </Typography>
      <Slider {...settings}>
        {tourData.map((tour) => (
          <Box key={tour.id}>
            {" "}
            
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                mx: 2,
                maxWidth: "vw",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={tour.image}
                alt={tour.title}
              
              />
              <CardContent sx={{ textAlign: "center"}}>
             <Typography variant="subtitle1" fontWeight="bold">
               {tour.location}
             </Typography>
             <Typography variant="body2" color="text.secondary">
                {tour.duration} | {tour.persons} Persons | {tour.location}
              </Typography>
              <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                {tour.price}
              </Typography>
              <Button variant="contained" color="error" sx={{ mt: 2 }}>
                Read More
              </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
    </Grid>
  );
};

export default TrendingTours;

import { Box, Container } from "@mui/material"; 

import video from "../../assets/asscerts/video/banner.mp4"; 
import TrendingTours from "../../pages/homesec/TrendingTours";
import MostVisit from "../../pages/homesec/MostVisit";
import Gotravel from "../../pages/homesec/Gotravel";
import OurGallery from "../../pages/homesec/OurGallery";
import Testimonial from "../../pages/homesec/Testmomiral";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",  // Ensures no extra margins
          }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Responsive Overlay (Optional) */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)", // 40% black transparency
          }}
        />

        {/* Responsive Text Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: { xs: "16px", sm: "20px", md: "28px", lg: "36px" },
            fontWeight: "bold",
            textAlign: "center",
            width: "90%",  // Prevents text overflow on small screens
          }}
        >
          
        </Box>
      </Box>

      {/* Main Content - Wrapped in Container to Avoid Overflow */}
      <Container maxWidth="lg" sx={{ overflowX: "hidden" }}>

      <TrendingTours />
        <MostVisit  />
        </Container> 

        <Gotravel />
        
        <Container>
        <Testimonial />
        <OurGallery />
        </Container>

       {/* <Box>
      <Container>
      
      
      </Box> */}
    </>
  );
};

export default Home;

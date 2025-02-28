import { Box, Typography } from "@mui/material";
import React from "react";
import backimg from "../../assets/images/banner.jpg";
import brushEffect from "../../assets/images/blob.png"; // Add a brush effect image
import ContactForm from "../../Component/public/ContactForm";
function Contactus() {
  return (
    <Box>
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
            height: { xs: "800px", sm: "600px", md: "600px", lg: "500px" },
            backgroundImage: `url(${backimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
          {/* Title */}
          <Typography
            variant="h2"
            fontWeight="bold"
            color="white"
            sx={{ position: "relative", zIndex: 2 }}
          >
            Contact Us
          </Typography>
        </Box>

        {/* Brush Effect */}
        <Box
          component="img"
          src={brushEffect} // Image with transparent edges for brush effect
          alt="Brush Effect"
          sx={{
            width: { sx: "100%", md: "100%", lg: "100%" },
            position: "absolute",
            bottom: 0,
            height: { xs: "150px" },
          }}
        />
      </Box>
      <ContactForm />
    </Box>
  );
}

export default Contactus;

// import { Container, Typography } from "@mui/material";

// import Main from "../../components/main";

// const Contact = () => {
//   return (
//     <>
//       <Main/>
//

//     </>
//   );
// };

// export default Contact;

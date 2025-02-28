import React from "react";
import {
  Box,
  Typography,
  Grid,
  Link,
  Divider,
  Stack,
  useMediaQuery,
  useTheme,
  Container,
  IconButton,
} from "@mui/material";
import {
  Phone,
  Email,
  LocationOn,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom"; // Import React Router Link

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box sx={{ backgroundColor: "#032d4a", color: "white" }}>
        {/* Footer Content */}
        <Box mx={4} px={4} py={4}>
          <Grid container spacing={5}>
            {/* About Iconic Travel */}
            <Grid item xs={12} sm={6} md={3} spacing={2}>
              <Typography
                variant="h6"
                color="#f56960"
                sx={{
                  borderBottom: "2px solid #f56960",
                  display: "inline-block",
                  mb: 1,
                }}
              >
                ABOUT ICONIC TRAVEL
              </Typography>
              <Typography variant="body2">
                Iconic Travel offers the best cheapest tour packages to our
                reliable clients, occasions, and encounters to assist
                individuals with making a propensity for parting from the daily
                practice.
              </Typography>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} sm={6} md={3} spacing={2} >
              <Typography
                variant="h6"
                color="#f56960"
                sx={{
                  borderBottom: "2px solid #f56960",
                  display: "inline-block",
                  mb: 1,
                }}
              >
                CONTACT INFORMATION
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Phone sx={{ color: "#f56960" }} /> +91-8130883907
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Email sx={{ color: "#f56960" }} /> info@iconictravel.in
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Email sx={{ color: "#f56960" }} /> sales@iconictravel.in
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <LocationOn sx={{ color: "#f56960" }} /> Office No 15, Bhawani
                Market, Sec 27 Noida, Uttar Pradesh 201301
              </Typography>
            </Grid>

            {/* Latest Posts */}
            <Grid item xs={12} sm={6} md={3} spacing={2} >
              <Typography
                variant="h6"
                color="#f56960"
                sx={{
                  borderBottom: "2px solid #f56960",
                  display: "inline-block",
                  mb: 1,
                }}
              >
                LATEST POST
              </Typography>
              <Link href="#" color="inherit" underline="hover" display="block">
                Places to Visit in Omkareshwar - 07-Feb-2023
              </Link>
              <Divider sx={{ borderColor: "white", my: 1 }} />
              <Link href="#" color="inherit" underline="hover" display="block">
                Best places to visit in Varanasi - 07-Feb-2023
              </Link>
              <Divider sx={{ borderColor: "white", my: 1 }} />
              <Link href="#" color="inherit" underline="hover" display="block">
                Tourist Places To Visit In Amarnath - 07-Feb-2023
              </Link>
            </Grid>

            {/* Useful Links */}
            <Grid item xs={12} sm={6} md={3} spacing={2} >
              <Typography
                variant="h6"
                color="#f56960"
                sx={{
                  borderBottom: "2px solid #f56960",
                  display: "inline-block",
                  mb: 1,
                }}
              >
                USEFUL LINKS
              </Typography>
              <Link href="#" color="inherit" underline="hover" display="block">
                Home
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                About Us
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                Tour Packages
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                Feedback
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                Blogs
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                Gallery
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                Contact Us
              </Link>
            </Grid>
          </Grid>

          {/* Social Media Links */}
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}
          >
            <IconButton
              sx={{ color: "#f56960" }}
              component="a"
              href="https://facebook.com"
            >
              <Facebook />
            </IconButton>
            <IconButton
              sx={{ color: "#f56960" }}
              component="a"
              href="https://twitter.com"
            >
              <Twitter />
            </IconButton>
            <IconButton
              sx={{ color: "#f56960" }}
              component="a"
              href="https://instagram.com"
            >
              <Instagram />
            </IconButton>
            <IconButton
              sx={{ color: "#f56960" }}
              component="a"
              href="https://linkedin.com"
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Footer Section */}
      <Box
        display="flex"
        sx={{ background: "black", padding: 2, color: "white" }}
      >
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={isMobile ? 1 : 40}
          sx={{ textAlign: isMobile ? "center" : "left", width: "100%" }}
        >
          <Typography>
            Cancellation and Refund Policy | Privacy Policy | Terms & Conditions
          </Typography>
          <Typography>
            Copyright ©2025 Iconic Travel. All rights Reserved
          </Typography>
        </Stack>
      </Box>
    </>

    // <Box sx={{ padding: 4, background: "#032d4a", color: "white" , textAlign:"justify" , justifyContent:"spacebetween" }}>
    //   <Grid container spacing={4}>
    //     {/* About Iconic Travel Section */}
    //     <Grid item xs={12} md={3}>
    //       <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
    //         | ABOUT ICONIC TRAVEL
    //       </Typography>

    //       <Typography variant="body1" paragraph>
    //         Iconic Travel offers the best cheapest tour packages to our
    //         reliable clients, occasions, and encounters to assist individuals
    //         with making a propensity for parting from the daily practice.
    //       </Typography>
    //     </Grid>

    //     {/* Contact Information Section */}
    //     <Grid item xs={12} md={3}>
    //       <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
    //         | CONTACT INFORMATION
    //       </Typography>

    //       <Typography
    //         variant="body2"
    //         paragraph
    //         sx={{ display: "flex", alignItems: "center" }}
    //       >
    //         <Phone sx={{ marginRight: 1, color: "white" }} /> +91-8130883907
    //       </Typography>
    //       <Typography
    //         variant="body2"
    //         paragraph
    //         sx={{ display: "flex", alignItems: "center" }}
    //       >
    //         <Email sx={{ marginRight: 1, color: "white" }} />{" "}
    //         info@iconictravel.in
    //       </Typography>
    //       <Typography
    //         variant="body2"
    //         paragraph
    //         sx={{ display: "flex", alignItems: "center" }}
    //       >
    //         <Email sx={{ marginRight: 1, color: "white" }} />{" "}
    //         sales@iconictravel.in
    //       </Typography>
    //       <Typography
    //         variant="body2"
    //         paragraph
    //         sx={{ display: "flex", alignItems: "center" }}
    //       >
    //         <LocationOn sx={{ marginRight: 1, color: "white" }} /> Office No
    //         15, Bhawan Market Sec 27
    //       </Typography>
    //       <Typography
    //         variant="body2"
    //         sx={{ display: "flex", alignItems: "center" }}
    //       >
    //         <LocationOn sx={{ marginRight: 1, color: "white" }} /> Noida,
    //         Uttar Pradesh 201301
    //       </Typography>
    //     </Grid>

    //     {/* Latest Post Section */}
    //     <Grid item xs={12} md={3}>
    //       <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
    //          LATEST POST
    //       </Typography>

    //       <Link
    //         href="#"
    //         underline="hover"
    //         color="white"
    //         onClick={(e) => e.preventDefault()}
    //       >
    //         Places to Visit in Omkareshwar
    //       </Link>
    //       <Typography variant="body2" paragraph sx={{ color: "white" }}>
    //         07-Feb-2023 | Admin
    //       </Typography>
    //       <Divider sx={{ borderColor: "white", my: 1 }} />
    //       <Link
    //         href="#"
    //         underline="hover"
    //         color="white"
    //         onClick={(e) => e.preventDefault()}
    //       >
    //         Best places to visit in Varanasi
    //       </Link>
    //       <Typography variant="body2" paragraph sx={{ color: "white" }}>
    //         07-Feb-2023 | Admin
    //       </Typography>
    //       <Divider sx={{ borderColor: "white", my: 1 }} />
    //       <Link
    //         href="#"
    //         underline="hover"
    //         color="white"
    //         onClick={(e) => e.preventDefault()}
    //       >
    //         Tourist Places To Visit in Amarnath
    //       </Link>
    //       <Typography variant="body2" paragraph sx={{ color: "white" }}>
    //         07-Feb-2023 | Admin
    //       </Typography>
    //     </Grid>

    //     {/* Useful Links Section */}
    //     <Grid item xs={12} md={3}>
    //       <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
    //         | USEFUL LINKS
    //       </Typography>

    //       <RouterLink
    //         to="/"
    //         style={{
    //           color: "white",
    //           textDecoration: "none",
    //           display: "block",
    //         }}

    //       >
    //         Home
    //       </RouterLink>
    //       <RouterLink
    //         to="/about"
    //         style={{
    //           color: "white",
    //           textDecoration: "none",
    //           display: "block",
    //         }}

    //       >
    //         About Us
    //       </RouterLink>
    //       <RouterLink
    //         to="/tour-packages"
    //         style={{
    //           color: "white",
    //           textDecoration: "none",
    //           display: "block",
    //         }}
    //       >
    //         Tour Packages
    //       </RouterLink>
    //       <RouterLink
    //         to="/pagenotfound"
    //         style={{
    //           color: "white",
    //           textDecoration: "none",
    //           display: "block",
    //         }}
    //       >
    //         Feedback
    //       </RouterLink>
    //       <RouterLink
    //         to="/blogs"
    //         style={{
    //           color: "white",
    //           textDecoration: "none",
    //           display: "block",
    //         }}
    //       >
    //         Blogs
    //       </RouterLink>
    //       <RouterLink
    //         to="/gallery"
    //         style={{
    //           color: "white",
    //           textDecoration: "none",
    //           display: "block",
    //         }}
    //       >
    //         Gallery
    //       </RouterLink>
    //       <RouterLink
    //         to="/contactus"
    //         style={{
    //           color: "white",
    //           textDecoration: "none",
    //           display: "block",
    //         }}
    //       >
    //         Contact Us
    //       </RouterLink>
    //     </Grid>
    //   </Grid>
    // </Box>
  );
};

export default Footer;

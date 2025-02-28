// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   useMediaQuery,
//   Card,
//   CardMedia,
//   Modal,
//   IconButton,
//   useTheme,
//   Container,
// } from "@mui/material";
// import PlayCircleIcon from "@mui/icons-material/PlayCircle";
// import img from "../../asscerts/icon5.png";
// import image from "../../asscerts/images/img8.jpg";
// import { Block, Rowing } from "@mui/icons-material";

// const Gotravel = () => {
//   const [open, setOpen] = useState(false);
//   const theme = useTheme();
//   const isXs = useMediaQuery(theme.breakpoints.down("xs"));
//   const isSm = useMediaQuery(theme.breakpoints.down("sm"));
//   const isMd = useMediaQuery(theme.breakpoints.down("md"));

//   return (
//     <Container
//       sx={{
//         backgroundColor: "#008cba",
//         color: "#fff",
//         marginLeft: "auto",
//         marginRight: 0,
//         width: "100%",
//       }}
//     >
//       <Grid container sx={Block} md={6} ld={6} spacing={3} alignItems="center">
//         {/* Left Side - Video Section */}
//         <Grid
//           item
//           xs={Block}
//           md={4}
//           ld={5}
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             py: { xs: 2, sm: 3, md: 4 },
//           }}
//         >
//           <Box
//             sx={{
//               position: "relative",
//               width: "100%",
//               maxWidth: "auto",
//               borderRadius: 2,
//               overflow: "hidden",
//               cursor: "pointer",
//               mx: "auto",
//               ml: { md: "-10%", lg: "-20%" },
//             }}
//             onClick={() => setOpen(true)}
//           >
//             {/* <Card>
//               <CardMedia component="img" image={image} alt="Gallery Image" />
//             </Card> */}
//             <Card
//               sx={{
//                 width: {
//                   xs: "100%",
//                   sm: "75%",
//                   md: "50%",
//                   lg: "40%",
//                   xl: "30%",
//                 }, // Responsive width
//                 maxWidth: 500, // Optional max width
//                 mx: "auto", // Centers the card horizontally
//                 boxShadow: 3, // Optional shadow
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 image={image}
//                 alt="Gallery Image"
//                 sx={{
//                   height: { xs: 150, sm: 200, md: 250, lg: 300, xl: 350 }, // Responsive height
//                   objectFit: "cover", // Ensures the image covers the area
//                 }}
//               />
//             </Card>

//             <IconButton
//               sx={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 color: "white",
//                 backgroundColor: "rgba(0,0,0,0.5)",
//                 "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
//                 fontSize: "3rem",
//               }}
//             >
//               <PlayCircleIcon fontSize="large" />
//             </IconButton>
//           </Box>
//         </Grid>

//         {/* Right Side - Text and Information */}
//         <Grid item xs={12} md={8} ld={7}>
//           <Typography
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 1,
//               fontSize: "0.9rem",
//             }}
//           >
//             <Box
//               sx={{ backgroundColor: "white", height: "1px", width: "1cm" }}
//             />{" "}
//             CALLBACK FOR MORE
//           </Typography>
//           <Typography variant={isXs ? "h6" : "h5"} fontWeight="bold">
//             GO TRAVEL. DISCOVER. REMEMBER US!!
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{ mt: 2, fontSize: isSm ? "0.8rem" : "0.9rem" }}
//           >
//             <strong>
//               Iconic Travel offers the best, most affordable tour packages to
//               our reliable clients, providing experiences that help people break
//               away from daily routines.
//             </strong>
//           </Typography>

//           {/* Stats Section */}
//           <Grid container spacing={3} sx={{ pt: 1 }}>
//             {[
//               "10+ Years in Industry",
//               "250K+ Satisfied Customers",
//               "10+ Qualified Staff",
//               "250+ Worldwide Locations",
//             ].map((text, index) => (
//               <Grid item xs={6} sm={6} md={6} key={index}>
//                 <Typography variant="h6" fontWeight="bold">
//                   {text.split(" ")[0]}
//                 </Typography>
//                 <Typography variant="body2" fontSize="0.8rem">
//                   {text.split(" ").slice(1).join(" ")}
//                 </Typography>
//               </Grid>
//             ))}
//           </Grid>

//           {/* Contact Section */}
//           <Grid
//             container
//             sx={{
//               backgroundColor: "#fff",
//               color: "#008cba",
//               p: { sx: 1, md: 2, lg: 3 }, // Increases padding on larger screens
//               borderRadius: 1,
//               position: "absolute",
//               textAlign: "center",
//               alignItems: "center",
//               display: "inline-flex",
//               gap: { sx: 1, md: 2, lg: 3 }, // Adjusts gap between elements
//               width: "fit-content",
//               boxShadow: { sx: 1, md: 2, lg: 3 }, // Increases shadow depth on larger screens
//               // mt: { sx: 0.5, md: 1, lg: 1.5 },
//               ml: { sx: 0.5, md: 1, lg: 2 }, // Adjusts left margin dynamically
//             }}
//           >
//             <Grid item>
//               <img
//                 src={img}
//                 alt="Company Logo"
//                 style={{
//                   width: isXs ? "20px" : "25px",
//                   height: "auto",
//                   marginRight: "10px",
//                 }}
//               />
//             </Grid>
//             <Grid item>
//               <Typography variant="body1" fontWeight="bold">
//                 Have any doubt? Call Us
//               </Typography>
//               <Typography variant="h6" color="red" fontWeight="bold">
//                 +91-8130883907
//               </Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>

//       {/* Video Modal */}
//       <Modal open={open} onClose={() => setOpen(false)}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: "90%",
//             maxWidth: 600,
//             bgcolor: "background.paper",
//             boxShadow: 24,
//             p: 2,
//             borderRadius: 2,
//           }}
//         >
//           <iframe
//             width="100%"
//             height="315"
//             src="https://www.youtube.com/embed/IUN664s7N-c"
//             title="Travel Video"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </Box>
//       </Modal>
//     </Container>
//   );
// };

// export default Gotravel;

import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
  Card,
  CardMedia,
  Modal,
  IconButton,
  useTheme,
  Container,
} from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

import img from "../../assets/asscerts/icon5.png";
import image from "../../assets/asscerts/images/img8.jpg";

const Gotravel = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box my={5} py={5}>
    <Container
      sx={{
        backgroundColor: "#008cba",
        color: "#fff",
        width: { xs: "90%", sm: "85%", md: "90%", lg: "90%" },
        height: { xs: "90%", sm: "85%", md: "90%", lg: "90%" },
        marginRight: 0,
        marginLeft: "auto",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Video Section */}
        <Grid
          item
          xs={12}
          md={5}
          lg={5}
          sx={{
            display: { xs: "block", md: "flex", lg: "flex" },
            justifyContent: "center",
            py: { xs: 1, sm: 3, md: 4 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "auto",
              borderRadius: 2,
              overflow: "hidden",
              cursor: "pointer",
              mx: "auto",
              ml: { xs:"-15%", sm: "-20%", md: "-23%", lg: "-20%" },
            }}
            onClick={() => setOpen(true)}
          >
            <Card
              sx={{
                // width: {
                //   xs: "100%",
                //   sm: "80%",
                //   md: "100%",
                //   lg: "60%",
                //   xl: "60%",
                // },
                maxWidth: 500,
                mx: "auto",
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                image={image}
                alt="Gallery Image"
                sx={{
                  height: {
                    xs: "auto",
                    sm: "auto",
                    md: "auto",
                    lg: "auto",
                    xl: "auto",
                  },
                  objectFit: "cover",
                }}
              />
            </Card>

            <IconButton
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                backgroundColor: "rgba(0,0,0,0.5)",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
                fontSize: "3rem",
              }}
            >
              <PlayCircleIcon fontSize="large" />
            </IconButton>
          </Box>
        </Grid>

        {/* Right Side - Text and Information */}
        <Grid item xs={12} md={7} lg={7}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: "0.9rem",
            }}
          >
            <Box
              sx={{ backgroundColor: "white", height: "1px", width: "1cm" }}
            />
            CALLBACK FOR MORE
          </Typography>
          <Typography variant={isXs ? "h6" : "h5"} fontWeight="bold">
            GO TRAVEL. DISCOVER. REMEMBER US!!
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 2, fontSize: isSm ? "0.8rem" : "0.9rem" }}
          >
            <strong>
              Iconic Travel offers the best, most affordable tour packages to
              our reliable clients, providing experiences that help people break
              away from daily routines.
            </strong>
          </Typography>

          {/* Stats Section */}
          <Grid container spacing={3} sx={{ py: 2 }}>
            {[
              "10+ Years in Industry",
              "250K+ Satisfied Customers",
              "10+ Qualified Staff",
              "250+ Worldwide Locations",
            ].map((text, index) => (
              <Grid item xs={6} sm={6} md={6} key={index}>
                <Typography variant="h6" fontWeight="bold">
                  {text.split(" ")[0]}
                </Typography>
                <Typography variant="body2" fontSize="0.8rem">
                  {text.split(" ").slice(1).join(" ")}
                </Typography>
              </Grid>
            ))}
          </Grid>

          {/* Contact Section */}
          <Grid
            container
            sx={{
              backgroundColor: "#fff",
              position: "absolute",
              color: "#008cba",
              p: { xs: 1, md: 2, lg: 3 },
              borderRadius: 1,
              display: "inline-flex",
              alignItems: "center",
              gap: { xs: 1, md: 2, lg: 3 },
              width: "fit-content",
              boxShadow: { xs: 1, md: 2, lg: 3 },
              ml: { xs: 0.5, md: 1, lg: 2 },
              mt: { xs: -1.5, sm:-1, md:5, lg: 15 },
            }}
          >
            <Grid item>
              <img
                src={img}
                alt="Company Logo"
                style={{
                  width: isXs ? "20px" : "25px",
                  height: "auto",
                  marginRight: "10px",
                }}
              />
            </Grid>
            <Grid item>
              <Typography variant="body1" fontWeight="bold">
                Have any doubt? Call Us
              </Typography>
              <Typography variant="h6" color="red" fontWeight="bold">
                +91-8130883907
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Video Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 2,
            borderRadius: 2,
          }}
        >
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/IUN664s7N-c"
            title="Travel Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </Container>

    </Box>
  );
};

export default Gotravel;

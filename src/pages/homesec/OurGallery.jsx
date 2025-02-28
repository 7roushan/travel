// import React, { useState } from "react";
// import { Container, Typography, Grid, Card, CardMedia, Button } from "@mui/material";
// import img1 from "../../assets/asscerts/slidertour/1648652370Dawki River.jpg";
// import img2 from "../../assets/asscerts/slidertour/1650610933Chardham-Yatra 3.jpg";
// import img3 from "../../assets/asscerts/slidertour/16507201972017_11$largeimg27_Monday_2017_235436412.jpg";

// const galleryImages = [ img1, img2, img3, img1, img2, img3, img1, img2, img3, img1, img2, img3,img1, img2, img3, img1, img2, img3, img1, img2, img3, img1, img2, img3,img1, img2, img3, img1, img2, img3, img1, img2, img3, img1, img2, img3];

// function OurGallery() {
//   const [visibleCount, setVisibleCount] = useState(8); // Initially show 8 images

//   const loadMoreImages = () => {
//     setVisibleCount(visibleCount + 8); 
//   };

//   return (
//     <Container my={5}>
//       <Typography my={5} variant="h4" align="center" gutterBottom>
//         Our Gallery
//       </Typography>

//       {/* Scrollable container for the gallery */}
//       <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
//         <Grid container mb={5} spacing={2}>
//           {galleryImages.slice(0, visibleCount).map((image, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Card>
//                 <CardMedia
//                   component="img"
//                   height="170"
//                   width="150"
//                   image={image}
//                   alt={`Gallery Image ${index + 1}`}
//                 />
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </div>

//       {/* Button to show more images */}
//       {visibleCount < galleryImages.length && (
//         <Button sx={{my:2}} variant="contained" color="primary" onClick={loadMoreImages} fullWidth>
//           View More
//         </Button>
//       )}
//     </Container>
//   );
// }

// export default OurGallery;


import React, { useState } from "react";
import { Container, Typography, Grid, Card, CardMedia, Pagination } from "@mui/material";
import img1 from "../../assets/asscerts/slidertour/1648652370Dawki River.jpg";
import img2 from "../../assets/asscerts/slidertour/1650610933Chardham-Yatra 3.jpg";
import img3 from "../../assets/asscerts/slidertour/16507201972017_11$largeimg27_Monday_2017_235436412.jpg";

const galleryImages = [
  img1, img2, img3, img1, img2, img3, img1, img2, img3, img1, img2, img3,
  img1, img2, img3, img1, img2, img3, img1, img2, img3, img1, img2, img3,
  img1, img2, img3, img1, img2, img3, img1, img2, img3, img1, img2, img3
];

const ITEMS_PER_PAGE = 8;

function OurGallery() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(galleryImages.length / ITEMS_PER_PAGE);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const displayedImages = galleryImages.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <Container my={5}>
      <Typography my={5} variant="h4" align="center" gutterBottom>
        Our Gallery
      </Typography>

      <Grid container mb={5} spacing={2}>
        {displayedImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="170"
                width="150"
                image={image}
                alt={`Gallery Image ${index + 1}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      <Pagination 
        count={totalPages} 
        page={page} 
        onChange={handleChange} 
        color="primary" 
        sx={{ display: "flex", justifyContent: "center", my: 2 }}
      />
    </Container>
  );
}

export default OurGallery;

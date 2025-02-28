import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Button,
  Menu,
  MenuItem,
  ButtonGroup,
  Modal,
  Stack,
  Grid,
  TextField,
} from "@mui/material";
import { Cancel, Menu as MenuIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import IMGLOGO from "../../assets/images/logo.png";
import TopAppBar from "../public/TopAppBar";

const navLinks = [
  { to: "/", label: "HOME" },
  {
    label: "TOUR PACKAGES",
    dropdown: [
      { to: "/tourpackages/internationaltours", label: "International Tour" },
      { to: "/tourpackages/domestictours", label: "Domestic Tour" },
      { to: "/tourpackages/spritualtours", label: "Spiritual Tour" },
    ],
  },
  {
    label: "OUR SERVICES",
    dropdown: [
      {
        to: "/ourservices/tourpackagesbooking",
        label: "Tour Packages Booking",
      },
      { to: "/ourservices/hotelbooking", label: "Hotel Booking" },
      { to: "/ourservices/transportbooking", label: "Transport Booking" },
      { to: "/ourservices/b2bdeals", label: "B2B Deals" },
    ],
  },
  { to: "/gallery", label: "Gallery" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contactus", label: "Contact Us" },
];

const PublicAppBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMenuOpen = (event, index) => {
    setMenuAnchor(event.currentTarget);
    setActiveDropdown(index);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
    setActiveDropdown(null);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Destination: "",
    Date: "",
    Numberofpersons: "",
  });

  const handleModalToggle = () => setModalOpen((prev) => !prev);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          borderBottom: "1px solid #ddd",
          maxHeight: "110px",
        }}
      >
        <TopAppBar />
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 1,
            maxHeight: "40px",
          }}
        >
          <Box>
            <img
              src={IMGLOGO}
              alt="logo"
              style={{ height: isSmallScreen ? "40px" : "50px" }}
            />
          </Box>

          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "center",
                gap: 4,
              }}
            >
              {navLinks.map((link, index) => (
                <Box key={index} sx={{ position: "relative" }}>
                  {link.dropdown ? (
                    <>
                      <Typography
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                          cursor: "pointer",
                          "&:hover": { color: "#f56960" },
                        }}
                        onMouseEnter={(e) => handleMenuOpen(e, index)}
                      >
                        {link.label}
                      </Typography>
                      <Menu
                        anchorEl={menuAnchor}
                        open={activeDropdown === index}
                        onClose={handleMenuClose}
                        onMouseLeave={handleMenuClose}
                      >
                        {link.dropdown.map((item, subIndex) => (
                          <MenuItem
                            key={subIndex}
                            component={Link}
                            to={item.to}
                            onClick={handleMenuClose}
                          >
                            {item.label}
                          </MenuItem>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    <Typography
                      component={Link}
                      to={link.to}
                      sx={{
                        color: "black",
                        fontWeight: "bold",
                        textDecoration: "none",
                        "&:hover": { color: "#f56960" },
                      }}
                    >
                      {link.label}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          )}

          {!isMobile && (
            <Button
              component={Link}
              variant="contained"
              onClick={handleModalToggle}
              sx={{
                backgroundColor: "#f56960",
                color: "white",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "blue" },
              }}
            >
              BOOK NOW
            </Button>
          )}

          {isMobile && (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List sx={{ width: 250 }}>
          {navLinks.map((link, index) => (
            <Box key={index}>
              <ListItem
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
                sx={{ flexDirection: "column", alignItems: "start" }}
              >
                <Typography
                  component={Link}
                  to={link.to}
                  // onClick={() => setDrawerOpen(false)}
                  onClick={() =>
                    setActiveDropdown(activeDropdown === index ? null : index)
                  }
                  sx={{
                    fontWeight: "bold",
                    cursor: "pointer",
                    color: "#000",
                    "&:hover": { color: "#f56960" },
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Typography>

                {link.dropdown && activeDropdown === index && (
                  <Box sx={{ pl: 3 }}>
                    {link.dropdown.map((item, subIndex) => (
                      <ListItem
                        key={subIndex}
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === index ? null : index
                          )
                        }
                        sx={{ flexDirection: "column", alignItems: "start" }}
                      >
                        <Button
                          component={Link}
                          to={item.to}
                          variant="text"
                          sx={{
                            color: "#802706",
                            fontWeight: "bold",
                            minWidth: "70px", // Adjust width to make it narrower
                            padding: "5px 10px", // Adjust padding to make it compact
                            position: "relative",
                            overflow: "hidden",
                            "&:hover": {
                              color: "#f56960",
                              backgroundColor: "transparent", // Ensures no default hover effect
                            },
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              left: "50%",
                              bottom: "0",
                              width: "100%",
                              height: "3px",
                              backgroundColor: "#f56960",
                              transform: "translateX(-50%) scaleX(0)",
                              transition: "transform 0.3s ease-out",
                            },
                            "&:hover::after": {
                              transform: "translateX(-50%) scaleX(1)",
                            },
                          }}
                        >
                          {item.label}
                        </Button>
                      </ListItem>
                    ))}
                  </Box>
                )}
              </ListItem>
              {/*               
              <ListItem
                sx={{ flexDirection: "column", alignItems: "start" }}
                onClick={() =>
                  setActiveDropdown(activeDropdown === index ? null : index)
                }
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    cursor: "pointer",
                    color: "#000",
                    "&:hover": { color: "#f56960" },
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Typography>

                {link.dropdown && activeDropdown === index && (
                  <Box sx={{ pl: 3 }}>
                    {link.dropdown.map((item, subIndex) => (
                      <ListItem
                        key={subIndex}
                        onClick={() => setDrawerOpen(false)}
                      >
                        <Button component={Link} to={item.to} variant="text">
                          {item.label}
                        </Button>
                      </ListItem>
                    ))}
                  </Box>
                )}
              </ListItem> */}
            </Box>
          ))}
          <ListItem>
            <Button
              component={Link}
              to="/book"
              variant="contained"
              fullWidth
              onClick={handleModalToggle}
              sx={{
                backgroundColor: "#f56960",
                color: "white",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "blue" },
              }}
            >
              BOOK NOW
            </Button>
          </ListItem>
        </List>
      </Drawer>

      {/* Booking Modal */}

      <Modal open={modalOpen} onClose={handleModalToggle}>
        <Box
          component="form"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 200, md: 700 },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            background: "#efec96",
          }}
        >
          {/* <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
            <Typography color="white" variant="h5" sx={{ background: "#f56960", borderRadius: 1, width: "100%", py: 1, textAlign: "center" }}>Get a Free Enquiry</Typography>
           
          </Stack> */}

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              background: "#f56960",
              borderRadius: 1,
              width: {
                xs: "85%", 
                sm: "80%", 
                md: "95%", 
                lg: "95%",
              },
              py: 1,
              px: 2,
              mb: 2,
            }}
          >
            <Typography
              color="white"
              variant="h5"
              sx={{
                flexGrow: 1,
                textAlign: "center",
                fontSize: {
                  xs: "0.8rem", // Extra small screens
                  sm: "1.2rem", // Small screens
                  md: "1.5rem", // Medium screens
                  lg: "2rem", // Large screens
                },
              }}
            >
              Get a Free Enquiry
            </Typography>
            <Button
              onClick={handleModalToggle}
              startIcon={<Cancel />}
              sx={{
                color: "white",
                background: "transparent",
                border: "none",
                "&:hover": { background: "transparent" },
              }}
            />
          </Stack>

          <Grid container spacing={2}>
            {Object.keys(formData).map((field) => (
              <Grid item xs={12} sm={6} key={field}>
                <TextField
                  label={field.replace(/([A-Z])/g, " $1").trim()}
                  name={field}
                  size="small"
                  value={formData[field]}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ background: "white" }}
                  required
                />
              </Grid>
            ))}
          </Grid>
          <Stack direction="row" justifyContent="center" mt={3}>
            <Button
              type="submit"
              variant="contained"
              color="error"
              size="small"
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default PublicAppBar;

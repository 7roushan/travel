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
  Button,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import IMGLOGO from "../../assets/images/logo.png";
import TopAppBar from "../public/TopAppBar";
import BookingModal from "./BookingModal"; // Import modal component

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contactus", label: "Contact Us" },
];

const PublicAppBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          borderBottom: "1px solid #ddd",
        }}
      >
        <TopAppBar />
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 1,
          }}
        >
          <Box>
            <img
              src={IMGLOGO}
              alt="logo"
              style={{ height: isMobile ? "40px" : "50px" }}
            />
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center", gap: 4 }}>
              {navLinks.map((link, index) => (
                <Typography
                  key={index}
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
              ))}
            </Box>
          )}

          <Button
            variant="contained"
            onClick={() => setModalOpen(true)}
            sx={{
              backgroundColor: "#f56960",
              color: "white",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "blue" },
            }}
          >
            BOOK NOW
          </Button>

          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: "black" }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List sx={{ width: 250 }}>
          {navLinks.map((link, index) => (
            <ListItem key={index}>
              <Typography
                component={Link}
                to={link.to}
                sx={{
                  fontWeight: "bold",
                  color: "#000",
                  textDecoration: "none",
                  "&:hover": { color: "#f56960" },
                }}
              >
                {link.label}
              </Typography>
            </ListItem>
          ))}
          <ListItem>
            <Button
              variant="contained"
              fullWidth
              onClick={() => setModalOpen(true)}
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

      {/* Booking Modal Component */}
      <BookingModal open={modalOpen} handleClose={() => setModalOpen(false)} />
    </>
  );
};

export default PublicAppBar;

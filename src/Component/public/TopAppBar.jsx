import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  Select,
  MenuItem,
  Toolbar,
  Icon,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SearchIcon from "@mui/icons-material/Search";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

function TopAppBar() {
  const [scrolling, setScrolling] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.pageYOffset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const appBarStyles = {
    backgroundColor: "#032d4a",
    px: { xs: 1, sm: 2 },
    maxHeight: "55px",
  };

  const toolbarStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: { xs: "column", sm: "row" },
    gap: { xs: 1, sm: 0 },
    maxHeight: "30px",
  };

  const socialIconStyles = {
    fontSize: "small",
    color: "white",
    "&:hover": { color: "#D32F2F" },
  };

  return (
    <>
      {!scrolling && (
        <AppBar position="static" sx={{ ...appBarStyles }}>
          <Toolbar
            sx={{
              ...toolbarStyles,
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ display: { xs: "flex", sm: "flex", md: "flex" } }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 0, sm: 0 },
                }}
              >
                <IconButton sx={{ color: "white" }} title="Call Us">
                  <LocalPhoneIcon />
                </IconButton>
                <Typography variant="body2" sx={{ color: "white" }}>
                  +916386963004
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton sx={{ color: "white" }} title="Email Us">
                  <MailOutlineIcon />
                </IconButton>
                <Typography variant="body2" sx={{ color: "white" }}>
                  info@iconictravel.in
                </Typography>
              </Box>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
              }}
            >
              <TextField
                sx={{
                  background: "white",
                  borderRadius: "4px",
                  maxHeight: "30px",
                  width: { xs: "70%", sm: "170px" },
                }}
                size="small"
                label="Search"
                // InputLabelProps={{ variant:"filled" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon aria-label="search">
                        <SearchIcon />
                      </Icon>
                    </InputAdornment>
                  ),
                }}
              />

              <Select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                sx={{
                  background: "white",
                  borderRadius: "4px",
                  height: "30px",
                  width: { xs: "70%", sm: "100px" },
                }}
                size="small"
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="hi">Hindi</MenuItem>
                <MenuItem value="es">Spanish</MenuItem>
              </Select>
            </Stack>
            <Button
              variant="contained"
              size="small"
              sx={{
                socialIconStyles,
                display: { xs: "none" },
                backgroundColor: "#D32F2F",
                color: "white",
                // my: { xs: 2, sm: 2 },
                py: { xs: 0.5, sm: 0.3 },
                maxHeight: "30px",
                textTransform: "none",
                fontSize: "0.7rem",
                "&:hover": { backgroundColor: "#B71C1C" },
              }}
            >
              Pay now
            </Button>

            {/* Social Icons */}
            <Stack direction="row" spacing={1}>
              <IconButton sx={socialIconStyles}>
                <Facebook />
              </IconButton>
              <IconButton sx={socialIconStyles}>
                <Twitter />
              </IconButton>
              <IconButton sx={socialIconStyles}>
                <Instagram />
              </IconButton>
              <IconButton sx={socialIconStyles}>
                <LinkedIn />
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
}

export default TopAppBar;

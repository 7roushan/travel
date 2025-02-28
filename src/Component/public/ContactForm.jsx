import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitForm } from "../../redux/contactSlice";
import Map from "./Map";
import {
  TextField,
  Button,
  Container,
  Stack,
  Grid,
  Box,
  Typography,
  Link,
  IconButton,
  Snackbar,
} from "@mui/material";
import {
  LocationOn,
  Email,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
    destination: "",
  });
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!/^[A-Za-z\s]+$/.test(form.name)) {
      newErrors.name = "Name can only contain letters and spaces.";
    }
    if (!/^\d{10}$/.test(form.number)) {
      newErrors.number = "Mobile number must be exactly 10 digits.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!form.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }
    if (!form.destination.trim()) {
      newErrors.destination = "Destination cannot be empty.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      dispatch(submitForm(form));
      setOpenSnackbar(true);
      setForm({
        name: "",
        number: "",
        email: "",
        message: "",
        destination: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Box>
      <Container>
        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          {/* Left Section: Contact Form */}
          <Box sx={{ flex: 1, p: 2, my: "10" }}>
            <Typography color="error" fontWeight="bold">
              GET IN TOUCH
            </Typography>
            <Typography
              variant="h5"
              my="10"
              color="black"
              fontWeight="bold"
              gutterBottom
            >
              CONTACT US TO GET MORE INFO
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ maxWidth: 500 }}
            >
              <Grid container spacing={2}>
                {[
                  { label: "Your Name", name: "name" },
                  { label: "Your Mobile No", name: "number" },
                  { label: "Your Email", name: "email" },
                  { label: "Your Destination", name: "destination" },
                ].map(({ label, name }, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <TextField
                      fullWidth
                      label={label}
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      error={!!errors[name]}
                      helperText={errors[name]}
                      size="small"
                    />
                  </Grid>
                ))}

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Message or Query"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    error={!!errors.message}
                    helperText={errors.message}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="error"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* Right Section: Contact Info */}
          <Box sx={{ flex: 1, p: 2 }}>
            <Typography variant="h5" sx={{color:"black"}} fontWeight="bold">
              Need help? Feel free to contact us!
            </Typography>

            {[
              {
                icon: <LocationOn color="primary" fontSize="large" />,
                title: "Address",
                details:(
                  <Typography sx={{ color: "black" }}>
                    Office No 15, Bhawani Market, Sec 27, Noida, UP 201301
                  </Typography>
                ),
              },
              {
                icon: <Email color="primary" fontSize="large" />,
                title: "For Any Query:",
                details: "info@iconictravel.in",
                link: "mailto:info@iconictravel.in",
              },
              {
                icon: <Phone color="primary" fontSize="large" />,
                title: "Contact Number",
                details: "+91-8130883907",
                link: "tel:+918130883907",
              },
            ].map(({ icon, title, details, link }, index) => (
              <Grid
                container
                spacing={1}
                alignItems="center"
                sx={{ mt: 1 }}
                key={index}
              >
                <Grid item>{icon}</Grid>
                <Grid item xs={12} sm={8}>
                  <Typography variant="h6" sx={{color:"black"}}  fontWeight="bold">
                    {title}
                  </Typography>
                  {link ? (
                    <Link href={link} underline="hover">
                      {details}
                    </Link>
                  ) : (
                    <Typography variant="body1">{details}</Typography>
                  )}
                </Grid>
              </Grid>
            ))}

            {/* Social Media */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" sx={{color:"black"}}  fontWeight="bold">
                Follow us on social media:
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                {[
                  { icon: <Facebook />, link: "https://facebook.com" },
                  { icon: <Twitter />, link: "https://twitter.com" },
                  { icon: <Instagram />, link: "https://instagram.com" },
                  { icon: <LinkedIn />, link: "https://linkedin.com" },
                ].map(({ icon, link }, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      color: "#f56960",
                     
                      p: 1, 
                    }}
                    component="a"
                    href={link}
                    target="_blank"
                  >
                    {icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Box>
        </Stack>

        {/* Snackbar for Form Submission */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
          message="Form Submitted Successfully!"
        />
      </Container>
      <Map />
    </Box>
  );
};

export default ContactForm;

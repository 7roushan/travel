import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Stack,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { Cancel } from "@mui/icons-material";

const BookingModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    date: "",
    numberofpersons: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        component="form"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: 400, md: 600 },
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          background: "#efec96",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            background: "#f56960",
            borderRadius: 1,
            py: 1,
            px: 2,
            mb: 2,
          }}
        >
          <Typography
            color="white"
            variant="h5"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Get a Free Enquiry
          </Typography>
          <Button
            onClick={handleClose}
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
          <Button type="submit" variant="contained" color="error" size="small">
            Submit
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default BookingModal;

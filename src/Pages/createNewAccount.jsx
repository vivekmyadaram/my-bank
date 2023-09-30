import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  // Add validation for other fields here
});

function CreateNewAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [visibility, setVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const toggleVisibility = (field) => {
    setVisibility({ ...visibility, [field]: !visibility[field] });
  };

  const onSubmitForm = (data) => {
    // Simulate form submission for testing purposes
    console.log("Form Data: ", data);
    // Here, you can add your API call logic to send data to the server
    // Example:
    // fetch("YOUR_API_ENDPOINT", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data);
    // })
    // .catch(error => {
    //   console.error(error);
    // });
  };

  return (
    <Paper sx={{ p: 2 }} component="form" onSubmit={handleSubmit(onSubmitForm)}>
      <Stack direction="column" spacing={2}>
        <Stack
          direction="column"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Account
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          {/* Form fields */}
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              size="small"
              type="text"
              label="Name"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              size="small"
              type="text"
              label="Username"
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              size="small"
              type={visibility.password ? "text" : "password"}
              label="Password"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => toggleVisibility("password")}>
                      {visibility.password ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              size="small"
              type={visibility.confirmPassword ? "text" : "password"}
              label="Confirm Password"
              {...register("confirmPassword")}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => toggleVisibility("confirmPassword")}
                    >
                      {visibility.confirmPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          {/* Add other form fields here */}
        </Grid>
        <Box sx={{ textAlign: "right" }}>
          <Button type="submit" variant="contained">
            Create
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}

export default CreateNewAccount;

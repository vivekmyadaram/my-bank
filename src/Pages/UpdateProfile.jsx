import { yupResolver } from "@hookform/resolvers/yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
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
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as Yup from "yup";
import http from "../utils/http";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  // password: Yup.string().required("Password is required"),
  email: Yup.string().required("EmailID is required"),
  // phone: Yup.string().required("Name is required"),
  // address: Yup.string().required("Address required"),
});

function RequestForAccountUpdate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [visibility, setVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const toggleVisibility = (field) => {
    setVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const formFields = [
    { label: "Name", name: "name" },
    { label: "Username", name: "username" },

    { label: "Email", name: "email", type: "email" },
    { label: "dob", name: "dob", type: "date" },
    { label: "Mobile", name: "phone" },
    { label: "Address", name: "address" },
    { label: "State", name: "state" },
    { label: "Country", name: "country" },
    { label: "Doc Proof", name: "proof" },
    { label: "Doc Proof Number", name: "proofDocNo" },
  ];

  const onSubmitForm = async (data) => {
    console.log(data);
    try {
      await http.post("/user-requests", data);
      toast.success("Your Request Accepted!");
    } catch (error) {
      toast.error(JSON.stringify(error?.message));
    }
    reset();
  };

  return (
    <Paper
      sx={{ p: 2, minHeight: "100%" }}
      component="form"
      onSubmit={handleSubmit(onSubmitForm)}
    >
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
            Request for Update
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          {formFields.map((field, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <TextField
                fullWidth
                size="small"
                InputLabelProps={{ shrink: true }}
                type={field.type || "text"}
                label={field.name === "proof" ? "" : field.label}
                {...register(field.name)}
                error={!!errors[field.name]}
                helperText={errors[field.name]?.message}
                InputProps={
                  field.name.includes("assword")
                    ? {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => toggleVisibility(field.name)}
                            >
                              {visibility[field.name] ? (
                                <VisibilityIcon />
                              ) : (
                                <VisibilityOffIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }
                    : undefined
                }
              />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "right" }}>
          <Button type="submit" variant="contained">
            send request
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}

export default RequestForAccountUpdate;

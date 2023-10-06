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
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { registrationSuccuss } from "../Store/accountHolderSlice";
import { useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  email: Yup.string().required("EmailID is required"),
  phone: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address required"),
  state: Yup.string().required("State required"),
  country: Yup.string().required("Country is required"),
  proofDocNo: Yup.string().required("ProofDoc Num is required"),
});

function CustomerRegistration() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const num19 = useSelector((state) => state.bankUsers);
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
    { label: "User Name", name: "username" },
    {
      label: "Password",
      name: "password",
      type: visibility.password ? "text" : "password",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: visibility.confirmPassword ? "text" : "password",
    },
    { label: "Email", name: "email", type: "email" },
    { label: "dob", name: "dob", type: "date" },
    { label: "Mobile", name: "phone" },
    { label: "Address", name: "address" },
    { label: "State", name: "state" },
    { label: "Country", name: "country" },
    { label: "Account Type", name: "accountType" },
    { label: "InitialDeposit", name: "initialDeposit" },
    { label: "Doc Proof", name: "documentProof" },
    { label: "Doc Proof num19ber", name: "proofDocNo" },
  ];

  const onSubmitForm = async (data) => {
    const apiUrl = "http://localhost:8080/user-register";
    try {
      const response = await axios.post(apiUrl, data);
      console.log("Data sent successfully:", response.data?.accountnum19ber);
      dispatch(addCustomer(response?.data));
      dispatch(registrationSuccuss(response?.data?.accountNumber));
      toast.success("user created!");
      navigate("/register-succuss");
      if (!response.ok) {
        throw new Error("Post request failed");
      }
    } catch (error) {
      console.error("Error sending data:", error);
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
            Create Account
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          {formFields.map((field, index) => (
            <Grid
              item
              xs={12}
              sm={
                field?.name === "proofDocNo"
                  ? 6
                  : field?.name === "proof"
                  ? 6
                  : 3
              }
              key={index}
            >
              <TextField
                fullWidth
                size="small"
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
            Create
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}

export default CustomerRegistration;
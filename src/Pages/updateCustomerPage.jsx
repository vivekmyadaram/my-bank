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
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { json, useParams } from "react-router-dom";
import * as Yup from "yup";
import { customerEdit } from "../Store/accountHolderSlice";
import toast from "react-hot-toast";
import axios from "axios";

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

function UpdateCustomerAccount() {
  const { accountNumber } = useParams();
  const { editedUser } = useSelector((state) => state.bankUsers);
  // const [update, setUpdate] = useState(editedUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: editedUser,
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
    { label: "Account Type", name: "accType" },
    { label: "InitialDeposit", name: "initialDeposit" },
    { label: "Doc Proof", name: "proof" },
    { label: "Doc Proof Number", name: "proofDocNo" },
  ];

  // useEffect(() => {
  //   reset({}); // Reset the form after component re-renders
  // }, [update]); // Trigger useEffect whenever `editedUser` changes

  const onSubmitForm = async (data) => {
    console.log(data?.accountNumber);
    try {
      const response = await axios.put(
        `http://localhost:8080/user/${data?.accountNumber}`,
        { data }
      );
      toast.success(
        `User AccNo:${data?.accountNumber} details updated succussfully!`
      );

      if (!response.ok) {
        throw new Error("Post request failed");
      }
    } catch (error) {
      console.log(error);
    }
    reset();
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
            Edit Account
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
                InputLabelProps={{ shrink: true }}
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
            Update
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}

export default UpdateCustomerAccount;

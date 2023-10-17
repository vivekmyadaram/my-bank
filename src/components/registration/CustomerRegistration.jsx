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
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as Yup from "yup";
import http from "../../utils/http";

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
  documentProof: Yup.string().required("Document type is required"),
  proofDocNo: Yup.string().required("ProofDoc Num is required"),
  dob: Yup.date().required("Date of birth is required"),
  accountType: Yup.string().required("Account type is required"),
  initialDeposit: Yup.string().required("Initial deposite is required"),
});

function CustomerRegistration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

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
    { label: "Email", name: "email", type: "email" },
    { label: "dob", name: "dob", type: "date" },
    { label: "Mobile", name: "phone" },
    { label: "Address", name: "address" },
    { label: "State", name: "state" },
    { label: "Country", name: "country" },
    { label: "Account Type", name: "accountType" },
    { label: "InitialDeposit", name: "initialDeposit" },
    { label: "Doc Proof", name: "documentProof" },
    { label: "Doc Proof number", name: "proofDocNo" },
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
  ];

  const onSubmitForm = async (data) => {
    console.log(data);
    try {
      const res = await http.post("/user-register", data);
      toast.success("Account created successfully");
      localStorage.setItem("access_token", res.data.token);
      window.location.href = "/";
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
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
        <Grid container>
          {formFields.map((field, index) => (
            <Grid item xs={12} sm={6} key={index} style={{ padding: 10 }}>
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
            Submit
          </Button>
        </Box>
      </Stack>
    </form>
  );
}

export default CustomerRegistration;

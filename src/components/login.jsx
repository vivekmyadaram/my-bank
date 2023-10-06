import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const [role, setRole] = useState("user");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { username, password } = data;
      const response = await axios.post(`http://localhost:8080/login`, {
        username,
        password,
      });
      console.log(response, "vivek");
      if (response?.data?.personExists) {
        const token = response.data.token;
        localStorage.setItem("token", token); // Store the token in local storage
        navigate("/");
        toast.success("User login Succussfully!");
      } else {
        toast.error("Wrong Credentials!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ flexGrow: 1, padding: "16px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper style={{ padding: "16px", textAlign: "center" }}>
            <Typography variant="h5" gutterBottom>
              {role === "user" ? "User Login" : "Admin Login"}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <RadioGroup
                aria-label="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                row
                style={{ justifyContent: "center" }}
              >
                <FormControlLabel
                  value="user"
                  control={<Radio />}
                  label="User"
                />
                <FormControlLabel
                  value="admin"
                  control={<Radio />}
                  label="Admin"
                />
              </RadioGroup>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register("username", { required: "Username is required" })}
                error={!!errors.username}
                helperText={errors.username?.message}
              />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                {...register("password", { required: "Password is required" })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </form>
            <Stack direction="row" justifyContent="flex-end" spacing={2} m={2}>
              <Link
                to="/forgot-password"
                style={{
                  textDecoration: "none",
                  color: "#007bff",
                  cursor: "pointer",
                }}
              >
                <Typography variant="inherit">Forgot password</Typography>
              </Link>
              <Link
                to={`/new-user`}
                style={{
                  textDecoration: "none",
                  color: "#007bff",
                  cursor: "pointer",
                }}
              >
                <Typography variant="inherit">
                  {role === "user" && "New User? Create Account"}
                </Typography>
              </Link>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;

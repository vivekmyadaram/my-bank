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

const Login = () => {
  const [role, setRole] = useState("user");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle login logic based on the selected role (user or admin)
    console.log("Logging in as:", data);
    console.log(role, "role");
    if (data.username === "vivek" && data.password === "vivek19") {
      toast.success("logged in succussfully");
      navigate("/customers");
    } else {
      toast.error("username and password incorrect");
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
                to={`/create-${role}`}
                style={{
                  textDecoration: "none",
                  color: "#007bff",
                  cursor: "pointer",
                }}
              >
                <Typography variant="inherit">
                  New {role === "user" ? "User" : "Admin"}? Create Account
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

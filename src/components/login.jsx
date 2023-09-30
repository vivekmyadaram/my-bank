import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const Login = () => {
  const [role, setRole] = useState("user"); // Default role is set to 'user'

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic based on the selected role (user or admin)
    console.log(`Logging in as ${role}`);
  };

  return (
    <div style={{ flexGrow: 1, padding: "16px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper style={{ padding: "16px", textAlign: "center" }}>
            <Typography variant="h5" gutterBottom>
              {role === "user" ? "User Login" : "Admin Login"}
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
              />
              <RadioGroup
                aria-label="role"
                name="role"
                value={role}
                onChange={handleRoleChange}
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;

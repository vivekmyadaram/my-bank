import React, { useState } from "react";
import {
  FormControlLabel,
  Checkbox,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsAdmin(event.target.checked);
  };

  return (
    <div style={{ flexGrow: 1, padding: "16px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper style={{ padding: "16px", textAlign: "center" }}>
            <Typography variant="h5" gutterBottom>
              Login
            </Typography>
            <form>
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
              <FormControlLabel
                control={
                  <Checkbox checked={isAdmin} onChange={handleCheckboxChange} />
                }
                label="Login as Admin"
              />
              <Button variant="contained" color="primary" fullWidth>
                {isAdmin ? "Login as Admin" : "Login as User"}
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;

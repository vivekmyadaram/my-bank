import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function LoginAccount() {
  const [input, setInput] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Typography sx={{ mb: 2, textAlign: "center" }} variant="subtitle1">
        LogIn To Account
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              size="small"
              name="email"
              label="Email"
              type="text"
              inputProps={{
                minLength: 3,
              }}
              onChange={handleChange}
              value={input.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              size="small"
              name="password"
              inputProps={{
                pattern: "[0-9]{10}",
                title: "Mobile number must be 10 digits",
              }}
              label="Password"
              onChange={handleChange}
              value={input.password}
            />
          </Grid>
        </Grid>
        <Box textAlign="right" variant="container">
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            LogIn
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default LoginAccount;

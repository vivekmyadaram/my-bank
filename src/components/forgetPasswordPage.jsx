import React, { useState } from "react";
import { TextField, Button, Card, CardContent, Box } from "@mui/material";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can implement the logic to send the reset password link
    // For example, you can call an API to send an email with a reset password link.
    // You can add your API call logic here.
    console.log("Reset password link sent to: " + email);
    // Optionally, you can redirect the user to a confirmation page.
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card
        sx={{
          width: 500,
        }}
      >
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <Button variant="contained" color="primary" type="submit">
              Send Reset Link
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ForgotPassword;

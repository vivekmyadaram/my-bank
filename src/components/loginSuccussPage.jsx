import React from "react";
import { Box, Typography } from "@mui/material";

const RegistrationSuccess = () => {
  const accountNumber = "123456789";
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
    >
      <Typography variant="h3" gutterBottom>
        Registration Successfully Completed
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        Your Account Number is: {accountNumber}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Now you can log in using your given username and password.
      </Typography>
    </Box>
  );
};

export default RegistrationSuccess;

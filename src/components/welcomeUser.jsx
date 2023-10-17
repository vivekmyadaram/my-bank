import React, { useContext, useState } from "react";
import { Paper, Avatar, Typography } from "@mui/material";
import { UserContext } from "../app";

const paperStyle = {
  padding: "20px",
  textAlign: "center",
  maxWidth: "100%",
  maxHeight: "100%",
  margin: "20px auto",
};

const avatarStyle = {
  width: "100px",
  height: "100px",
  marginBottom: "20px",
};

function WelcomeComponent() {
  const user = useContext(UserContext);

  return (
    <Paper style={paperStyle} elevation={0}>
      <Typography variant="h5" component="div" gutterBottom>
        Welcome, {user.username}!
      </Typography>
      <Typography variant="body1">
        Have nice day. We're glad to have you with us!
      </Typography>
    </Paper>
  );
}

export default WelcomeComponent;

import React from "react";
import { Avatar, Grid, Paper, Typography } from "@mui/material";

const formFields = [
  { label: "Name", name: "name" },
  { label: "Username", name: "username" },
  { label: "Password", name: "password" },
  { label: "Confirm Password", name: "confirmPassword" },
  { label: "Email", name: "email", type: "email" },
  { label: "dob", name: "dob", type: "date" },
  { label: "Mobile", name: "phone" },
  { label: "Address", name: "address" },
  { label: "State", name: "state" },
  { label: "Country", name: "country" },
  { label: "Account Type", name: "accType" },
  { label: "Initial Deposit", name: "initialDeposit" },
  { label: "Doc Proof", name: "proof" },
  { label: "Doc Proof Number", name: "proofDocNo" },
];

const AdminProfileDisplay = () => {
  return (
    <Paper
      elevation={3}
      spacing={2}
      sx={{
        p: 8,
        m: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar alt="" src="" style={{ height: 100, width: 100 }} />
      <Grid container spacing={2}>
        {formFields.map((field) => (
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
            xs={12}
            sm={6}
            md={6}
            key={field.name}
          >
            <Typography variant="subtitle1" color="textSecondary">
              {field.label}
            </Typography>
            <Typography variant="body1">{field.label}</Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default AdminProfileDisplay;

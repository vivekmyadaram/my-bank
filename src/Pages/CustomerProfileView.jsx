import { Avatar, Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../app";

const formFields = [
  { label: "Name", name: "name" },
  { label: "Username", name: "username" },
  { label: "Email", name: "email", type: "email" },
  { label: "dob", name: "dob", type: "date" },
  { label: "Mobile", name: "phone" },
  { label: "Address", name: "address" },
  { label: "State", name: "state" },
  { label: "Country", name: "country" },
  { label: "Account Type", name: "accountType" },
  { label: "accountNumber", name: "accountNumber" },
  { label: "Initial Deposit", name: "initialDeposit" },
  { label: "Doc Proof", name: "documentProof" },
  { label: "Doc Proof Number", name: "proofDocNo" },
];

const CustomerProfileView = () => {
  const user = useContext(UserContext);

  return (
    <Box
      style={{
        maxWidth: 800,
        margin: "auto",
      }}
    >
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {formFields.map((field) => (
          <>
            <Grid item xs={4}>
              <Typography
                sx={{ color: "blue" }}
                variant="subtitle1"
                color="textSecondary"
              >
                {field.label}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              :
            </Grid>
            <Grid item xs={7}>
              <Typography variant="h6">{user && user[field?.name]}</Typography>
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  );
};

export default CustomerProfileView;

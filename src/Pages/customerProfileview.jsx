import React, { useEffect, useState } from "react";
import { Avatar, Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const formFields = [
  { label: "Name", name: "name" },
  { label: "Username", name: "username" },
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password" },
  { label: "dob", name: "dob", type: "date" },
  { label: "Mobile", name: "phone" },
  { label: "Address", name: "address" },
  { label: "State", name: "state" },
  { label: "Country", name: "country" },
  { label: "Account Type", name: "accountType" },
  { label: "accountNumber", name: "accountNumber" },
  { label: "Initial Deposit", name: "initialDeposit" },
  // { label: "IFSC Code", name: "ifsc" },
  // { label: "Branch Name", name: "branchName" },
  { label: "Doc Proof", name: "documentProof" },
  { label: "Doc Proof Number", name: "proofDocNo" },
];

const CustomerProfileDisplay = () => {
  const { accountNumber: uid } = useParams();
  const bankUsers = useSelector((state) => state.bankUsers.bankUsersList);
  const [profile, setProfile] = useState();

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(`http://localhost:8080/user/${uid}`);
        setProfile(response?.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [uid]);
  console.log(profile);
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
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-evenly"
              spacing={3}
            >
              <Typography
                variant="subtitle1"
                color="textSecondary"
                style={{ width: 100, textAlign: "right" }}
              >
                {field.label}:
              </Typography>

              <Typography
                variant="body1"
                style={{ width: 100, textAlign: "left" }}
              >
                {/* {profile[field.name]} */}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default CustomerProfileDisplay;

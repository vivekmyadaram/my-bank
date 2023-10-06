import { Grid, Paper } from "@mui/material";
import React from "react";
import CustomerRegistration from "./customerRegistrationPage";
import image from "/bank.jpeg";

function UserAccountRegistration() {
  return (
    <div style={{ flexGrow: 1, padding: "16px" }}>
      <Grid container spacing={2} sx={{ minHeight: 550 }}>
        {/* Left Grid */}
        <Grid item xs={12} sm={4}>
          <Paper
            style={{ padding: "16px", textAlign: "center", height: "100%" }}
          >
            <img
              src={image}
              alt="Image 1"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Paper>
        </Grid>
        {/* Right Grid */}
        <Grid item xs={12} sm={8}>
          <Paper
            style={{
              padding: "16px",
              textAlign: "center",
              height: "100%",
              overflow: "scroll",
            }}
          >
            {/* <Login /> */}
            <CustomerRegistration />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserAccountRegistration;

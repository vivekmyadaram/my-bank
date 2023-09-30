import React from "react";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import SideNav from "../Pages/side-nav";

const MainContent = () => {
  return (
    <div style={{ height: "90vh", overflow: "auto", marginTop: 3 }}>
      <Grid container spacing={2}>
        {/* Left Grid (3 columns) for Navigation Links */}
        <Grid item xs={2}>
          <Paper elevation={3} style={{ minHeight: 480 }}>
            <Typography variant="subtitle1">
              <marquee behavior="" direction="right">
                any updates
              </marquee>
            </Typography>
            <SideNav />
          </Paper>
        </Grid>
        {/* Right Grid (9 columns) for Main Content */}
        <Grid item xs={9}>
          {/* Main content goes here */}
          <Typography variant="h4">Main Content</Typography>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed
            neque erat. Integer eget tincidunt arcu. Quisque vel ligula elit.
            Vestibulum ullamcorper, nulla nec aliquet viverra, justo turpis
            bibendum massa, sit amet iaculis urna purus eu justo.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar (10% height) */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Logo Name</Typography>
        </Toolbar>
      </AppBar>
      {/* Content Area (90% height) */}
      <MainContent />
    </div>
  );
};

export default App;

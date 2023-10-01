import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";
import MenuAppBar from "./components/appbar";
import SideNav from "./components/side-nav";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";

const MainContent = () => {
  return (
    <Grid container>
      {/* Left Grid 2 columns) for Navigation Links */}
      <Grid item xs={2}>
        <Paper
          elevation={1}
          style={{
            height: 530,
          }}
        >
          <Typography variant="subtitle1">
            <marquee behavior="" direction="left">
              Recent updates from bank
            </marquee>
          </Typography>
          <SideNav />
        </Paper>
      </Grid>
      {/* Right Grid (9 columns) for Main Content */}
      <Grid item xs={10}>
        {/* Main content goes here */}
        <Paper elevation={0} style={{ height: 530, overflow: "auto" }}>
          <Outlet />
        </Paper>
      </Grid>
    </Grid>
  );
};

function App() {
  return (
    <Stack direction="column" style={{ padding: "0px", margin: "0px" }}>
      <MenuAppBar />
      <MainContent />
    </Stack>
  );
}

export default App;

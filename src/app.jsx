import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MenuAppBar from "./components/appbar";
import SideNav from "./components/sideNavbar";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import "./app.css";
import { useEffect } from "react";
import http from "./utils/http";

const MainContent = () => {
  useEffect(() => {
    http
      .get("/profile")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid container>
      <Grid item xs={2}>
        <Paper
          elevation={1}
          style={{
            height: 530,
          }}
        >
          <Typography variant="subtitle1">
            <marquee direction="left">Recent updates from bank</marquee>
          </Typography>
          <SideNav />
        </Paper>
      </Grid>
      <Grid item xs={10}>
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

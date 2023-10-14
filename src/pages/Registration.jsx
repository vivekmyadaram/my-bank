import { Grid, Paper } from "@mui/material";
import CustomerRegistration from "../components/registration/CustomerRegistration";
import image from "/bank.jpg";

function Registration() {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={12} sm={5}>
        <Paper
          style={{
            height: "100%",
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></Paper>
      </Grid>
      <Grid item xs={12} sm={7}>
        <Paper
          style={{
            height: "100%",
            overflowY: "auto",
            padding: "40px",
          }}
        >
          <CustomerRegistration />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Registration;

import { Grid, Paper } from "@mui/material";
import image from "/bank.jpeg";
import Login from "../components/login";

function AccountLoginPage() {
  return (
    <div style={{ flexGrow: 1, padding: "16px" }}>
      <Grid container spacing={2} sx={{ minHeight: 550 }}>
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
          <Paper
            style={{ padding: "16px", textAlign: "center", height: "100%" }}
          >
            <Login />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default AccountLoginPage;

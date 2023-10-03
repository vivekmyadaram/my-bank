import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

const RegistrationDoneShow = () => {
  const { accountNumber } = useSelector(
    (state) => state?.bankUsers?.registrationDone
  );
  const data = useSelector((state) => state.bankUsers);
  console.log(data, "succuss-page");
  return (
    <Paper elevation={3} style={styles.paper}>
      <Typography variant="h4">Account Created Successfully!</Typography>
      <Typography variant="body1" color="blue">
        Your account number is: {accountNumber}
      </Typography>
    </Paper>
  );
};

const styles = {
  paper: {
    padding: "20px",
    maxWidth: "400px",
    margin: "0 auto",
    marginTop: "50px",
    textAlign: "center",
  },
};

export default RegistrationDoneShow;

import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../utils/http";

const data = [
  { id: "firstName", name: "Name" },
  { id: "accountNumber", name: "Account Number" },
  { id: "loanAmount", name: "Loan Amount" },
  { id: "loanDuration", name: "Loan Duration" },
  { id: "loanApplyDate", name: "Date" },
  { id: "loanType", name: "Loan Type" },
];

const LoanInfo = () => {
  const [cust, setCust] = useState();
  const { accountNumber } = useParams();
  useEffect(() => {
    (async function () {
      try {
        const response = await http.get(`/loan/${accountNumber}`);
        setCust(response?.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <Grid item xs={5}>
              <Typography variant="body1" sx={{ color: "blue" }}>
                {item.name}:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              :
            </Grid>
            <Grid item xs={5}>
              {cust && (
                <Typography variant="h6">
                  {item.name == "Date"
                    ? new Date(cust[item?.id]).toDateString()
                    : cust[item?.id]}
                </Typography>
              )}
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Paper>
  );
};

export default LoanInfo;

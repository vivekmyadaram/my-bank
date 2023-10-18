import {
  Box,
  Button,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import http from "../utils/http";

function AmountWithdrawal() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitForm = async (data) => {
    try {
      const response = await http.post("/withdrawal", data);
      console.log("Data sent successfully:", response.data);
      toast.success(
        `Amount deposited to your account Rs:${response?.data?.depositAmount}`
      );
    } catch (error) {
      console.error("Error sending data:", error);
    }
    reset();
  };

  return (
    <Paper
      sx={{ p: 2, m: 3 }}
      component="form"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <Stack direction="column" spacing={2} margin={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <TextField
              size="small"
              fullWidth
              type="text" // Using type="text" instead of type="number" for account numbers
              label="Account Number"
              {...register("accountNumber", {
                required: "Account Number is required",
                pattern: {
                  value: /^[0-9]{11}$/,
                  message: "Enter a valid 11-digit account number",
                },
              })}
              error={!!errors.accountNumber}
              helperText={errors.accountNumber?.message}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              size="small"
              label="Select Account Type"
              fullWidth
              defaultValue="savings"
              select
              {...register("accountType", {
                required: "Account Type is required",
              })}
              error={!!errors.accType}
              helperText={errors.accType?.message}
            >
              <MenuItem value="savings">Savings</MenuItem>
              <MenuItem value="current">Current</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              size="small"
              fullWidth
              type="number"
              label="Withdrawal Amount"
              {...register("withdrawAmount")}
              error={!!errors.withdrawAmount}
              helperText={errors.withdrawAmount?.message}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              size="small"
              type="tel"
              fullWidth
              label="withdrawal Mobile"
              {...register("mobileNumber", {
                required: "Mobile Number is required",
                pattern: {
                  value: /^[0-9]{10}$/, // Regex pattern for a 10-digit mobile number
                  message: "Enter a valid 10-digit mobile number",
                },
              })}
              error={!!errors.withdrawalMobile}
              helperText={errors.withdrawalMobile?.message}
            ></TextField>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "right" }}>
          <Button type="submit" variant="contained">
            Withdraw Amount
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}

export default AmountWithdrawal;

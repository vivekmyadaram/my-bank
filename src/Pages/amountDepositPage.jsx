import React from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Stack,
  Box,
  Button,
  Paper,
  MenuItem,
  Typography,
  Grid,
} from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AmountDeposit() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const url = "http://localhost:8080/deposit";
    console.log(data);
    try {
      const response = await axios.post(url, data);
      console.log("Data sent successfully:", response.data);
      toast.success(
        `Amount deposited to your account Rs:${response?.data?.depositAmount}`
      );
      if (!response.ok) {
        throw new Error("Post request failed");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
    reset();
  };

  return (
    <Paper
      sx={{ p: 2, m: 3 }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
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
            label="Deposit Amount"
            {...register("depositAmount")}
            error={!!errors.depositAmount}
            helperText={errors.depositAmount?.message}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            size="small"
            type="tel"
            fullWidth
            label="Depositor Mobile"
            {...register("depositorMobile", {
              required: "Mobile Number is required",
              pattern: {
                value: /^[0-9]{10}$/, // Regex pattern for a 10-digit mobile number
                message: "Enter a valid 10-digit mobile number",
              },
            })}
            error={!!errors.depositorMobile}
            helperText={errors.depositorMobile?.message}
          ></TextField>
        </Grid>
      </Grid>
      <Stack direction="column" spacing={2} margin={2}>
        <Box sx={{ textAlign: "right" }}>
          <Button type="submit" variant="contained">
            Deposit Amount
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}

export default AmountDeposit;

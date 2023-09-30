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
} from "@mui/material";
import toast from "react-hot-toast";

function AmountDeposit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/deposit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success(
          `RS ${data?.depositAmount} Deposited to Your Account Successfully`
        );
      } else {
        throw new Error("Post request failed");
      }
    } catch (error) {
      toast.error(JSON.stringify(error.message));
    }
  };

  return (
    <Paper sx={{ p: 2 }} component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing={2} margin={2}>
        <TextField
          size="small"
          label="Select Account Type"
          defaultValue="savings"
          select
          {...register("accType", { required: "Account Type is required" })}
          error={!!errors.accType}
          helperText={errors.accType?.message}
        >
          <MenuItem value="savings">Savings</MenuItem>
          <MenuItem value="current">Current</MenuItem>
        </TextField>

        <TextField
          size="small"
          type="number"
          label="Deposit Amount"
          {...register("depositAmount", {
            required: "Deposit Amount is required",
            valueAsNumber: true,
            validate: (value) =>
              parseFloat(value) > 0 ||
              "Deposit Amount must be a positive number",
          })}
          error={!!errors.depositAmount}
          helperText={errors.depositAmount?.message}
        />
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

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function PaymentForm({ state }) {
  const { input, setInput } = state;
  const handleFeildChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Loan Details
      </Typography>

      <FormControl sx={{ width: "200px", mb: 3 }}>
        <InputLabel id="demo-simple-select-label">Select Loan Type</InputLabel>
        <Select
          size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={input.loanType}
          label="Select Loan Type"
          name="loanType"
          onChange={handleFeildChange}
        >
          <MenuItem value="EducationLoan">Educational</MenuItem>
          <MenuItem value={20}>Personal/Home</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={handleFeildChange}
            name="loanAmount"
            value={input.loanAmount}
            size="small"
            required
            id="loanAmount"
            label="Loan Amount"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="loanApplyDate"
            value={input.loanApplyDate}
            onChange={handleFeildChange}
            size="small"
            required
            type="date"
            id="loanApplyDate"
            label="Loan Apply Date "
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            value={input.rateOfIntrest}
            name="rateOfIntrest"
            onChange={handleFeildChange}
            size="small"
            required
            id="rateOfIntrest"
            label="Rate of Intrest"
            type="number"
            disabled={true}
            fullWidth
            autoComplete="cc-num"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            value={input.loanDuration}
            name="loanDuration"
            onChange={handleFeildChange}
            size="small"
            required
            id="loanDuration"
            label="Duration Of Loan"
            type="number"
            placeholder="Up to 60 months"
            fullWidth
            autoComplete="cc-num"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            value={input.annualIncome}
            name="annualIncome"
            onChange={handleFeildChange}
            size="small"
            required
            id="annualIncome"
            label="Annual Income"
            type="text"
            fullWidth
            autoComplete="annualIncome"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="course"
            value={input.course}
            onChange={handleFeildChange}
            size="small"
            required
            id="course"
            label="Course"
            type="text"
            fullWidth
            autoComplete="course"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="courseFee"
            value={input.courseFee}
            onChange={handleFeildChange}
            size="small"
            required
            id="courseFee"
            label="Course Fee"
            type="text"
            fullWidth
            autoComplete="courseFee"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="fatherName"
            value={input.fatherName}
            onChange={handleFeildChange}
            size="small"
            required
            id="fatherName"
            label="Father Name"
            type="text"
            fullWidth
            autoComplete="fatherName"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="fatherOccupation"
            value={input.fatherOccupation}
            onChange={handleFeildChange}
            size="small"
            required
            id="fatherOccupation"
            label="Father Occupation"
            type="text"
            fullWidth
            autoComplete="fatherOccupation"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="companyName"
            value={input.companyName}
            onChange={handleFeildChange}
            size="small"
            required
            id="Company"
            label="Company Name"
            type="text"
            fullWidth
            autoComplete="companyName"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            value={input.designation}
            onChange={handleFeildChange}
            size="small"
            required
            id="designation"
            name="designation"
            label="Designation"
            type="text"
            fullWidth
            autoComplete="designation"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="experiance"
            value={input.experiance}
            onChange={handleFeildChange}
            size="small"
            required
            id="experiance"
            label="Experiance"
            type="text"
            fullWidth
            autoComplete="exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            onChange={handleFeildChange}
            value={input.totalExperiance}
            size="small"
            required
            id="totalExperiance"
            name="totalExperiance"
            label="Total Experiance"
            type="text"
            fullWidth
            autoComplete="totalExp"
            variant="standard"
          />
        </Grid>
      </Grid>
    </>
  );
}

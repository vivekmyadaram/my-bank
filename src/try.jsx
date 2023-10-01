import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const steps = ["Personal Info", "Loan Info", "Review"];

const personalFields = [
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },
  { name: "address", label: "Address" },
  { name: "city", label: "City" },
  { name: "state", label: "state" },
  { name: "country", label: "Country" },
  { name: "zip", label: "Zip" },
  { name: "fatherName", label: "Father Name" },
  { name: "fatherOccupation", label: "Father Occupation" },
];

const loanFields = [
  { name: "loanType", label: "Loan Type", type: "select" },
  { name: "loanAmount", label: "Loan Amount", type: "number" },
  { name: "loanApplyDate", label: "Apply Date", type: "date" },
  { name: "rateOfInterest", label: "Rate", type: "number" },
  { name: "loanDuration", label: "Duration" },
  { name: "annualIncome", label: "Annual Income", type: "number" },
  { name: "course", label: "Course Name" },
  { name: "courseFee", label: "Course Fee" },
  { name: "companyName", label: "Company Name" },
  { name: "designation", label: "Designation" },
  { name: "experience", label: "Experience" },
  { name: "totalExperience", label: "Total Experience" },
];

const reviewFields = {
  conditions: false,
};

export default function LoanApply() {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [loanInput, setLoanInput] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    // resolver: yupResolver(schema),
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmitForm = (data) => {
    // dispatch(applyLoan(loanInput));
    console.log(data);
  };

  const handleFieldChange = (e) => {
    setLoanInput({ ...loanInput, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Box sx={{ p: 8 }}>
        <Typography variant="h4" align="center">
          Apply Loan
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Your Loan Application Submitted Successfully
            </Typography>
            <Typography variant="subtitle1">
              Your Loan Processing number is #2001539. We have initiated your
              Loan and will send you an update to your registered email address.
            </Typography>
          </Paper>
        ) : (
          <Box sx={{ p: 3 }}>
            {activeStep === 0 && (
              <AddressForm register={register} errors={errors} />
            )}
            {activeStep === 1 && (
              <PaymentForm register={register} errors={errors} />
            )}
            {activeStep === 2 && <Review watch={watch} />}
            <Stack direction="row" justifyContent="flex-end" spacing={2} mt={3}>
              {activeStep !== 0 && (
                <Button variant="outlined" onClick={handleBack}>
                  Back
                </Button>
              )}
              {activeStep < steps.length - 1 && (
                <Button variant="contained" onClick={handleNext}>
                  Next
                </Button>
              )}
              {activeStep === steps.length - 1 && (
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              )}
            </Stack>
          </Box>
        )}
      </Box>
    </form>
  );
}

function AddressForm({ register, errors }) {
  return (
    <Paper elevation={9} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Customer Info
      </Typography>
      <Grid container spacing={1}>
        {personalFields.map((field) => (
          <Grid item xs={12} sm={4}>
            <TextField
              label={field?.label}
              variant="outlined"
              fullWidth
              size="small"
              margin="normal"
              {...register(field?.name)}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

function PaymentForm({ register, errors }) {
  return (
    <Paper elevation={9} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Loan Info
      </Typography>
      <Grid container spacing={1}>
        {loanFields.map((field) => (
          <Grid item xs={12} sm={3}>
            <TextField
              label={field?.type === "date" ? "" : field.label}
              type={field.type ? field.type : ""}
              variant="outlined"
              fullWidth
              size="small"
              margin="normal"
              {...register(field?.name)}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

function Review({ watch }) {
  return (
    <Paper elevation={9} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Review Your Application
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={1} sx={{ p: 3, minHeight: 280 }}>
            {personalFields.map((field) => (
              <Stack
                key={field.name}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Typography variant="inherit" gutterBottom>
                  {field.label}:
                </Typography>
                <Typography variant="subtitle1">
                  {watch(field?.name)}
                </Typography>
              </Stack>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={1} sx={{ p: 3, minHeight: 280 }}>
            {loanFields.map((field) => (
              <Stack
                key={field.name}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Typography variant="inherit" gutterBottom>
                  {field.label}:
                </Typography>
                <Typography variant="subtitle1">
                  {watch(field?.name)}
                </Typography>
              </Stack>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}

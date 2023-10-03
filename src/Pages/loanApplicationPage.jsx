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
  Checkbox,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const steps = ["Personal Info", "Loan Info", "Review"];

const personalFields = [
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },
  { name: "address", label: "Address" },
  { name: "city", label: "City" },
  { name: "state", label: "state" },
  { name: "country", label: "Country" },
  { name: "pinCode", label: "Pin Code" },
  { name: "fatherName", label: "Father Name" },
  { name: "fatherOccupation", label: "Father Occupation" },
];

// const personalFieldsSchema = Yup.object().shape({
//   firstName: Yup.string().required("First Name is required"),
//   lastName: Yup.string().required("Last Name is required"),
//   address: Yup.string().required("Address is required"),
//   city: Yup.string().required("City is required"),
//   state: Yup.string().required("State is required"),
//   country: Yup.string().required("Country is required"),
//   zip: Yup.string().required("Zip Code is required"),
//   fatherName: Yup.string().required("Father's Name is required"),
//   fatherOccupation: Yup.string().required("Father's Occupation is required"),
// });

// const loanFieldsSchema = Yup.object().shape({
//   loanType: Yup.string().required("Loan Type is required"),
//   loanAmount: Yup.number()
//     .required("Loan Amount is required")
//     .positive("Loan Amount must be a positive number"),
//   loanApplyDate: Yup.date().required("Apply Date is required"),
//   rateOfInterest: Yup.number()
//     .required("Rate of Interest is required")
//     .positive("Rate of Interest must be a positive number"),
//   loanDuration: Yup.string().required("Loan Duration is required"),
//   annualIncome: Yup.number()
//     .required("Annual Income is required")
//     .positive("Annual Income must be a positive number"),
//   course: Yup.string().required("Course Name is required"),
//   courseFee: Yup.number()
//     .required("Course Fee is required")
//     .positive("Course Fee must be a positive number"),
//   companyName: Yup.string().required("Company Name is required"),
//   designation: Yup.string().required("Designation is required"),
//   experience: Yup.string().required("Experience is required"),
//   totalExperience: Yup.string().required("Total Experience is required"),
// });

// const schema = { ...personalFieldsSchema, loanFieldsSchema };

const loanFields = [
  { name: "accountNumber", label: "Account Number", type: "number" },
  { name: "ifsc", label: "IFSC" },
  { name: "branchName", label: "Branch Name" },
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

export default function CustomerLoanApplication() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [agree, setAgree] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    // resolver: yupResolver(schema),
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmitForm = async (data) => {
    if (agree) {
      const apiUrl = "http://localhost:8080/apply-loan";
      try {
        const response = await axios.post(apiUrl, data);
        console.log("Data sent successfully:", response?.data);
        toast.success(response?.data?.message);
        if (!response.ok) {
          throw new Error("Post request failed");
        }
      } catch (error) {
        console.error("Error sending data:", error);
      }
      reset();
    }
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
              <PersonalInfomation register={register} errors={errors} />
            )}
            {activeStep === 1 && (
              <LoanInfo register={register} errors={errors} />
            )}
            {activeStep === 2 && (
              <Review watch={watch} agree={agree} setAgree={setAgree} />
            )}
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

function PersonalInfomation({ register, errors }) {
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

function LoanInfo({ register, errors }) {
  return (
    <Paper elevation={9} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Required info for loan process
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

function Review({ watch, agree, setAgree }) {
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
        <Stack direction="row" alignItems="center">
          <Checkbox
            checked={agree}
            onChange={() => setAgree(!agree)}
            inputProps={{ "aria-label": "controlled" }}
            htmlFor="checked"
          />
          <Typography component="label" id="checked" name="checked">
            Provided info correct & agreed terms and conditions
          </Typography>
        </Stack>
      </Grid>
    </Paper>
  );
}

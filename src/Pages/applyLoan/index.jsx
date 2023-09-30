import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import * as React from "react";
import AddressForm from "./address-form";
import PaymentForm from "./payment-form";
import Review from "./review";
import { useDispatch } from "react-redux";
import { applyLoan } from "../../Store/accountHolderSlice";

const steps = ["Personal Info", "Loan Info", "Review"];

const initialInput = {
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  country: "",
  loanType: "",
  loanAmount: "",
  loanApplyDate: "",
  rateOfIntrest: "",
  loanDuration: "",
  annualIncome: "",
  course: "",
  courseFee: "",
  fatherName: "",
  fatherOccupation: "",
  companyName: "",
  designation: "",
  experiance: "",
  totalExperiance: "",
  conditions: false,
};

function getStepContent(step, input, setInput) {
  switch (step) {
    case 0:
      return <AddressForm state={{ input, setInput }} />;
    case 1:
      return <PaymentForm state={{ input, setInput }} />;
    case 2:
      return <Review state={{ input, setInput }} />;
    default:
      throw new Error("Unknown step");
  }
}

export default function LoanApply() {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = React.useState(0);
  const [loanType, setLoanType] = React.useState("");
  const [loanInput, setLoanInput] = React.useState(initialInput);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmitForm = () => {
    dispatch(applyLoan(loanInput));
  };

  return (
    <>
      <Container component="main" maxWidth="sm">
        <Paper variant="outlined" sx={{ my: { xs: 3 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
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
            <>
              <Typography variant="h5" gutterBottom>
                Your Loan Application Submitted Succussfully
              </Typography>
              <Typography variant="subtitle1">
                Your Loan Processing number is #2001539. We have initiated your
                Loan, and will send you an update to Your registered email
                address
              </Typography>
            </>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, loanInput, setLoanInput)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                {activeStep < steps.length - 1 && (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Next
                  </Button>
                )}

                {activeStep === steps.length - 1 && (
                  <Button
                    variant="contained"
                    onClick={handleSubmitForm}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Submit
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </>
  );
}

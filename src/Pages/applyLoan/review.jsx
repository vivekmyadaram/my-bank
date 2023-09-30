import {
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

function Review({ state }) {
  const { input, setInput } = state;

  return (
    <Stack direction="column" spacing={1}>
      <Paper elevation={1} sx={{ p: 1 }}>
        <Typography variant="h6">Personal Info</Typography>
        <Typography>
          Name:{input.firstName} {input.lastName}
        </Typography>
        <Typography>
          Address:{input.address1},{input.address2},{input.city},{input.state},
          {input.zip},{input.country}
        </Typography>
        <Typography>Father Name:{input.fatherName}</Typography>
        <Typography>Father Occupation:{input.fatherOccupation}</Typography>
      </Paper>
      <Paper elevation={1} sx={{ p: 1 }}>
        <Typography variant="h6">Loan Info</Typography>
        <Typography variant="body1">Loan Type:{input.loanType}</Typography>
        <Typography variant="body1">
          Apply Date:{input.loanApplyDate}
        </Typography>
        <Typography variant="body1">
          Rate Of Intrest:{input.userName}
        </Typography>
        <Typography variant="body1">Duration:{input.loanDuration}</Typography>
        <Typography variant="body1">Course:{input.course}</Typography>
        <Typography variant="body1">Course Fee:{input.courseFee}</Typography>
        <Typography variant="body1">
          Annual Income:{input.annualIncome}
        </Typography>
        <Typography variant="body1">
          Company Name:{input.companyName}
        </Typography>
        <Typography variant="body1">Designation:{input.designation}</Typography>
        <Typography variant="body1">Experiance:{input.experiance}</Typography>
        <Typography variant="body1">
          Total Experiance:{input.totalExperiance}
        </Typography>
      </Paper>

      <FormControlLabel
        control={
          <Checkbox
            color="secondary"
            name="conditions"
            value={input.conditions}
            onChange={(e) =>
              setInput({ ...input, conditions: !input.conditions })
            }
          />
        }
        label="I read terms & conditions"
      />
    </Stack>
  );
}

export default Review;

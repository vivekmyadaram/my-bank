import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import image from "../../../public/bank.jpeg";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required("Password is required"),
});

function LoginAccount() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  // const styles={
  //   background: rgba(255, 255, 255, 0.3), /* Translucent white background */
  //   backdropf: blur(10px), /* Apply a blur effect */
  //   border-radius: 10px, /* Optional: Add border radius for rounded corners */
  //   padding: 20px, /* Optional: Add padding for content spacing */
  // }

  return (
    <Paper elevation={2} sx={{ p: 3, minHeight: 550 }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <img src={image} alt="heroLoginImage" />
        <Box>
          {" "}
          <Typography sx={{ mb: 2, textAlign: "center" }} variant="subtitle1">
            LogIn To Account
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      size="small"
                      label="Email"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      size="small"
                      type={showPassword ? "text" : "password"}
                      label="Password"
                      error={!!errors.password}
                      helperText={errors.password?.message}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Box textAlign="right" mt={2}>
              <Button type="submit" variant="contained">
                LogIn
              </Button>
            </Box>
          </form>
        </Box>
      </Stack>
    </Paper>
  );
}

export default LoginAccount;

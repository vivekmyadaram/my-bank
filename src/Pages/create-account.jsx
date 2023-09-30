import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "../Store/accountHolderSlice";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import toast from "react-hot-toast";

const initialInput = {
  name: "",
  username: "",
  password: "",
  confirmPassword: "",
  address: "",
  state: "",
  country: "",
  email: "",
  dob: "",
  phone: "",
  accType: "",
  branchName: "",
  initialDeposit: "",
  proofOfIdentity: "",
  proofDocNo: "",
};

const regexEmail = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/";

function CreateUser() {
  const dispatch = useDispatch();
  const [eye, setEye] = useState(false);
  const [confirmPassEye, setConfimPassEye] = useState(false);
  const users = useSelector((state) => state.bankUsers);
  const [userInput, setUserInput] = useState(initialInput);
  const handleChangeField = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    // try {
    //   const postResponse = await fetch("http://localhost:8080/customers", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(userInput),
    //   });
    //   toast.success("user created succussfully");

    //   if (!postResponse.ok) {
    //     throw new Error("Post request failed");
    //   }
    //   toast.success(JSON.stringify(resp));
    // } catch (error) {
    //   toast.error(JSON.stringify(error));
    //   console.log(error);
    // }
    // dispatch(addCustomer(userInput));
    setUserInput(initialInput);
  };
  return (
    <Paper sx={{ p: 2 }} component="form" onSubmit={handleSubmitForm}>
      <Stack direction="column" spacing={2}>
        <Stack
          direction="column"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Account
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              size="small"
              type="text"
              label="Account Holder Name"
              name="name"
              value={userInput?.name}
              onChange={handleChangeField}

              // error={!userInput.name}
              //   error={userInput?.name.length < 8}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              size="small"
              type="text"
              label="User Name"
              name="username"
              value={userInput?.username}
              onChange={handleChangeField}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              size="small"
              type={eye ? "text" : "password"}
              label="Password"
              name="password"
              value={userInput?.password}
              onChange={handleChangeField}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton onClick={() => setEye(!eye)}>
                      {eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              size="small"
              type={confirmPassEye ? "text" : "password"}
              label="Confirm Password"
              name="confirmPassword"
              value={userInput?.confirmPassword}
              onChange={handleChangeField}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton
                      onClick={() => setConfimPassEye(!confirmPassEye)}
                    >
                      {confirmPassEye ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              type="text"
              label="address"
              name="address"
              fullWidth
              value={userInput?.address}
              onChange={handleChangeField}
              multiline
              minRows={2}
              maxRows={3}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              size="small"
              type="text"
              label="State"
              name="state"
              value={userInput?.state}
              onChange={handleChangeField}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              size="small"
              type="text"
              label="Country"
              name="country"
              value={userInput?.country}
              onChange={handleChangeField}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              size="small"
              type="text"
              fullWidth
              label="Email Address"
              name="email"
              value={userInput?.email}
              onChange={handleChangeField}
              inputProps={{
                pattern: "[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}",
                title: "Enter Valid Email",
              }}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              size="small"
              type="text"
              fullWidth
              label="Mobile Number"
              name="phone"
              value={userInput?.phone}
              onChange={handleChangeField}
              // inputProps={{
              //   pattern: "[0-9]{10}",
              //   title: "Enter valid Mobile Number",
              // }}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              size="small"
              type="date"
              fullWidth
              name="dob"
              value={userInput?.dob}
              onChange={handleChangeField}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              size="small"
              type="text"
              fullWidth
              label="Branch Name"
              name="branchName"
              value={userInput?.branchName}
              onChange={handleChangeField}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              size="small"
              type="text"
              fullWidth
              label="Type Of Account"
              name="accType"
              value={userInput?.accType}
              onChange={handleChangeField}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              size="small"
              type="text"
              fullWidth
              label="Intial Deposit"
              name="initialDeposit"
              value={userInput?.initialDeposit}
              onChange={handleChangeField}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Rs</InputAdornment>
                ),
              }}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              type="file"
              fullWidth
              // label="Identification Proof"
              name="proofOfIdentity"
              value={userInput?.proofOfIdentity}
              onChange={handleChangeField}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              type="text"
              fullWidth
              label="Proof Document Number"
              name="proofDocNo"
              value={userInput?.proofDocNo}
              onChange={handleChangeField}
            ></TextField>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "right" }}>
          <Button type="submit" variant="outlined">
            Create
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}

export default CreateUser;

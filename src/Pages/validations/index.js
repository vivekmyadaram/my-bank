import * as yup from "yup";
import { emailRegex, mobileNumberRegex } from "./constants";

export const createSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  username: yup
    .string()
    .required("Username is required")
    .min(8, "At least 8 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  email: yup
    .string()
    .matches(emailRegex, "Invalid email")
    .required("Email is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
  branchName: yup.string().required("Branch Name is required"),
  phone: yup
    .string()
    .matches(mobileNumberRegex, "Invalid Mobile Number")
    .required("Phone number is required"),
  initialDeposit: yup.string().required("Please enter your initial deposit"),
  // idProof: yup.string().required("You must submit proof"),
  idProofNo: yup.string().required("Required"),
});

export const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  // Add more validation rules for other fields as needed
});

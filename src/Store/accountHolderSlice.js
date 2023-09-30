import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  bankUsersList: [
    {
      _id: "651608e54b25827f5b167b27",
      name: "vivek",
      username: "vivekmyadaram@gmail.com",
      createdAt: "2023-09-28T23:14:45.145Z",
      updatedAt: "2023-09-28T23:14:45.145Z",
      __v: 0,
    },
    {
      _id: "65160b2f2c34b0f278d99c68",
      name: "vivek",
      username: "vivekmyadaram@gmail.com",
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
      proofDocNo: "",
      createdAt: "2023-09-28T23:24:31.489Z",
      updatedAt: "2023-09-28T23:24:31.489Z",
      __v: 0,
    },
    {
      _id: "65160cee72e85e0596289d0f",
      name: "vivek123",
      username: "vivekmyadaram@gmail.com",
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
      proofDocNo: "",
      createdAt: "2023-09-28T23:31:58.203Z",
      updatedAt: "2023-09-28T23:31:58.203Z",
      __v: 0,
    },
    {
      _id: "651627b3704b77100738000e",
      name: "Vivek Myadaram",
      username: "vivekvishwakarma0719@gmail.com",
      password: "pSp3ip@8xtPya$r",
      confirmPassword: "",
      address: "sircilla",
      state: "telangana",
      country: "India",
      email: "vivekvishwakarma0719@gmail.com",
      dob: "",
      phone: "09052161216",
      accType: "",
      branchName: "",
      initialDeposit: "",
      proofDocNo: "",
      createdAt: "2023-09-29T01:26:11.386Z",
      updatedAt: "2023-09-29T01:26:11.386Z",
      __v: 0,
    },
    {
      _id: "65162815704b771007380011",
      name: "vivi vivek myadaram",
      username: "vivi@gmail.com",
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
      proofDocNo: "",
      createdAt: "2023-09-29T01:27:49.076Z",
      updatedAt: "2023-09-29T01:44:21.403Z",
      __v: 0,
    },
  ],
  deposit: { amount: 0 },
  loans: [
    {
      custName: "",
      loanNumber: "",
      loanAmount: "",
      loanPeriod: "",
      intrestRate: "",
    },
  ],
  editedUser: {},
};

export const BankUsersSlice = createSlice({
  name: "bankUsers",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      const currentUsers = state.bankUsersList;
      state.bankUsersList = [...currentUsers, action.payload];
      toast.success("user added succussfully!");
    },
    deleteCustomer: (state, action) => {
      const customer = action.payload;
      state.bankUsersList = state.bankUsersList.filter(
        (i) => i.id !== customer.id
      );
      toast.success("customer deleted succussfully!");
    },
    customerEdit: (state, action) => {
      state.editedUser = action.payload;
    },
    depostiAmount: (state, action) => {
      const resp = action.payload;
      const { depositAmount } = resp;
      state.deposit = { amount: +depositAmount };
      toast.success(`${depositAmount} rs deposited to your account`);
    },
    applyLoan: (state, action) => {
      const resp = action.payload;
      toast.success(
        "Application Submitted Succussfully! you will recieve mail once it's approved"
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addCustomer,
  deleteCustomer,
  depostiAmount,
  applyLoan,
  customerEdit,
} = BankUsersSlice.actions;

export default BankUsersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  bankUsersList: [
    {
      _id: "651bddc0f5e5b0f8d85fbdef",
      name: "Vivek",
      username: "Vivek",
      password: "pSp3ip@8xtPya$r",
      confirmPassword: "pSp3ip@8xtPya$r",
      address: "vemulawada",
      state: "ts",
      country: "india",
      email: "vivekvishwakarma0719@gmail.com",
      dob: "2023-10-04",
      phone: "9052161216",
      accountNumber: "80409081947",
      accountType: "savings",
      initialDeposit: "100000",
      documentProof: "addhar",
      proofDocNo: "96529631991234",
      createdAt: "2023-10-03T09:24:16.368Z",
      updatedAt: "2023-10-03T09:24:16.368Z",
      __v: 0,
    },
    {
      _id: "651bdfcff5e5b0f8d85fbdf2",
      name: "uday",
      username: "Uday",
      password: "123456789",
      confirmPassword: "123456789",
      address: "vmd",
      state: "ts",
      country: "india",
      email: "vivekmyadaram@gmail.com",
      dob: "2023-10-10",
      phone: "9652963199",
      accountNumber: "28152178261",
      accountType: "savings",
      initialDeposit: "100000000",
      documentProof: "addhar",
      proofDocNo: "123",
      createdAt: "2023-10-03T09:33:03.900Z",
      updatedAt: "2023-10-03T09:33:03.900Z",
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
  registrationDone: { accountNumber: "1234 - XXXX - 96" },
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
    registrationSuccuss: (state, action) => {
      state.registrationDone = { accountNumber: action.payload };
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
  registrationSuccuss,
} = BankUsersSlice.actions;

export default BankUsersSlice.reducer;

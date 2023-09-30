import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoanApply from "./Pages/applyLoan";
import BankCustomers from "./Pages/customers";
import CustomerRegistration from "./Pages/customers/customerRegistration";
import UpdateCustomerAccount from "./Pages/customers/update-customer";
import AmountDeposit from "./Pages/deposits/customerDeposti";
import Header from "./Pages/header";
import AccountLoginPage from "./Pages/loginPage";
import { store } from "./Store/store";
import App123 from "./try";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <BankCustomers />,
      },
      {
        path: "/customers",
        element: <BankCustomers />,
      },
      {
        path: "/apply-loan",
        element: <LoanApply />,
      },
      {
        path: "/edit-user",
        element: <UpdateCustomerAccount />,
      },
      {
        path: "/deposit",
        element: <AmountDeposit />,
      },
      {
        path: "/register",
        element: <CustomerRegistration />,
      },
    ],
  },
  {
    path: "/log-in",
    element: <AccountLoginPage />,
  },
  {
    path: "/try",
    element: <App123 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </LocalizationProvider>
  </Provider>
);

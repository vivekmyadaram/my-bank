import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app";
import LoanApply from "./Pages/applyLoan";
import BankCustomers from "./Pages/customers";
import CustomerRegistration from "./Pages/customers/customerRegistration";
import UpdateCustomerAccount from "./Pages/customers/update-customer";
import AmountDeposit from "./Pages/deposits/customerDeposti";
import AccountLoginPage from "./Pages/loginPage";
import { store } from "./Store/store";
import LoanApply1 from "./try";
import ProtectedRoute from "./Pages/protected-route";
import RequestForAccountUpdate from "./Pages/request-update-page";
import CustomerProfileDisplay from "./Pages/profile-customer-view";
import CustomerLoanApplication from "./Pages/customerLoanApplyPage";
import AmountWithdrawal from "./Pages/customerAmountWithdrawal";
import WelcomeComponent from "./components/welcomeUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute element={WelcomeComponent} />,
      },
      {
        path: "/customers",
        element: <ProtectedRoute element={BankCustomers} />,
      },
      {
        path: "/apply-loan",
        element: <ProtectedRoute element={CustomerLoanApplication} />,
      },
      {
        path: "/edit-user",
        element: <ProtectedRoute element={UpdateCustomerAccount} />,
      },
      {
        path: "/request-update",
        element: <ProtectedRoute element={RequestForAccountUpdate} />,
      },
      {
        path: "/deposit",
        element: <ProtectedRoute element={AmountDeposit} />,
        AmountWithdrawal,
      },
      {
        path: "/withdrawal",
        element: <ProtectedRoute element={AmountWithdrawal} />,
      },
      {
        path: "/register",
        element: <ProtectedRoute element={CustomerRegistration} />,
      },
      {
        path: "/cust-profile",
        element: <ProtectedRoute element={CustomerProfileDisplay} />,
      },
      {
        path: "/try",
        element: <CustomerLoanApplication />,
      },
    ],
  },
  {
    path: "/customer-register",
    element: <CustomerRegistration />,
  },
  {
    path: "/log-in",
    element: <AccountLoginPage />,
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

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app";
import WelcomeComponent from "./components/welcomeUser";
import AmountWithdrawal from "./Pages1/amountWithdrawalPage";
import CustomerRegistration from "./Pages1/adminRegistrationPage";
import AmountDeposit from "./Pages1/amountDepositPage";
import AccountLoginPage from "./Pages/loginPage";
import CustomerProfileDisplay from "./Pages/profile-customer-view";
import ProtectedRoute from "./Pages/protected-route";
import BankCustomers from "./Pages1/bankUsesPage";
import CustomerLoanApplication from "./Pages1/loanApplicationPage";
import UpdateCustomerAccount from "./Pages1/updateCustomerPage";
import RequestForAccountUpdate from "./Pages1/updateRequestPage";
import { store } from "./Store/store";

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
        path: "/customer-profile",
        element: <ProtectedRoute element={CustomerProfileDisplay} />,
      },
      {
        path: "/admin-profile",
        element: <ProtectedRoute element={CustomerProfileDisplay} />,
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
      },
      {
        path: "/withdrawal",
        element: <ProtectedRoute element={AmountWithdrawal} />,
      },
      {
        path: "/admin-register",
        element: <ProtectedRoute element={CustomerRegistration} />,
      },
      {
        path: "/customer-register",
        element: <ProtectedRoute element={CustomerRegistration} />,
      },
    ],
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

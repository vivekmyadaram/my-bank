import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app";
import ProtectedRoute from "./components/protectedRoutePage";
import WelcomeComponent from "./components/welcomeUser";
import AdminProfileDisplay from "./Pages/adminProfileview";
import AdminRegistration from "./Pages/adminRegistrationPage";
import AmountDeposit from "./Pages/amountDepositPage";
import AmountWithdrawal from "./Pages/amountWithdrawalPage";
import BankCustomers from "./Pages/bankUsesPage";
import CustomerProfileDisplay from "./Pages/customerProfileview";
import CustomerRegistration from "./Pages/customerRegistrationPage";
import CustomersRequestsPage from "./Pages/customerRequestsPage";
import CustomerLoanApplication from "./Pages/loanApplicationPage";
import AccountLoginPage from "./Pages/loginPage";
import UpdateCustomerAccount from "./Pages/updateCustomerPage";
import RequestForAccountUpdate from "./Pages/updateRequestPage";
import { store } from "./Store/store";
import RegistrationDoneShow from "./Pages/succussRegistrationPage";

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
        path: "/customer-profile/:accountNumber",
        element: <ProtectedRoute element={CustomerProfileDisplay} />,
      },
      {
        path: "/admin-profile",
        element: <ProtectedRoute element={AdminProfileDisplay} />,
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
        path: "/edit-user/:accountNumber",
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
        element: <ProtectedRoute element={AdminRegistration} />,
      },
      {
        path: "/customer-register",
        element: <ProtectedRoute element={CustomerRegistration} />,
      },
      {
        path: "/customer-requests",
        element: <ProtectedRoute element={CustomersRequestsPage} />,
      },
    ],
  },
  {
    path: "/log-in",
    element: <AccountLoginPage />,
  },
  {
    path: "/register-succuss",
    element: <RegistrationDoneShow />,
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

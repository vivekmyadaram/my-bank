import { createBrowserRouter } from "react-router-dom";
import App from "./app";
import ProtectedRoute from "./components/protectedRoutePage";
import WelcomeComponent from "./components/welcomeUser";
import AdminProfileDisplay from "./pages/adminProfileview";
import AdminRegistration from "./pages/adminRegistrationPage";
import AmountDeposit from "./pages/amountDepositPage";
import AmountWithdrawal from "./pages/amountWithdrawalPage";
import BankCustomers from "./pages/bankUsesPage";
import CustomerProfileDisplay from "./pages/customerProfileview";
import CustomersRequestsPage from "./pages/customerRequestsPage";
import CustomerLoanApplication from "./pages/loanApplicationPage";
import Login from "./pages/login";
import UpdateCustomerAccount from "./pages/updateCustomerPage";
import RequestForAccountUpdate from "./pages/updateRequestPage";
import RegistrationSuccess from "./components/loginSuccussPage";
import ForgotPassword from "./components/forgetPasswordPage";
import Registration from "./pages/Registration";

const routes = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/new-user",
    element: <Registration />,
  },
  {
    path: "/register-succuss",
    element: <RegistrationSuccess />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute element={WelcomeComponent} />,
      },
      {
        path: "/user-profile",
        element: <ProtectedRoute element={CustomerProfileDisplay} />,
      },
      {
        path: "/user-profile/:accountNumber",
        element: <ProtectedRoute element={CustomerProfileDisplay} />,
      },
      {
        path: "/admin-profile",
        element: <ProtectedRoute element={AdminProfileDisplay} />,
      },
      {
        path: "/users",
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
        element: <ProtectedRoute element={Registration} />,
      },
      {
        path: "/customer-requests",
        element: <ProtectedRoute element={CustomersRequestsPage} />,
      },
    ],
  },
]);

export default routes;

import { createBrowserRouter } from "react-router-dom";
import Loans from "./Pages/Loans";
import UserProfile from "./Pages/UserProfile";
import App from "./app";
import ProtectedRoute from "./components/ProtectedRoute";
import WelcomeComponent from "./components/welcomeUser";
import Registration from "./pages/Registration";
import AdminProfileDisplay from "./pages/adminProfileview";
import AdminRegistration from "./pages/adminRegistrationPage";
import AmountDeposit from "./pages/amountDepositPage";
import AmountWithdrawal from "./pages/amountWithdrawalPage";
import BankCustomers from "./pages/bankUsesPage";
import CustomersRequestsPage from "./pages/customerRequestsPage";
import CustomerLoanApplication from "./pages/loanApplicationPage";
import Login from "./pages/login";
import UpdateCustomerAccount from "./pages/updateCustomerPage";
import RequestForAccountUpdate from "./pages/updateRequestPage";

const routes = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/new-user",
    element: <Registration />,
  },
  {
    path: "/",
    element: <ProtectedRoute element={App} />,
    children: [
      {
        path: "/",
        element: <WelcomeComponent />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      // {
      //   path: "/user-profile/:accountNumber",
      //   element: <CustomerProfileDisplay />,
      // },
      {
        path: "/admin-profile",
        element: <AdminProfileDisplay />,
      },
      {
        path: "/customers",
        element: <BankCustomers />,
      },
      {
        path: "/loans",
        element: <Loans />,
      },
      {
        path: "/apply-loan",
        element: <CustomerLoanApplication />,
      },
      {
        path: "/edit-user/:accountNumber",
        element: <UpdateCustomerAccount />,
      },
      {
        path: "/request-update",
        element: <RequestForAccountUpdate />,
      },
      {
        path: "/deposit",
        element: <AmountDeposit />,
      },
      {
        path: "/withdrawal",
        element: <AmountWithdrawal />,
      },
      {
        path: "/admin-register",
        element: <AdminRegistration />,
      },
      {
        path: "/customer-register",
        element: <Registration />,
      },
      {
        path: "/customer-requests",
        element: <CustomersRequestsPage />,
      },
    ],
  },
]);

export default routes;

import { createBrowserRouter } from "react-router-dom";
import UserProfile from "./Pages/UserProfile";
import App from "./app";
import ProtectedRoute from "./components/ProtectedRoute";
import Registration from "./pages/Registration";
// import AdminProfileDisplay from "./pages/adminProfileview";
import AmountDeposit from "./Pages/Deposit";
import Login from "./pages/login";
import RequestForAccountUpdate from "./Pages/UpdateProfile";
import AmountWithdrawal from "./Pages/Withdraw";
import WelcomeComponent from "./Pages/welcomeUser";
import CustomerLoanApplication from "./Pages/ApplyLoan";
import BankCustomers from "./Pages/Customers";
import UpdateCustomerAccount from "./Pages/updateCustomerPage";
import CustomerProfileView from "./Pages/CustomerProfileView";
import Loans from "./Pages/Loans";
import LoanInfo from "./Pages/loanInfo";

const routes = createBrowserRouter([
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "login",
    element: <Login />,
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
        path: "/profile",
        element: <UserProfile />,
      },
      {
        path: "/apply-loan",
        element: <CustomerLoanApplication />,
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
        path: "/request-update",
        element: <RequestForAccountUpdate />,
      },
      {
        path: "/customers",
        element: <BankCustomers />,
      },
      {
        path: "/user/:accountNumber",
        element: <CustomerProfileView />,
      },
      {
        path: "/edit-user/:accountNumber",
        element: <UpdateCustomerAccount />,
      },
      {
        path: "/loans",
        element: <Loans />,
      },
      {
        path: "/loan/:accountNumber",
        element: <LoanInfo />,
      },
      //

      // {
      //   path: "/admin-register",
      //   element: <AdminRegistration />,
      // },
      // {
      //   path: "/customer-register",
      //   element: <Registration />,
      // },
      // {
      //   path: "/customer-requests",
      //   element: <CustomersRequestsPage />,
      // },
    ],
  },
]);

export default routes;

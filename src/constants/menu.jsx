import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import * as React from "react";

import MoneyIcon from "@mui/icons-material/Money";

const userMenu = [
  {
    id: 1,
    title: "Apply Loan",
    path: "/apply-loan",
    icon: <CreditCardIcon />,
  },
  {
    id: 2,
    title: "Deposit",
    path: "/deposit",
    icon: <CurrencyRupeeIcon />,
  },
  {
    id: 3,
    title: "Withdraw",
    path: "/withdrawal",
    icon: <MoneyIcon />,
  },
  {
    id: 4,
    title: "Update Profile",
    path: "/request-update",
    icon: <PersonAddIcon />,
  },
];

const AdminMenu = [
  {
    id: 1,
    title: "Customers",
    path: "/customers",
    icon: <GroupIcon />,
  },
  {
    id: 2,
    title: "Loans",
    path: "/loans",
    icon: <AddShoppingCartIcon />,
  },
];

export { AdminMenu, userMenu };

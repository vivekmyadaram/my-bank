import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { Link } from "react-router-dom";

import SavingsIcon from "@mui/icons-material/Savings";

const cusomerMenu = [
  {
    id: 1,
    title: "Profile View",
    path: "/profile-view",
    icon: <PersonAddIcon />,
  },
  {
    id: 1,
    title: "Apply Loan",
    path: "/apply-loan",
    icon: <PersonAddIcon />,
  },
  {
    id: 1,
    title: "Deposit Menu",
    path: "/deposit",
    icon: <PersonAddIcon />,
  },
  {
    id: 1,
    title: "Request Account Update",
    path: "/request-update",
    icon: <PersonAddIcon />,
  },
];
const AdminMenu = [
  {
    id: 1,
    title: "New Customer",
    path: "/register",
    icon: <PersonAddIcon />,
  },
  {
    id: 2,
    title: "Apply Loan",
    path: "/apply-loan",
    icon: <AddShoppingCartIcon />,
  },
  {
    id: 3,
    title: "All Customers",
    path: "/customers",
    icon: <GroupIcon />,
  },
  {
    id: 4,
    title: "Deposits",
    path: "/deposit",
    icon: <SavingsIcon />,
  },
  {
    id: 4,
    title: "Requests",
    path: "/deposit",
    icon: <SavingsIcon />,
  },
];

export default function SideNav() {
  const [role, setRole] = React.useState("user");
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        display: "flex",
        justifyContent: "center",
        minHeight: 250,
      }}
    >
      <nav aria-label="main mailbox folders">
        {role === "user" ? (
          <List>
            {cusomerMenu.map((menu) => (
              <Link
                key={menu?.id}
                to={menu?.path}
                style={{ textDecoration: "none", color: "initial" }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{menu?.icon}</ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">{menu?.title}</Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        ) : (
          <List>
            {AdminMenu.map((menu) => (
              <Link
                key={menu?.id}
                to={menu?.path}
                style={{ textDecoration: "none", color: "initial" }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{menu?.icon}</ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">{menu?.title}</Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        )}
      </nav>
      <Divider />
    </Box>
  );
}

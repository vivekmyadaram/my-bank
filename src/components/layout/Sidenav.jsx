import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
} from "@mui/material";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { AdminMenu, userMenu } from "../../constants/menu";
import { UserContext } from "../../app";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function Sidenav() {
  const user = React.useContext(UserContext);

  const menu = user?.userType == "user" ? userMenu : AdminMenu;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menu.map((item) => (
            <Link
              key={item?.id}
              to={item?.path}
              style={{ textDecoration: "none", color: "initial" }}
            >
              <ListItem key={item.id} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidenav;

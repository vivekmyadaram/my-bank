import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Stack } from "@mui/material";

const options = ["Option 1", "Option 2", "Option 3"];

const App = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [rightSidebarContent, setRightSidebarContent] = useState(
    "Content for Option 1"
  );
  const isMobile = useMediaQuery("(max-width:600px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDrawerOpen(false);
    // Logic to set content based on the selected option
    // For example, fetch content from an API based on the option
    // setRightSidebarContent(newContent);
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6">Your Bank Name</Typography>
        </Toolbar>
      </AppBar>
      {isMobile && (
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerToggle(false)}
        >
          <List>
            {options.map((option, index) => (
              <ListItem
                button
                key={index}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </ListItem>
            ))}
          </List>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Your Bank Name</Typography>
            <Typography variant="h6">List</Typography>
          </Stack>
        </Drawer>
      )}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9} md={10}>
          <div style={{ padding: 20 }}>
            <div style={{ display: "none" }}>{rightSidebarContent}</div>
            {selectedOption}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;

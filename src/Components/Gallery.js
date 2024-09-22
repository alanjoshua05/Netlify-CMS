import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AOS from "aos";
import "aos/dist/aos.css";
import "./jothi.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Nav() {
  useEffect(() => {
    AOS.init({
      // Your AOS configuration...
    });
  }, []);

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      sx={{
        background: "white",
        backgroundColor: "rgba(107, 107, 107, 0.1)",
        backdropFilter: "blur(10px)",
      }}
      position="sticky"
    >
      <Toolbar>
        <Typography
          ml={2}
          variant="h4"
          color="white"
          sx={{ flexGrow: 1, color: "black", fontWeight: "900" }}
        >
          JG
        </Typography>
        <Stack
          mr={0}
          direction="row"
          spacing={2}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Link to="/home">
            <Button variant="text" sx={{ color: "black" }}>
              Home
            </Button>
          </Link>
          <Link to="/jothi">
            <Button variant="text" sx={{ color: "black" }}>
              Jothi Lakshimi
            </Button>
          </Link>
          <Link to="/research">
            <Button variant="text" sx={{ color: "black" }}>
              Research
            </Button>
          </Link>
          <Link to="/publication">
            <Button variant="text" sx={{ color: "black" }}>
              Publications
            </Button>
          </Link>

          <div>
            {/* Display Menu as Button on large screens */}
            <Button
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <MoreVertIcon sx={{ color: "black" }} />
            </Button>
            {/* Display Menu as IconButton on small screens */}
            <IconButton
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MoreVertIcon sx={{ color: "black" }} />
            </IconButton>
            {/* Menu */}
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <Link
                to="/members"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleClose}>Members</MenuItem>
              </Link>
              <Link
                to="/gallery"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleClose}>Gallery</MenuItem>
              </Link>
              <Link
                to="/achievements"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleClose}>Achievements</MenuItem>
              </Link>
            </Menu>
          </div>
        </Stack>
        {/* Toggle button for mobile */}
        <IconButton
          sx={{ display: { xs: "flex", md: "none" } }}
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
        >
          <MenuIcon sx={{ color: "black" }} />
        </IconButton>
        {/* Drawer for mobile */}
        <Drawer anchor="right" open={openDrawer} onClose={handleDrawerClose}>
          <List>
            <ListItem button onClick={handleDrawerClose}>
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemText primary="Home" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link
                to="/jothi"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemText primary="Jothi Lakshimi" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link
                to="/research"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemText primary="Research" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link
                to="/publication"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemText primary="Publications" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link
                to="/members"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemText primary="Members" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link
                to="/gallery"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemText primary="Gallery" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link
                to="/achievements"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemText primary="Achievements" />
              </Link>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default function Gallery() {
  return (
    <div>
      <Nav />
      <h1>vjhjhgjhb</h1>
    </div>
  );
}

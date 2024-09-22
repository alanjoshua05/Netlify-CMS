import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AppBar, Stack, Button, Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Res from "./home.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Research = () => {
  return (
    <div>
      <Nav />
      <Rese />
      <Con />
    </div>
  );
};

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


function Con() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://alanjoshua05.github.io/dani/Jothi.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="bg-white py-24 sm:py-32 mt-7">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.research.map((res) => (
            <Card sx={{ maxWidth: 345 }} data-aos={"fade-up"} key={res.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={res.img_link}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {res.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {res.discription}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function Rese() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://alanjoshua05.github.io/dani/Jothi.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="container mt-24">
      <div className="container justify-center text-4xl flex">
        RSEARCH INTREST
      </div>
      <div className="container mt-20">
        <p className="text">{data.article[0]?.art}</p>
      </div>
    </div>
  );
}

export default Research;

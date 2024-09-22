import React, { useState, useEffect } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AppBar, Stack, Button, Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
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
export default function Home() {
  return (
    <Box>
      <Nav />
      <News />
      <Carosl />
      <Guide />
      <Blog />
    </Box>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginTop: "30px",
}));

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
      data-aos="fade-down"
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

function News() {
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
  var a = data.new.show;
  return (
    <Box mt={3} ml={1}>
      <Grid container spacing={1} display={a}>
        <Grid xs={2} lg={1}>
          <Typography
            variant="h6"
            display={"flex"}
            justifyContent={"center"}
            color="white"
            bgcolor={"black"}
            sx={{
              fontSize: { lg: "20px", md: "18px", sm: "16px", xs: "14px" },
            }}
          >
            NEWS
          </Typography>
        </Grid>
        <Grid xs={10} lg={11}>
          {data.new.map((item) => (
            <marquee behavior="scroll" direction="left" key={item.id}>
              {item.news}
            </marquee>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

function Guide() {
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
      delay: 1, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
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

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      // Your AOS configuration
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Box mt={16} sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={12} lg={6} md={4} display={"flex"}>
            <Box
              data-aos="fade-right"
              justifyContent={"center"}
              alignItems={"center"}
              ml={{ lg: 18, md: 8, sm: 25, xs: 7 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                borderRadius: "px",
                float: "inherit",
              }}
              width={{ lg: "500px", md: "350px", xs: "300px", sm: "400px" }}
            >
              <img
                src={data.lab[0]?.gpic}
                alt="Lab"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
          <Grid xs={12} lg={6} md={8} display={"flex"}>
            <Typography
              sx={{
                fontSize: { lg: "18px", md: "15px", sm: "18px", xs: "16px" },
              }}
              mt={3}
              mr={{ lg: 15, md: 15, sm: 10, xs: 5 }}
              ml={{ lg: 15, md: 15, sm: 10, xs: 5 }}
              className="text-center"
              data-aos="fade-left"
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {data.lab[0]?.about_lab}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

function Carosl() {
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
    <div className="mt-3">
      <Carousel>
        {data.carosal.map((item) => (
          <Con key={item.id} item={item.imgs} />
        ))}
      </Carousel>
    </div>
  );
}

function Con(props) {
  return (
    <Box
      sx={{
        display: "flex",
        // justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: { xs: "8px" },

        height: { lg: "700px", md: "600px", sm: "500px", xs: "550px" },
      }}
    >
      <img
        src={props.item}
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover", borderRadius: "15px" }}
      />
    </Box>
  );
}

function Blog() {
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
    <div className="bg-white py-24 sm:py-32 mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="container-2xl max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Recent Group Activities
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
              </div>
              <CardMedia
                sx={{ marginTop: "10px" }}
                component="img"
                height="140"
                image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                alt="green iguana"
              />
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="absolute inset-0" />
                  {post.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 mb-3 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-3">
                  <p className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

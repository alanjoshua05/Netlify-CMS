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
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AOS from "aos";
import "aos/dist/aos.css";
import "./jothi.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import xyz from "./home.json";
const Jothi = () => {
  return (
    <div>
      <Nav />
      <Port />
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

function Port() {
  return (
    <div className="container">
      <div className="content">
        <div className="img">
          <img
            src="https://images.unsplash.com/photo-1531975474574-e9d2732e8386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kb25lc2lhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="text">
          <h1 className="title">Dr. Jothi Lakshmi Nallasivam</h1>
          <p>
            Dr. Jothi Lakshmi Nallasivam, the esteemed figure behind Jothi
            Lakshmi's Chemistry Lab Guide, stands as a luminary in the realm of
            chemistry. With an unwavering commitment to scientific inquiry and a
            profound dedication to advancing the frontiers of knowledge, Dr.
            Jothi embodies the epitome of excellence and innovation in her
            discipline.
          </p>
          <p>
            Possessing a doctoral degree from the revered Indian Institute of
            Technology Bombay, under the mentorship of the distinguished Prof.
            Rodney A. Fernandes, Dr. Jothi has cultivated a scholarly trajectory
            marked by groundbreaking research and scholarly pursuits. Her
            academic interests traverse a diverse landscape, encompassing areas
            such as transition metal catalysis, cross coupling methodologies,
            and the synthesis of bioactive natural compounds. Through her
            pioneering experiments and innovative methodologies, she endeavors
            to illuminate novel pathways and redefine paradigms within the
            domain of chemistry.
          </p>
          <p>
            Beyond her scholarly endeavors, Dr. Jothi assumes the mantle of an
            Assistant Professor at the National Institute of Technology
            Tiruchirappalli, where she imparts her wealth of knowledge and
            expertise to mold the next generation of scientific minds. Her
            pedagogical approach, characterized by rigor and mentorship, has
            served as an inspiration to countless aspiring chemists, instilling
            in them a passion for inquiry and a pursuit of academic excellence.
          </p>
          <p>
            Dr. Jothi's scholarly achievements are further underscored by her
            receipt of numerous research grants and prestigious accolades,
            including the esteemed DST-SERB-NPDF fellowship and the National
            Postdoctoral Fellowship. Her scholarly contributions, evidenced by a
            prolific corpus of impactful publications and presentations at
            international conferences, underscore her steadfast dedication to
            the advancement of the chemical sciences.
          </p>
          <p>
            Driven by an unyielding commitment to excellence and a fervent
            curiosity for the intricacies of the natural world, Dr. Jothi
            Lakshmi Nallasivam emerges as a beacon of inspiration and leadership
            within the realm of chemistry. Through her exemplary scholarship,
            pedagogical acumen, and unwavering dedication, she continues to make
            indelible contributions to the scientific community while inspiring
            future generations of scholars and innovators.
          </p>
          <h2 className="sub-title">Education</h2>
          <div className="images">
            <div >
              <Box
                p={1}
                sx={{
                  background: "green",
                  width: "90px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography color="white">M.Sc</Typography>
              </Box>
              <div style={{ marginLeft: "10px", marginTop: "14px" }}>
                <p>
                  Mentor: Prof. Y. B. Basavaraju, Manasagangothri, University of
                  Mysore, Karnataka
                </p>
              </div>
            </div>
            <div>
              <Box
                p={1}
                sx={{
                  background: "green",
                  width: "90px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography color="white">Ph.D</Typography>
              </Box>
              <div style={{ marginLeft: "10px", marginTop: "14px" }}>
                <p>
                Mentor: Prof. Rodney A. Fernandes, Indian Institute of Technology Bombay, Maharashtra, India.
                </p>
              </div>
            </div>
            <div>
            {/* <img
              src="https://images.unsplash.com/photo-1533805994737-558461dcb28e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kb25lc2lhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZG9uZXNpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGluZG9uZXNpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aW5kb25lc2lhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1476158085676-e67f57ed9ed7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluZG9uZXNpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="content">
        <div className="img">
          <img
            src="https://images.unsplash.com/photo-1562060726-e47264af32bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsYXlzaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="text">
          <ol class="relative border-s border-gray-200 dark:border-gray-700">
            <li class="mb-10 ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img
                  class="rounded-full shadow-lg"
                  src="https://cdn.britannica.com/38/148438-131-7A2FD02E/Maria-Telkes.jpg"
                  alt="Bonnie image"
                />
              </span>
              <div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                  just now
                </time>
                <div class="text-sm font-normal text-gray-500 dark:text-gray-300">
                  Bonnie moved{" "}
                  <a
                    href="#"
                    class="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Jese Leos
                  </a>{" "}
                  to{" "}
                  <span class="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">
                    Funny Group
                  </span>
                </div>
              </div>
            </li>
            <li class="mb-10 ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img
                  class="rounded-full shadow-lg"
                  src="https://cdn.britannica.com/38/148438-131-7A2FD02E/Maria-Telkes.jpg"
                  alt="Thomas Lean image"
                />
              </span>
              <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                <div class="items-center justify-between mb-3 sm:flex">
                  <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    2 hours ago
                  </time>
                  <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                    Thomas Lean commented on{" "}
                    <a
                      href="#"
                      class="font-semibold text-gray-900 dark:text-white hover:underline"
                    >
                      Flowbite Pro
                    </a>
                  </div>
                </div>
                <div class="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                  Hi ya'll! I wanted to share a webinar zeroheight is having
                  regarding how to best measure your design system! This is the
                  second session of our new webinar series on #DesignSystems
                  discussions where we'll be speaking about Measurement.
                </div>
              </div>
            </li>
            <li class="ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img
                  class="rounded-full shadow-lg"
                  src="https://cdn.britannica.com/38/148438-131-7A2FD02E/Maria-Telkes.jpg"
                  alt="Jese Leos image"
                />
              </span>
              <div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                  1 day ago
                </time>
                <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                  Jese Leos has changed{" "}
                  <a
                    href="#"
                    class="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Pricing page
                  </a>{" "}
                  task status to{" "}
                  <span class="font-semibold text-gray-900 dark:text-white">
                    Finished
                  </span>
                </div>
              </div>
            </li>
            <li class="mb-10 mt-5 ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img
                  class="rounded-full shadow-lg"
                  src="https://cdn.britannica.com/38/148438-131-7A2FD02E/Maria-Telkes.jpg"
                  alt="Bonnie image"
                />
              </span>
              <div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                  just now
                </time>
                <div class="text-sm font-normal text-gray-500 dark:text-gray-300">
                  Bonnie moved{" "}
                  <a
                    href="#"
                    class="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Jese Leos
                  </a>{" "}
                  to{" "}
                  <span class="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">
                    Funny Group
                  </span>
                </div>
              </div>
            </li>
            <li class="mb-10 ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img
                  class="rounded-full shadow-lg"
                  src="https://cdn.britannica.com/38/148438-131-7A2FD02E/Maria-Telkes.jpg"
                  alt="Thomas Lean image"
                />
              </span>
              <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                <div class="items-center justify-between mb-3 sm:flex">
                  <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    2 hours ago
                  </time>
                  <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                    Thomas Lean commented on{" "}
                    <a
                      href="#"
                      class="font-semibold text-gray-900 dark:text-white hover:underline"
                    >
                      Flowbite Pro
                    </a>
                  </div>
                </div>
                <div class="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                  Hi ya'll! I wanted to share a webinar zeroheight is having
                  regarding how to best measure your design system! This is the
                  second session of our new webinar series on #DesignSystems
                  discussions where we'll be speaking about Measurement.
                </div>
              </div>
            </li>
            <li class="ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img
                  class="rounded-full shadow-lg"
                  src="https://cdn.britannica.com/38/148438-131-7A2FD02E/Maria-Telkes.jpg"
                  alt="Jese Leos image"
                />
              </span>
              <div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                  1 day ago
                </time>
                <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                  Jese Leos has changed{" "}
                  <a
                    href="#"
                    class="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Pricing page
                  </a>{" "}
                  task status to{" "}
                  <span class="font-semibold text-gray-900 dark:text-white">
                    Finished
                  </span>
                </div>
              </div>
            </li>
            <li class="mb-10 mt-5 ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img
                  class="rounded-full shadow-lg"
                  src="https://cdn.britannica.com/38/148438-131-7A2FD02E/Maria-Telkes.jpg"
                  alt="Bonnie image"
                />
              </span>
              <div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                  just now
                </time>
                <div class="text-sm font-normal text-gray-500 dark:text-gray-300">
                  Bonnie moved{" "}
                  <a
                    href="#"
                    class="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Jese Leos
                  </a>{" "}
                  to{" "}
                  <span class="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">
                    Funny Group
                  </span>
                </div>
              </div>
            </li>
            <li class="mb-10 ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img
                  class="rounded-full shadow-lg"
                  src="https://cdn.britannica.com/38/148438-131-7A2FD02E/Maria-Telkes.jpg"
                  alt="Thomas Lean image"
                />
              </span>
              <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                <div class="items-center justify-between mb-3 sm:flex">
                  <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    2 hours ago
                  </time>
                  <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                    Thomas Lean commented on{" "}
                    <a
                      href="#"
                      class="font-semibold text-gray-900 dark:text-white hover:underline"
                    >
                      Flowbite Pro
                    </a>
                  </div>
                </div>
                <div class="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                  Hi ya'll! I wanted to share a webinar zeroheight is having
                  regarding how to best measure your design system! This is the
                  second session of our new webinar series on #DesignSystems
                  discussions where we'll be speaking about Measurement.
                </div>
              </div>
            </li>
            <li class="ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img
                  class="rounded-full shadow-lg"
                  src="https://cdn.britannica.com/38/148438-131-7A2FD02E/Maria-Telkes.jpg"
                  alt="Jese Leos image"
                />
              </span>
              <div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                  1 day ago
                </time>
                <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                  Jese Leos has changed{" "}
                  <a
                    href="#"
                    class="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Pricing page
                  </a>{" "}
                  task status to{" "}
                  <span class="font-semibold text-gray-900 dark:text-white">
                    Finished
                  </span>
                </div>
              </div>
            </li>
          </ol>

          <h2 className="sub-title">Gallery</h2>
          <div className="images">
            <img
              src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsYXlzaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1549154425-7b519f2b92d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFsYXlzaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1566914447826-bf04e54bf1be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFsYXlzaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1574218732130-6b19257fd9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbGF5c2lhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1545424436-1be2b5c0d0fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbGF5c2lhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="img">
          <img
            src="https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="text">
          <h1 className="title">Dubai</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius amet
            illo odio, provident nam numquam modi, accusamus expedita, pariatur
            nemo excepturi inventore consequuntur praesentium! Autem atque
            porro, quod, rerum libero velit, sit fuga id repellendus ipsum
            deleniti, impedit maxime sequi tempore! Nulla cupiditate tenetur
            aperiam quod sapiente nobis, ullam facere dolor numquam, quisquam
            fugiat, quibusdam ratione dolorem odio iusto doloremque?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            ullam, tenetur veniam atque molestiae et nemo obcaecati soluta.
            Deleniti labore commodi ducimus numquam fugiat. Iusto maiores odit,
            officiis amet rem.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Porro
            quisquam illo, optio doloremque velit quis pariatur provident, nisi
            perferendis saepe unde quia voluptatum, fuga, tempora eveniet nam.
            Fugiat et recusandae natus distinctio laborum quia illo ullam ipsam,
            a voluptatem quis velit aut sequi voluptatibus quae reprehenderit
            vitae, rerum? Nam iure, harum, ullam et voluptates ea excepturi
            sequi inventore rem? Voluptatem earum explicabo reiciendis,
            doloribus praesentium reprehenderit eligendi iure placeat corporis?
          </p>
          <h2 className="sub-title">Gallery</h2>
          <div className="images">
            <img
              src="https://images.unsplash.com/photo-1523816572-a1a23d1a67b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZHViYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <img
              src="https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHViYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGR1YmFpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHViYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1489516408517-0c0a15662682?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1YmFpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
      </div> */}
      <div className="">
        <h2 style={{ marginTop: "100px", padding: "10px",fontWeight:'600' }}>Honors and Awards</h2>
        <BasicTimeline />
      </div>
      <div>
        <h2 style={{ marginTop: "60px", padding: "10px",fontWeight:'600' }}>Publications</h2>
        <ol>
          <li>
            <p>(‒)-β-Pinene-based π-Allylpalladium Complex-Catalyzed Asymmetric Allylation of Bis-Imines. Nallasivam, J. L.; Fernandes R. A.* ChemistrySelect, 2020 doi.org/10.1002/slct.202002599).</p>
          </li>
        </ol>
      </div>
    </div>
  );
}

function BasicTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {xyz.guide.map((item) => (
        <TimelineItem key={item.year}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <span style={{ fontWeight: "bolder" }}>{item.year}</span>
            <br />
            {item.awards}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default Jothi;

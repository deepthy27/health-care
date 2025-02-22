import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Avatar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MailIcon from "@mui/icons-material/Mail";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HotelIcon from "@mui/icons-material/Hotel";
import ProfilePage from "./ProfilePage";
import WellnessGoals from "./WellnessGoals";
import Messages from "./Messages";
import MetricsDashboard from "./MetricsDashboard";

const drawerWidth = 250; // Sidebar width

const HealthDashboard = () => {
  const [healthTip, setHealthTip] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Dashboard"); // Default section

  const navigate = useNavigate();

  useEffect(() => {
    // Mock health tips
    const tips = [
      "Stay hydrated by drinking at least 8 glasses of water daily.",
      "Regular exercise improves mental health and reduces stress.",
      "A good night's sleep is essential for overall wellness.",
      "Eat a balanced diet rich in fruits and vegetables.",
      "Take short breaks to stretch and move during work hours.",
    ];
    setHealthTip(tips[Math.floor(Math.random() * tips.length)]);
  }, []);

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token
    navigate("/"); // Redirect to login
  };

  // Toggle Sidebar
  const toggleSidebar = (open) => () => {
    setSidebarOpen(open);
  };

  // Handle Section Change
  const handleSectionChange = (section) => {
    setSelectedSection(section);
    setSidebarOpen(false); // Close sidebar on selection
  };

  return (
    <>
      {/* AppBar with dynamic positioning */}
      <AppBar
        position="static"
        sx={{
          width: sidebarOpen ? `calc(100% - ${drawerWidth}px)` : "100%",
          marginLeft: sidebarOpen ? `${drawerWidth}px` : 0,
          transition: "margin 0.3s ease-in-out, width 0.3s ease-in-out",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Health & Wellness Dashboard
          </Typography>
          <Button
            color="inherit"
            startIcon={<ExitToAppIcon />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Sidebar (Drawer) */}
      <Drawer anchor="left" open={sidebarOpen} onClose={toggleSidebar(false)}>
        <Box sx={{ width: drawerWidth }} role="presentation">
          {/* Sidebar Header */}
          <Box
            sx={{
              bgcolor: "primary.main",
              color: "white",
              p: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h6">Welcome, User!</Typography>
          </Box>
          <Divider />

          {/* Sidebar Menu */}
          <List>
            {[
              { text: "Dashboard", icon: <DashboardIcon color="primary" /> },
              {
                text: "My Profile",
                icon: <AccountCircleIcon color="secondary" />,
              },
              {
                text: "Wellness Goals",
                icon: <FitnessCenterIcon color="success" />,
              },
              { text: "Messages", icon: <MailIcon color="error" /> },
            ].map((item) => (
              <ListItem
                button
                key={item.text}
                selected={selectedSection === item.text}
                onClick={() => handleSectionChange(item.text)}
                sx={{
                  bgcolor:
                    selectedSection === item.text ? "#e0e0e0" : "transparent",
                  "&.Mui-selected": { bgcolor: "#1976d2", color: "white" },
                  "&.Mui-selected:hover": { bgcolor: "#1565c0" },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: selectedSection === item.text ? "white" : "inherit",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content Based on Selection */}
      <Container
        maxWidth="md"
        sx={{
          mt: 4,
          transition: "margin 0.3s ease-in-out",
          marginLeft: sidebarOpen ? `${drawerWidth}px` : 0,
        }}
        position = "relative"
        left= "100px"
      >
        {selectedSection === "Dashboard" && <MetricsDashboard/>}

        {selectedSection === "My Profile" && <ProfilePage />}

        {selectedSection === "Wellness Goals" && <WellnessGoals />}

        {selectedSection === "Messages" && <Messages />}
      </Container>
    </>
  );
};

export default HealthDashboard;

import React from "react";
import { AppBar, Toolbar, Button, Typography, Container, Grid, Box, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MedicationIcon from "@mui/icons-material/Medication";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* 🌍 Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: "#1976D2" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Bayer Health Care
          </Typography>
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* 🎯 Hero Section */}
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ mt: 5, textAlign: "center" }}>
          {/* Left Side: Text Content */}
          <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Typography variant="h3" sx={{ fontWeight: "bold", color: "#1976D2", mb: 2 }}>
              Your Health, Our Priority
            </Typography>
            <Typography variant="h6" sx={{ color: "gray", mb: 3 }}>
              Access your **Health Goals, Medications, and Personal Information** all in one place.
            </Typography>
            <Button variant="contained" color="primary" onClick={() => navigate("/login")} sx={{ px: 5, py: 1.5 }}>
              Get Started
            </Button>
          </Grid>

          {/* Right Side: Image */}
          <Grid item xs={12} md={6}>
            <img
              src="https://img.freepik.com/free-photo/close-up-doctor-with-stethoscope_23-2149191355.jpg?semt=ais_hybrid"
              alt="Healthcare"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* 💡 Features Section */}
      <Container maxWidth="lg" sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#1976D2", mb: 3 }}>
          Why Choose Bayer Health Care?
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <LocalHospitalIcon sx={{ fontSize: 50, color: "#1976D2" }} />
                <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                  Personalized Health Goals
                </Typography>
                <Typography>Track your progress and stay healthy with our smart dashboard.</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <MedicationIcon sx={{ fontSize: 50, color: "#1976D2" }} />
                <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                  Medication Reminders
                </Typography>
                <Typography>Never miss a dose with our automatic medication reminders.</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <HealthAndSafetyIcon sx={{ fontSize: 50, color: "#1976D2" }} />
                <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                  Secure & Private
                </Typography>
                <Typography>We prioritize data security to keep your health information safe.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* ⭐ Testimonials Section */}
      <Container maxWidth="lg" sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#1976D2", mb: 3 }}>
          What Our Users Say
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3, p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                "Amazing Experience!"
              </Typography>
              <Typography>
                "Bayer Health Care has transformed the way I track my medications. Highly recommended!"
              </Typography>
              <Typography sx={{ mt: 1, fontWeight: "bold", color: "#1976D2" }}>- Sarah Johnson</Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3, p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                "Super Helpful!"
              </Typography>
              <Typography>
                "This platform makes it so easy to manage my health goals and appointments. Love it!"
              </Typography>
              <Typography sx={{ mt: 1, fontWeight: "bold", color: "#1976D2" }}>- John Doe</Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* 📞 Footer Section */}
      <Box sx={{ backgroundColor: "#1976D2", color: "white", mt: 5, p: 3, textAlign: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Contact Us
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <PhoneIcon sx={{ fontSize: 30 }} /> <Typography>+1 234 567 890</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <EmailIcon sx={{ fontSize: 30 }} /> <Typography>support@bayerhealth.com</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <LocationOnIcon sx={{ fontSize: 30 }} /> <Typography>New York, USA</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;

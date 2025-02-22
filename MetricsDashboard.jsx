import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  LinearProgress,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HotelIcon from "@mui/icons-material/Hotel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample weekly step count data
const stepData = [
  { day: "Mon", steps: 5000 },
  { day: "Tue", steps: 7000 },
  { day: "Wed", steps: 8000 },
  { day: "Thu", steps: 6500 },
  { day: "Fri", steps: 9000 },
  { day: "Sat", steps: 12000 },
  { day: "Sun", steps: 11000 },
];

// Health Tips
const healthTips = [
  "Walk at least 10,000 steps daily to improve cardiovascular health.",
  "Engage in 30 minutes of moderate exercise daily to stay active.",
  "Maintain a consistent sleep schedule for better recovery.",
  "Stay hydrated and drink at least 2L of water daily.",
  "Avoid screen time 30 minutes before sleep for better rest.",
  "Eat a balanced diet rich in proteins and fiber to stay energetic.",
  "Stretch before and after workouts to prevent injuries.",
];

const MetricsDashboard = () => {
  return (
    <Grid
      container
      spacing={5}
      sx={{
        display: "flex",
        alignItems: "flex-start",
        position: "absolute",
        right: "10px",
      }}
    >
      {/* Left Side Metrics (Takes 8 columns) */}
      <Grid item xs={12} md={12}>
        <Grid container spacing={3}>
          {/* Steps */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ p: 2, height: "100%" }}>
              <CardContent>
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ bgcolor: "#1976d2", mr: 2 }}>
                    <DirectionsWalkIcon />
                  </Avatar>
                  <Typography variant="h6">Steps</Typography>
                </Box>
                <Typography variant="h5" sx={{ mt: 1 }}>
                  7,500 / 10,000
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={(7500 / 10000) * 100}
                  sx={{ mt: 1, height: 10, borderRadius: 5 }}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* Active Time */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ p: 2, height: "100%" }}>
              <CardContent>
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ bgcolor: "#ff9800", mr: 2 }}>
                    <AccessTimeIcon />
                  </Avatar>
                  <Typography variant="h6">Active Time</Typography>
                </Box>
                <Typography variant="h5" sx={{ mt: 1 }}>
                  45 / 60 mins
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={(45 / 60) * 100}
                  sx={{ mt: 1, height: 10, borderRadius: 5 }}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* Sleep */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ p: 2, height: "100%" }}>
              <CardContent>
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ bgcolor: "#4caf50", mr: 2 }}>
                    <HotelIcon />
                  </Avatar>
                  <Typography variant="h6">Sleep</Typography>
                </Box>
                <Typography variant="h5" sx={{ mt: 1 }}>
                  7h 30m / 8h
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={(7.5 / 8) * 100}
                  sx={{ mt: 1, height: 10, borderRadius: 5 }}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* Weekly Steps Graph */}
          <Grid item xs={12}>
            <Card sx={{ p: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Weekly Step Count
                </Typography>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={stepData}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="steps" fill="#1976d2" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Preventive Care Reminders */}
          <Grid item xs={12}>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Preventive Care Reminders</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  - Annual Health Check-up: Due in 10 days
                </Typography>
                <Typography>- Dental Cleaning: Schedule in 2 months</Typography>
                <Typography>
                  - Vaccination: Flu shot recommended this season
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Health Tips</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {healthTips.length > 0 ? (
                  healthTips.map((tip, index) => (
                    <Typography key={index}>- {tip}</Typography>
                  ))
                ) : (
                  <Typography>No tips available.</Typography>
                )}
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MetricsDashboard;

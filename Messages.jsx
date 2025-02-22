import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Paper,
} from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const Messages = () => {
  // Sample Health Provider Messages
  const [messages] = useState([
    {
      id: 1,
      title: "Annual Health Check-up Reminder",
      text: "Your annual health check-up is due in 10 days. Book your appointment now!",
      type: "reminder",
      date: "Feb 15, 2025",
    },
    {
      id: 2,
      title: "Special Offer on Wellness Packages",
      text: "Get 20% off on our premium wellness package. Offer valid until March 1, 2025.",
      type: "offer",
      date: "Feb 12, 2025",
    },
    {
      id: 3,
      title: "Flu Vaccination Available",
      text: "Stay protected! Flu shots are now available at your nearest health center.",
      type: "announcement",
      date: "Feb 10, 2025",
    },
    {
      id: 4,
      title: "Hydration Tip",
      text: "Drink at least 8 glasses of water daily to stay hydrated and healthy!",
      type: "health tip",
      date: "Feb 8, 2025",
    },
  ]);

  return (
    <Card sx={{ p: 3, maxWidth: 600, mx: "auto", mt: 4 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          📩 Messages from Your Health Provider
        </Typography>

        {/* Messages List */}
        <List>
          {messages.map((msg) => (
            <ListItem key={msg.id} sx={{ mb: 2 }}>
              <Avatar sx={{ bgcolor: "#1976D2", mr: 2 }}>
                <LocalHospitalIcon />
              </Avatar>
              <Paper sx={{ p: 2, width: "100%", borderRadius: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {msg.title}
                </Typography>
                <Typography variant="body2">{msg.text}</Typography>
                <Typography variant="caption" sx={{ color: "gray", display: "block", mt: 1 }}>
                  {msg.date}
                </Typography>
              </Paper>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Messages;

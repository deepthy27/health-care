import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Grid,
  IconButton,
  Button,
  Chip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const ProfilePage = () => {
  // Sample User Data (Should be fetched from API in real case)
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "********", // Hidden for security
    status: "Active",
    dob: "1995-06-15",
    gender: "Male",
    address: "123 Main St, City, Country",
    medications: [{ id: 1, name: "Paracetamol" }, { id: 2, name: "Ibuprofen" }],
    allergies: [{ id: 1, name: "Peanuts" }, { id: 2, name: "Dust" }],
  });

  const [isEditing, setIsEditing] = useState(false); // Edit Mode Toggle
  const [newMedication, setNewMedication] = useState("");
  const [newAllergy, setNewAllergy] = useState("");

  // Handle Input Change for Address
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Toggle Edit Mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Save Changes
  const handleSave = () => {
    setIsEditing(false);
    console.log("Updated Data:", userData); // You can send this to backend
  };

  // Handle Medication Add
  const handleAddMedication = () => {
    if (newMedication.trim() !== "") {
      setUserData({
        ...userData,
        medications: [...userData.medications, { id: Date.now(), name: newMedication }],
      });
      setNewMedication(""); // Clear input
    }
  };

  // Handle Allergy Add
  const handleAddAllergy = () => {
    if (newAllergy.trim() !== "") {
      setUserData({
        ...userData,
        allergies: [...userData.allergies, { id: Date.now(), name: newAllergy }],
      });
      setNewAllergy(""); // Clear input
    }
  };

  // Handle Medication Remove
  const handleRemoveMedication = (id) => {
    setUserData({
      ...userData,
      medications: userData.medications.filter((med) => med.id !== id),
    });
  };

  // Handle Allergy Remove
  const handleRemoveAllergy = (id) => {
    setUserData({
      ...userData,
      allergies: userData.allergies.filter((allergy) => allergy.id !== id),
    });
  };

  return (
    <Card sx={{ p: 2, maxWidth: 600, mx: "auto", mt: 4 }}>
      <CardContent>
        <Typography variant="h6" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          My Profile
          <IconButton onClick={toggleEdit} color="primary">
            {isEditing ? <CancelIcon /> : <EditIcon />}
          </IconButton>
        </Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          {/* First Name */}
          <Grid item xs={6}>
            <TextField label="First Name" value={userData.firstName} fullWidth disabled />
          </Grid>

          {/* Last Name */}
          <Grid item xs={6}>
            <TextField label="Last Name" value={userData.lastName} fullWidth disabled />
          </Grid>

          {/* Email */}
          <Grid item xs={12}>
            <TextField label="Email" value={userData.email} fullWidth disabled />
          </Grid>

          {/* Password */}
          <Grid item xs={12}>
            <TextField label="Password" type="password" value={userData.password} fullWidth disabled />
          </Grid>

          {/* Status */}
          <Grid item xs={6}>
            <TextField label="Status" value={userData.status} fullWidth disabled />
          </Grid>

          {/* Date of Birth */}
          <Grid item xs={6}>
            <TextField label="Date of Birth" value={userData.dob} fullWidth disabled />
          </Grid>

          {/* Gender */}
          <Grid item xs={12}>
            <TextField label="Gender" value={userData.gender} fullWidth disabled />
          </Grid>

          {/* Address (Editable) */}
          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              value={userData.address}
              fullWidth
              onChange={handleChange}
              disabled={!isEditing}
            />
          </Grid>

          {/* Medications (Editable with Chips) */}
          <Grid item xs={12}>
            <Typography variant="body1">Medications</Typography>
            <Grid container spacing={1}>
              {userData.medications.map((med) => (
                <Grid item key={med.id}>
                  <Chip
                    label={med.name}
                    onDelete={isEditing ? () => handleRemoveMedication(med.id) : undefined}
                    color="primary"
                  />
                </Grid>
              ))}
            </Grid>
            {isEditing && (
              <Grid container spacing={1} sx={{ mt: 1 }}>
                <Grid item xs={8}>
                  <TextField
                    label="Add Medication"
                    value={newMedication}
                    onChange={(e) => setNewMedication(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" onClick={handleAddMedication} startIcon={<AddIcon />} fullWidth>
                    Add
                  </Button>
                </Grid>
              </Grid>
            )}
          </Grid>

          {/* Allergies (Editable with Chips) */}
          <Grid item xs={12}>
            <Typography variant="body1">Allergies</Typography>
            <Grid container spacing={1}>
              {userData.allergies.map((allergy) => (
                <Grid item key={allergy.id}>
                  <Chip
                    label={allergy.name}
                    onDelete={isEditing ? () => handleRemoveAllergy(allergy.id) : undefined}
                    color="secondary"
                  />
                </Grid>
              ))}
            </Grid>
            {isEditing && (
              <Grid container spacing={1} sx={{ mt: 1 }}>
                <Grid item xs={8}>
                  <TextField
                    label="Add Allergy"
                    value={newAllergy}
                    onChange={(e) => setNewAllergy(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" onClick={handleAddAllergy} startIcon={<AddIcon />} fullWidth>
                    Add
                  </Button>
                </Grid>
              </Grid>
            )}
          </Grid>

          {/* Save Button (Visible Only in Edit Mode) */}
          {isEditing && (
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
              <Button onClick={handleSave} variant="contained" color="primary" startIcon={<SaveIcon />}>
                Save
              </Button>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProfilePage;
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Grid,
  Button,
  Chip,
  TextField,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

const WellnessGoals = () => {
  // Sample Goals Data
  const [goals, setGoals] = useState({
    stepsGoal: 10000,
    caloriesGoal: 2000,
    meditationGoal: 15, // Minutes per day
    waterIntakeGoal: 8, // Glasses per day
    workoutGoal: "5 workouts per week",
    sleepQualityGoal: "Consistent 7+ hours sleep",
  });

  const [progress, setProgress] = useState({
    stepsCompleted: 7500,
    caloriesConsumed: 1800,
    meditationCompleted: 10,
    waterDrank: 5,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editableGoals, setEditableGoals] = useState(goals);

  // Handle Goal Input Change
  const handleChange = (e) => {
    setEditableGoals({ ...editableGoals, [e.target.name]: e.target.value });
  };

  // Toggle Edit Mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (!isEditing) setEditableGoals(goals);
  };

  // Save Updated Goals
  const handleSave = () => {
    setGoals(editableGoals);
    setIsEditing(false);
  };

  return (
    <Card sx={{ p: 3, maxWidth: 700, mx: "auto", mt: 4 }}>
      <CardContent>
        {/* Title with Edit Button */}
        <Typography
          variant="h5"
          sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          Wellness Goals
          <IconButton onClick={toggleEdit} color="primary">
            {isEditing ? <SaveIcon /> : <EditIcon />}
          </IconButton>
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {/* Steps Goal */}
          <Grid item xs={12}>
            <Typography>Daily Steps Goal: {goals.stepsGoal} steps</Typography>
            <LinearProgress variant="determinate" value={(progress.stepsCompleted / goals.stepsGoal) * 100} />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {progress.stepsCompleted} / {goals.stepsGoal} steps completed
            </Typography>
          </Grid>

          {/* Calorie Goal */}
          <Grid item xs={12}>
            <Typography>Calorie Intake Goal: {goals.caloriesGoal} kcal</Typography>
            <LinearProgress variant="determinate" value={(progress.caloriesConsumed / goals.caloriesGoal) * 100} color="secondary" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {progress.caloriesConsumed} / {goals.caloriesGoal} kcal consumed
            </Typography>
          </Grid>

          {/* Meditation Goal */}
          <Grid item xs={12}>
            <Typography>Meditation Goal: {goals.meditationGoal} min</Typography>
            <LinearProgress variant="determinate" value={(progress.meditationCompleted / goals.meditationGoal) * 100} color="success" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {progress.meditationCompleted} / {goals.meditationGoal} min completed
            </Typography>
          </Grid>

          {/* Water Intake Goal */}
          <Grid item xs={12}>
            <Typography>Water Intake Goal: {goals.waterIntakeGoal} glasses</Typography>
            <LinearProgress variant="determinate" value={(progress.waterDrank / goals.waterIntakeGoal) * 100} color="info" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {progress.waterDrank} / {goals.waterIntakeGoal} glasses drank
            </Typography>
          </Grid>

          {/* Streaks & Achievements */}
          <Grid item xs={12}>
            <Typography variant="h6">Streaks & Achievements</Typography>
            <Chip label="10-Day Workout Streak" color="success" sx={{ mr: 1, mb: 1 }} />
            <Chip label="5 Days of Meditation" color="primary" sx={{ mr: 1, mb: 1 }} />
            <Chip label="Hydration Champ" color="info" sx={{ mr: 1, mb: 1 }} />
          </Grid>

          {/* Editable Goals */}
          {isEditing && (
            <>
              <Grid item xs={12}>
                <TextField
                  label="Steps Goal"
                  name="stepsGoal"
                  value={editableGoals.stepsGoal}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Calories Goal"
                  name="caloriesGoal"
                  value={editableGoals.caloriesGoal}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Meditation Goal (min)"
                  name="meditationGoal"
                  value={editableGoals.meditationGoal}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Water Intake Goal (glasses)"
                  name="waterIntakeGoal"
                  value={editableGoals.waterIntakeGoal}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Workout Goal"
                  name="workoutGoal"
                  value={editableGoals.workoutGoal}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Sleep Quality Goal"
                  name="sleepQualityGoal"
                  value={editableGoals.sleepQualityGoal}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={handleSave} variant="contained" color="primary" startIcon={<SaveIcon />}>
                  Save Goals
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WellnessGoals;

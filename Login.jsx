import React, { useState } from "react";
import { 
  Container, TextField, Button, Typography, Box, Snackbar, Alert, Link, CircularProgress 
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Import custom hook

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState("error");

  const navigate = useNavigate();
  const { login, loading } = useAuth(); // Use custom hook

  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validatePassword = (password) => password.length >= 6;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors((prev) => ({ ...prev, email: !validateEmail(e.target.value) ? "Invalid email format" : "" }));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors((prev) => ({
      ...prev,
      password: !validatePassword(e.target.value)
        ? "Password must be at least 6 characters"
        : "",
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password || errors.email || errors.password) return;

    const response = await login(email, password);
    setMessage(response.message);
    setAlertType(response.success ? "success" : "error");
    setAlertOpen(true);

    if (response.success) {
      setTimeout(() => navigate("/health-dashboard"), 1000);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>Login</Typography>
        <form onSubmit={handleLogin}>
          <TextField 
            label="Email" fullWidth margin="normal" variant="outlined" required
            value={email} onChange={handleEmailChange}
            error={!!errors.email} helperText={errors.email}
          />
          <TextField 
            label="Password" type="password" fullWidth margin="normal" variant="outlined" required
            value={password} onChange={handlePasswordChange}
            error={!!errors.password} helperText={errors.password}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}
            disabled={!email || !password || !!errors.email || !!errors.password || loading}
          >
            {loading ? <CircularProgress size={24} /> : "Login"}
          </Button>
        </form>

        {/* Forgot Password & Sign Up Links */}
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Link href="#" onClick={() => navigate("/forgot-password")} underline="hover">
            Forgot Password?
          </Link>
          <Typography sx={{ mt: 1 }}>
            Don't have an account?{" "}
            <Link href="#" onClick={() => navigate("/register")} underline="hover">
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>

      {/* Snackbar for Alerts */}
      <Snackbar 
        open={alertOpen} 
        autoHideDuration={3000} 
        onClose={() => setAlertOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={() => setAlertOpen(false)} severity={alertType} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;

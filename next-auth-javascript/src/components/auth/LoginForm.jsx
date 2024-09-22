"use client";

// openssl rand -hex 32

import { doCredentialLogin } from "@/app/actions";
import { Alert, Button, Divider, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(event.currentTarget);
      const response = await doCredentialLogin(formData);
      if (response?.error) {
        setError(response.error.message);
      } else {
        router.push("/products");
      }
    } catch (e) {
      setError("Check your Credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Typography variant="h5" align="center" gutterBottom>
        Hey, time to Sign In
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <TextField
          label="Email Address"
          type="email"
          name="email"
          fullWidth
          required
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          fullWidth
          required
          variant="outlined"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Credential Login"}
        </Button>
      </form>
      <Divider sx={{ my: 3 }} />
      <SocialLogin />
    </>
  );
};

export default LoginForm;

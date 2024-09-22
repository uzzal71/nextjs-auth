"use client";

import { Alert, Button, Divider, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SocialLogin from "./SocialLogin";

const RegistrationForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");

      const response = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response?.error) {
        setError(response.error.message);
      } else {
        router.push("/");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Typography variant="h5" align="center" gutterBottom>
        Hey, time to Sign up
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
          label="Name"
          type="text"
          name="name"
          fullWidth
          required
          variant="outlined"
        />
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
          {loading ? "Loading..." : "Sign up"}
        </Button>
      </form>
      <Divider sx={{ my: 3 }} />
      <SocialLogin />
    </>
  );
};

export default RegistrationForm;

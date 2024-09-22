import LoginForm from "@/components/auth/LoginForm";
import { Box, Paper, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "gray.100",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: "400px",
          width: "100%",
          borderRadius: 2,
        }}
      >
        <LoginForm />
        <Typography variant="body2" sx={{ mt: 2 }} align="center">
          Don't you have an account?{" "}
          <Link href="/register" underline="hover">
            Register
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}

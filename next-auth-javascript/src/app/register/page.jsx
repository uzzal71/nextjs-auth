import RegistrationForm from "@/components/auth/RegistrationForm";
import { Box, Paper, Typography } from "@mui/material";
import Link from "next/link";

const RegistrationPage = () => {
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
        <RegistrationForm />
        <Typography variant="body2" sx={{ mt: 2 }} align="center">
          Already have an account?{" "}
          <Link href="/" underline="hover">
            Login
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default RegistrationPage;

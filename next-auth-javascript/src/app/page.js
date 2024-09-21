import LoginForm from "@/components/auth/LoginForm";
import { Box, Container } from "@mui/material";

export default function Home() {
  return (
    <Container
      maxWidth="100%"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f1f1f1",
      }}
    >
      <Box
        sx={{
          minWidth: "420px",
          minHeight: "auto",
          padding: "20px",
          backgroundColor: "#ffffff",
        }}
      >
        <LoginForm />
      </Box>
    </Container>
  );
}

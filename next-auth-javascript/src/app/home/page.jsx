import { auth } from "@/auth";
import Logout from "@/components/auth/Logout";
import { Avatar, Box, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import DefaultImage from "/public/avatars/default.png";

const HomePage = async () => {
  const session = await auth();

  if (!session?.user) redirect("/");

  const userImage = session?.user?.image || DefaultImage;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      m={4}
    >
      {/* Welcome Text */}
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome, {session?.user?.name}
      </Typography>

      {/* User Image */}
      <Avatar
        alt={session?.user?.name || "User Image"}
        src={userImage.src} // Use .src for Next.js Image with Avatar
        sx={{ width: 72, height: 72, mb: 2 }}
      />

      {/* Logout Button */}
      <Logout />
    </Box>
  );
};

export default HomePage;

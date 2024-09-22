import { auth } from "@/auth";
import Logout from "@/components/auth/Logout";
import { CircleUser } from "@mui/icons-material"; // Material-UI equivalent icon
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import DefaultImage from "/public/avatars/default.png";

const Navbar = async () => {
  const session = await auth();
  const loggedInUser = session?.user;
  const userName = loggedInUser?.name;
  const userImage = session?.user?.image ?? DefaultImage;

  return (
    <AppBar position="static" sx={{ backgroundColor: "slategray" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            Product App
          </Link>
        </Typography>

        <Box component="nav">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {userName ? (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Link
                  href="/dashboard"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {userImage ? (
                    <Avatar
                      src={userImage}
                      alt={userName}
                      sx={{ width: 30, height: 30 }}
                    />
                  ) : (
                    <IconButton>
                      <CircleUser
                        sx={{ color: "white", width: 30, height: 30 }}
                      />
                    </IconButton>
                  )}
                </Link>
                <Typography sx={{ mx: 1 }}>|</Typography>
                <Logout />
              </Box>
            ) : (
              <>
                <Button color="inherit">
                  <Link
                    href="/login"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Login
                  </Link>
                </Button>
                <Button color="inherit">
                  <Link
                    href="/register"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Register
                  </Link>
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

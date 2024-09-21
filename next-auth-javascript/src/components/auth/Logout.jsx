import { doLogout } from "@/app/actions";
import { Box, Button } from "@mui/material";

const Logout = () => {
  return (
    <Box
      component="form"
      action={doLogout}
      sx={{ mt: 2 }} // Add margin-top if needed
    >
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: "blue", // Customize button color
          color: "white",
          padding: "8px 16px",
          borderRadius: "8px",
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Logout;

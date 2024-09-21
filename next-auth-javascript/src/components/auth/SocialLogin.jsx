import { doSocialLogin } from "@/app/actions";
import { Box, Button } from "@mui/material";

const SocialLogin = () => {
  return (
    <Box
      component="form"
      action={doSocialLogin}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mt: 2, // margin top to add some spacing if needed
      }}
    >
      {/* Google Button */}
      <Button
        type="submit"
        name="action"
        value="google"
        variant="contained"
        sx={{
          backgroundColor: "pink",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          margin: "0 8px",
          fontSize: "16px",
          "&:hover": {
            backgroundColor: "darkred",
          },
        }}
      >
        Sign In With Google
      </Button>

      {/* Github Button */}
      <Button
        type="submit"
        name="action"
        value="github"
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          margin: "0 8px",
          fontSize: "16px",
          "&:hover": {
            backgroundColor: "gray",
          },
        }}
      >
        Sign In With Github
      </Button>
    </Box>
  );
};

export default SocialLogin;

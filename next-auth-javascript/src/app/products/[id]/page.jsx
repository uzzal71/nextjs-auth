import { getProductById } from "@/data/products";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

const ProductDetailsPage = ({ params: { id } }) => {
  const product = getProductById(id);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
      }}
    >
      <Box sx={{ textAlign: "center", marginBottom: 3 }}>
        <Typography variant="h3" component="p" sx={{ fontSize: "5rem" }}>
          {product.image}
        </Typography>
        <Typography variant="h5" component="p" sx={{ marginTop: 2 }}>
          {product.name}
        </Typography>
        <Typography variant="body1" sx={{ marginY: 3 }}>
          {product.details}
        </Typography>
        <Button
          component={Link}
          href={`/products/${id}/checkout`}
          variant="contained"
          color="primary"
          sx={{ textTransform: "none" }}
        >
          Buy It
        </Button>
      </Box>
    </Container>
  );
};

export default ProductDetailsPage;

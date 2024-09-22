import { getAllProducts } from "@/data/products";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";

const ProductList = () => {
  const products = getAllProducts();

  if (!products || products.length === 0) {
    return <Typography>No products available.</Typography>;
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
      }}
    >
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`} passHref>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              marginBottom: 2,
              padding: 2,
              border: "1px solid #ddd",
              borderRadius: 2,
              width: "100%",
              maxWidth: "500px",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <Typography variant="h6" component="p">
              {product.image} - {product.name}
            </Typography>
          </Box>
        </Link>
      ))}
    </Container>
  );
};

export default ProductList;

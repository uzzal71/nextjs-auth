import BasicSelect from "@/components/ui/BasicSelect";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ minWidth: 120 }}>
      <BasicSelect />
      <BasicSelect />
      <BasicSelect />
    </Container>
  );
}

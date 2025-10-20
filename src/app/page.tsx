import HomeMainContent from "@/components/HomeMainContent";
import { Container } from "@mui/material";


export default function Home() {
  return (
    <Container component="div" disableGutters maxWidth={false}>
        <HomeMainContent />
    </Container>
  );
}

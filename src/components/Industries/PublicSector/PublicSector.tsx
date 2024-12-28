import { Container, Title, Image } from "@mantine/core";
import { PublicSectorBanner } from "../../../assets/images";

export const PublicSector: React.FC = () => {
  return (
    <Container>
      <Image src={PublicSectorBanner} />
      <Title order={3}>
        Public Sector
      </Title>
    </Container>
  );
};

export default PublicSector;

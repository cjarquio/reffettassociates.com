import { Container, Title, Image } from "@mantine/core";
import { PrivateSectorBanner } from "../../../assets/images";

export const PrivateSector: React.FC = () => {
  return (
    <Container>
      <Image src={PrivateSectorBanner} />
      <Title order={3}>
        PrivateSector
      </Title>
    </Container>
  );
};

export default PrivateSector;

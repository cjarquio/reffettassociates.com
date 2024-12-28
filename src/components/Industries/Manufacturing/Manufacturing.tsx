import { Container, Title, Image } from "@mantine/core";
import { ManufacturingBanner } from "../../../assets/images";

export const Manufacturing: React.FC = () => {
  return (
    <Container>
      <Image src={ManufacturingBanner} />
      <Title order={3}>
        Manufacturing
      </Title>
    </Container>
  );
};

export default Manufacturing;

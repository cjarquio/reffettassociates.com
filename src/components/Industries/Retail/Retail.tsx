import { Container, Title, Image } from "@mantine/core";
import { RetailBanner } from "../../../assets/images";

export const Retail: React.FC = () => {
  return (
    <Container>
      <Image src={RetailBanner} />
      <Title order={3}>Retail</Title>
    </Container>
  );
};

export default Retail;

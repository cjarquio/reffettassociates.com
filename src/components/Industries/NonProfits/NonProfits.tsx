import { Container, Title, Image } from "@mantine/core";
import { NonProfitBanner } from "../../../assets/images";

export const NonProfits: React.FC = () => {
  return (
    <Container>
      <Image src={NonProfitBanner} />
      <Title order={3}>
        NonProfits
      </Title>
    </Container>
  );
};

export default NonProfits;

import { Container, Title, Image } from "@mantine/core";
import { GovernmentContractingBanner } from "../../../assets/images";

export const GovernmentContracting: React.FC = () => {
  return (
    <Container>
      <Image src={GovernmentContractingBanner} />
      <Title order={3}>Government</Title>
    </Container>
  );
};

export default GovernmentContracting;

import { Container } from "@mantine/core";
import "@mantine/core/styles.css";
import ContactMap from "./ContactMap";

export const Contact: React.FC = () => {
  return (
    <Container size={"60%"}>
      <ContactMap />
    </Container>
  );
};

export default Contact;

import { Container, Title } from "@mantine/core";
import ContactMap from "./ContactMap";
import { ContactUsForm } from "./ContactUsForm/ContactUsForm";

export const Contact: React.FC = () => {
  return (
    <Container fluid w={"99vw"}>
      <Container size={"40%"}>
        <Title order={3} style={{ textAlign: "center" }}>
          Contact Reffett Associates directly at 425.637.2993 or 703.351.5062
        </Title>
        <ContactMap />
      </Container>
      {/* Add Blue underline below title */}
      <Container size={"50%"}>
        <ContactUsForm />
      </Container>
    </Container>
  );
};

export default Contact;

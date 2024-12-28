import { Container, Title } from "@mantine/core";
import ContactMap from "./ContactMap";
import classes from "./Contact.module.css";

export const Contact: React.FC = () => {
  return (
    <Container className={classes.root}>
      <ContactMap />
      {/* Add Blue underline belew title */}
      <Title order={3}>
        Contact Reffett Associates directly at 425.637.2993 or 703.351.5062
      </Title>
      {/* TODO: Add contact form */}
    </Container>
  );
};

export default Contact;

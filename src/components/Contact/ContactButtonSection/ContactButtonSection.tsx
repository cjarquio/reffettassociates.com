import { Container, Title, Text, Button } from "@mantine/core";
import classes from "./ContactButtonSection.module.css";

export const Contact: React.FC = () => {
  return (
    <Container size={"md"} className={classes.contactContainer}>
      <Title order={2} style={{ textAlign: "center" }}>
        Let's Work Together
      </Title>
      <Text size="lg" ta={"center"} style={{ padding: "2rem 4rem" }}>
        Our team is comprised of former executives with tangible industry
        experience, possessing real world, relatable knowledge about the
        challenges executives face in managing talent in a competitive
        marketplace.
      </Text>
      <Button
        variant="gradient"
        gradient={{ from: "#0f2f5b", to: "cyan", deg: 90 }}
        size="xl"
      >
        Contact Us
      </Button>
    </Container>
  );
};

export default Contact;

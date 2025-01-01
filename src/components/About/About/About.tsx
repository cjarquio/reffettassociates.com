import "@mantine/core/styles.css";
import { Box, Image, Title, Text, Flex, Container } from "@mantine/core";
import { StockExecutive } from "../../../assets/images";
import { ContactButtonSection } from "../../Contact";

export const About: React.FC = () => {
  return (
    <Container size={"60%"}>
      <Flex gap="xl">
        <Image fit="cover" style={{ width: "50%" }} src={StockExecutive} />
        <Box>
          <Title order={2} style={{ textAlign: "center" }}>
            Diligent, Experienced, Relationship Focused
          </Title>
          <Text pt={"1rem"} size="lg">
            Reffett Associates is a nationally recognized, fully retained
            executive search firm. As one of the premiere boutique firms in the
            executive search industry, we work with you to build a stronger
            organization by finding diverse candidates that fit your
            organization's cultures and values.
          </Text>
          <Text pt={"1rem"} size="lg">
            Reffett Associates is proudly veteran-owned and a certified Veteran
            Owned Small Business (VOSB). In addition, Reffett Associates is on
            the GSA Schedule and maintains a GSA contract (GS-02F-0194W). We are
            one of very few executive search firms to be awarded this
            prestigious qualification after having completed the GSA's extensive
            qualifications process.
          </Text>
          <Text pt={"1rem"} size="lg">
            We have extensive experience across the public, private and
            non-profit sectors including retail and consumer packaged goods,
            private equity, commercial/retail and federal services, federals,
            state and municipal government sectors and associations and
            non-profits.
          </Text>
          <Text pt={"1rem"} size="lg">
            Our team is comprised of former executives with tangible industry
            experience, possessing real world, relatable knowledge about the
            challenges executives face in managing talent in a competitive
            marketplace.
          </Text>
        </Box>
      </Flex>
      <ContactButtonSection />
    </Container>
  );
};

export default About;

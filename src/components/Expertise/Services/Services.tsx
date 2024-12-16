import "@mantine/core/styles.css";
import { Box, Image, Title, Text, Flex, Container } from "@mantine/core";
import { ExecutiveSearchStock } from "../../../assets/images";

export const Services: React.FC = () => {
  return (
    <Container size={"60%"}>
      <Flex gap="xl">
        <Image
          fit="cover"
          style={{ width: "50%" }}
          src={ExecutiveSearchStock}
        />
        <Box>
          <Title order={2} style={{ textAlign: "center" }}>
            Producing Outstanding Candidates To Meet Short & Long Term Goals
          </Title>
          <Text pt={"1rem"} size="lg">
            We believe that every search is a partnership with our client and we
            won't stop working on your behalf until we find the right fit for
            your needs. Our goal as a boutique firm is to provide a high level
            of personal attention to create a search plan that is unique to your
            needs and then they will work with you until your position is
            successfully filled.
          </Text>
          <Text pt={"1rem"} size="lg">
            Our goal as a small firm is to be able to provide a high level of
            personal attention and unparalleled service to both our clients and
            our candidates. For the Reffett Associates team, executive
            recruiting is all about relationships. Building and maintaining
            long-term, productive relationships with everyone with whom we work
            is our first priority.
          </Text>
          <Text pt={"1rem"} size="lg">
            Through our time tested process we will work with you to define the
            role, go to market, identify and recruit a diverse talent pool and
            navigate the interview and hiring process. On average you will see
            your first group of candidates within 5 weeks of our Kick-off
            meeting.
          </Text>
        </Box>
      </Flex>
      <Title order={2} style={{ textAlign: "center" }}>
        The Seven Steps to Finding Your Successful Candidate
      </Title>
    </Container>
  );
};

export default Services;

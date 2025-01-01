import "@mantine/core/styles.css";
import { Box, Image, Title, Text, Flex, Container } from "@mantine/core";
import { Veteran } from "../../../assets/images";
import { ContactButtonSection } from "../../Contact";

export const Veterans: React.FC = () => {
  return (
    <Container size={"60%"}>
      <Flex gap="xl">
        <Image fit="contain" src={Veteran} />
        <Box>
          <Title order={2} style={{ textAlign: "center" }}>
            Serving Those That Served
          </Title>
          <Text pt={"1rem"} size="lg">
            Reffett Associates is committed to serving and working with our
            veterans and helping them make the transition from active duty to
            the job market. We are experienced at helping veterans translate
            their military experience and training into meaningful and rewarding
            work in the public and private sector. Our staff has broad
            experience helping veterans from all branches and of all ranks as
            they transition to meaningful employment outside of the armed
            services. Even if you have been out of the military for years we can
            help you reframe your time in uniform to make you a more compelling
            candidate for civilian employers. We also work closely with a host
            of employers that value military service and many of them maintain
            close relationship with DoD and other related government agencies.
          </Text>
          <Text pt={"1rem"} size="lg">
            As part of our commitment to members of the military we offer all
            recently discharged veterans, or soon to leave active service, 10%
            off our Executive Transition Assistance pricing.
          </Text>
        </Box>
      </Flex>
      <ContactButtonSection />
    </Container>
  );
};

export default Veterans;

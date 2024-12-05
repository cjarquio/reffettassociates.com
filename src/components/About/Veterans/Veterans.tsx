import "@mantine/core/styles.css";
import { Box, Image, Title, Text, Container } from "@mantine/core";
import { Veteran } from "../../../assets/images";
import classes from "./Veterans.module.css";

export const Veterans: React.FC = () => {
  return (
    <Box className={classes.root}>
      <Image src={Veteran} />
      <Container>
        <Title order={4}>Serving Those That Served</Title>
        <Text>
          Reffett Associates is committed to serving and working with our
          veterans and helping them make the transition from active duty to the
          job market. We are experienced at helping veterans translate their
          military experience and training into meaningful and rewarding work in
          the public and private sector. Our staff has broad experience helping
          veterans from all branches and of all ranks as they transition to
          meaningful employment outside of the armed services. Even if you have
          been out of the military for years we can help you reframe your time
          in uniform to make you a more compelling candidate for civilian
          employers. We also work closely with a host of employers that value
          military service and many of them maintain close relationship with DoD
          and other related government agencies.
        </Text>
        <Text>
          As part of our commitment to members of the military we offer all
          recently discharged veterans, or soon to leave active service, 10% off
          our Executive Transition Assistance pricing
        </Text>
      </Container>
    </Box>
  );
};

export default Veterans;

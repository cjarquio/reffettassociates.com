import "@mantine/core/styles.css";
import { Box, Container, Group, rem, Title, Image } from "@mantine/core";
import StockVideo from "../../../src/assets/videos/executiveStockVideo.mp4";
import classes from "./Home.module.css";
import { IconMilitaryRankFilled, IconSearch } from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";

const images = [
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",
];

export const Home: React.FC = () => {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));
  return (
    <Box className={classes.root}>
      <video width={"100%"} autoPlay muted loop>
        <source src={StockVideo} type="video/mp4" />
      </video>
      <Container fluid className={classes.raAboutContainer}>
        <Group justify={"flex-start"} gap={"sm"} style={{ flexWrap: "nowrap" }}>
          <Box className={classes.executiveSearchTitle}>
            <Title c={"#bb2a2c"} order={1}>
              Executive Search
            </Title>
            <IconSearch
              style={{ width: rem(80), height: rem(80) }}
              stroke={3}
              color={"#bb2a2c"}
            />
          </Box>
          <Box className={classes.executiveSearchDescriptionBox}>
            <Title
              c={"white"}
              order={4}
              className={classes.executiveSearchDescription}
            >
              Reffett Associates is a nationally recognized, fully retained
              executive search firm. As one of the premiere boutique firms in
              the executive search industry, we work with you to build a
              stronger organization by finding diverse candidates that fit your
              organization's cultures and values.
            </Title>
          </Box>
        </Group>
      </Container>
      <Container fluid className={classes.raAboutContainer}>
        <Group justify={"flex-end"} gap={"sm"} style={{ flexWrap: "nowrap" }}>
          <Box className={classes.veteransDescriptionBox}>
            <Title
              c={"white"}
              order={4}
              className={classes.veteransDescription}
            >
              Reffett Associates is proudly veteran-owned and a certified
              Veteran Owned Small Business (VOSB). In addition, Reffett
              Associates is on the GSA Schedule and maintains a GSA contract
              (GS-02F-0194W). We are one of very few executive search firms to
              be awarded this prestigious qualification after having completed
              the GSA's extensive qualifications process.
            </Title>
          </Box>
          <Box className={classes.veteransTitle}>
            <Title c={"#0f2f5b"} order={1}>
              Committed to our Veterans
            </Title>
            <IconMilitaryRankFilled
              style={{ width: rem(132), height: rem(132) }}
              stroke={3}
              color={"#0f2f5b"}
            />
          </Box>
        </Group>
      </Container>
      <Container size={"xs"} className={classes.clients}>
        <Title order={3}>Featured Clients</Title>
        <Carousel withIndicators>{slides}</Carousel>
      </Container>
    </Box>
  );
};

export default Home;

import { Box, Container, Image, Title } from "@mantine/core";

interface BannerProps {
  bannerImagePath: string;
  page: string;
}

export const Banner: React.FC<BannerProps> = (props: BannerProps) => {
  const { bannerImagePath, page } = props;
  return (
    <>
      <Container
        fluid
        p={0}
        style={{ position: "relative", textAlign: "center" }}
      >
        <Image
          src={bannerImagePath}
          fit="fill"
          h={"15rem"}
          style={{ borderRadius: "0 0 50% 50%" }}
        />
        <Box
          w={"100%"}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
          }}
        >
          <Title>{page}</Title>
        </Box>
      </Container>
    </>
  );
};

export default Banner;

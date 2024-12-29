import { Container, Title, Image, Text, Box, Card, Grid } from "@mantine/core";
import { ManufacturingBanner } from "../../../assets/images";
import {
  CastorAndPollux,
  CutterAndBuck,
  Emerald,
  Kaman,
  Lorillard,
  Post,
  Schwans,
  Xochitl,
  VF,
  ItgBrands,
  CoreScientific,
} from "../../../assets/images/companies/Manufacturing";

export const Manufacturing: React.FC = () => {
  const retailCompanies = [
    {
      companyName: "Castor & Pollux",
      image: CastorAndPollux,
    },
    {
      companyName: "Cutter & Buck",
      image: CutterAndBuck,
    },
    {
      companyName: "Emerald Perfomance Materials",
      image: Emerald,
    },
    {
      companyName: "Kaman",
      image: Kaman,
    },
    {
      companyName: "Lorillard",
      image: Lorillard,
    },
    {
      companyName: "POST",
      image: Post,
    },
    {
      companyName: "Schwan's",
      image: Schwans,
    },
    {
      companyName: "Xochitl",
      image: Xochitl,
    },
    {
      companyName: "VF Outlets",
      image: VF,
    },
    {
      companyName: "itgBrands",
      image: ItgBrands,
    },
    {
      companyName: "Core Scientific",
      image: CoreScientific,
    },
  ];
  return (
    <>
      <Image src={ManufacturingBanner} fit="fill" h={"15rem"} />
      <Container fluid w="60%" display={"flex"}>
        <Container w={"80%"}>
          <Box id="retailDescription">
            <Title order={3}>Manufacturing</Title>
            <Text>
              We understand the challenges that you face, and what is needed to
              drive success. In today's omni-channel retail world, leaders must
              be knowledgeable and versatile. This is not an environment for the
              timid.
            </Text>
            <Text>
              Our Managing Directors were selected based on their expertise in
              key leadership roles in the industries they serve. Our Retail /
              Consumer team is composed of senior executives who have been on
              “your side” of the desk. They understand the importance of
              identifying superior leaders and recruiting them to the
              organization. The search firm you select must have the same sense
              of urgency displayed by your organization - timeliness is
              essential to effective candidate placement.
            </Text>
            <Text>
              We have assisted companies in all areas of the Retail / Consumer
              world, such as traditional department stores, specialty retail
              companies, business to consumer, and on-line retailing. Each
              search engagement is specifically tailored to the needs of the
              client and is personally conducted by a Managing Director - from
              the beginning to its successful conclusion.
            </Text>
          </Box>
        </Container>
        <Container fluid>
          <Title order={3}>Companies Served</Title>
          <Grid>
            {retailCompanies.map((company) => (
              <Grid.Col span={3} key={company.companyName}>
                <Card padding="sm" style={{ alignItems: "center" }}>
                  <Card.Section>
                    <Image
                      src={company.image}
                      fit="contain"
                      w={200}
                      alt={company.companyName}
                    />
                  </Card.Section>
                  <Card.Section>
                    <Text fw={700}>{company.companyName}</Text>
                  </Card.Section>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default Manufacturing;

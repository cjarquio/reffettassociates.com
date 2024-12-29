import { Container, Title, Image, Box, Card, Grid, Text } from "@mantine/core";
import {
  AconInvestments,
  AlvarezAndMarsal,
  BECU,
  CoreScientific,
  FoodPartners,
  GeneralAtlantic,
  GoldenGateCapital,
  LeonardGreenAndPartners,
  LibertyRidge,
  MorganStanley,
  StoneCreek,
  SunCapitalPartners,
  TravelersInsurance,
} from "../../../assets/images/companies/PrivateSector";
import { PrivateSectorBanner } from "../../../assets/images";

export const PrivateSector: React.FC = () => {
  const retailCompanies = [
    {
      companyName: "ACON",
      image: AconInvestments,
    },
    {
      companyName: "The Food Partners",
      image: FoodPartners,
    },
    {
      companyName: "Core Scientific",
      image: CoreScientific,
    },
    {
      companyName: "Golden Gate Capital",
      image: GoldenGateCapital,
    },
    {
      companyName: "Leonard Green and Partners",
      image: LeonardGreenAndPartners,
    },
    {
      companyName: "Morgan-Stanley",
      image: MorganStanley,
    },
    {
      companyName: "Sun Capital Partners",
      image: SunCapitalPartners,
    },
    {
      companyName: "Traveler's Insurance",
      image: TravelersInsurance,
    },
    {
      companyName: "BECU",
      image: BECU,
    },
    {
      companyName: "Liberty Ridge Advisors",
      image: LibertyRidge,
    },
    {
      companyName: "Stone Creek Capital",
      image: StoneCreek,
    },
    {
      companyName: "Alvarez & Marsal",
      image: AlvarezAndMarsal,
    },
    {
      companyName: "General Atlantic",
      image: GeneralAtlantic,
    },
  ];
  return (
    <>
      <Image src={PrivateSectorBanner} fit="fill" h={"15rem"} />
      <Container fluid w="60%" display={"flex"}>
        <Container w={"80%"}>
          <Box id="retailDescription">
            <Title order={3}>Private Sector</Title>
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

export default PrivateSector;

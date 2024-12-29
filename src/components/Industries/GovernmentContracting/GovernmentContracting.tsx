import { Container, Title, Image, Text, Box, Card, Grid } from "@mantine/core";
import { GovernmentContractingBanner } from "../../../assets/images";
import {
  BassProShops,
  BiLo,
  Burlington,
  Cabelas,
  DeanFoods,
  Dymatize,
  Hershey,
  KingsFoodMarket,
  Petco,
  Schwans,
  AAFEX,
  SportsAuthority,
  Strack,
  TheFreshMarket,
  Ahold,
  Giant,
  Homeland,
  KVAT,
  MetropolitanMarket,
  NorthgateMarket,
  OTG,
  Peekay,
  Post,
  VF,
  Xochitl,
} from "../../../assets/images/companies/Retail";
import {
  Battelle,
  DynCorp,
  Fluor,
  Hitachi,
  PointBlank,
  TASC,
  NRECA,
  SOC,
} from "../../../assets/images/companies/Government";

export const GovernmentContracting: React.FC = () => {
  const retailCompanies = [
    {
      companyName: "Battelle",
      image: Battelle,
    },
    {
      companyName: "Fluor",
      image: Fluor,
    },
    {
      companyName: "Hitachi Consulting",
      image: Hitachi,
    },
    {
      companyName: "Point Blank Enterprises",
      image: PointBlank,
    },
    {
      companyName: "TASC",
      image: TASC,
    },
    {
      companyName: "DynCorp International",
      image: DynCorp,
    },
    {
      companyName: "NRECA",
      image: NRECA,
    },
    {
      companyName: "SOC",
      image: SOC,
    },
  ];
  return (
    <>
      <Image src={GovernmentContractingBanner} fit="fill" h={"15rem"} />
      <Container fluid w="60%" display={"flex"}>
        <Container w={"80%"}>
          <Box id="retailDescription">
            <Title order={3}>Government Contracting</Title>
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

export default GovernmentContracting;

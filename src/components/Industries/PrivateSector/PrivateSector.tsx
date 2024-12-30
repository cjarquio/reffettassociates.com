import {
  Container,
  Title,
  Image,
  Box,
  Card,
  Grid,
  Text,
  List,
} from "@mantine/core";
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
              As market conditions have changed, Private Equity has become a
              greater part of our firm’s practice. We understand the talents and
              skills required to lead companies through all the stages of the
              life cycle, from the earliest stage start-up, to upgrading the
              management team of a portfolio company.
            </Text>
            <Text>
              Our firm has assisted major Private Equity firms in all stages of
              their evaluation process:
              <List size="sm" withPadding>
                <List.Item>
                  On a consulting basis, using our extensive network to help
                  provide overall market intelligence, current talent
                  evaluation, and company position.
                </List.Item>
                <List.Item>
                  Performing pre-investment evaluation on a company's existing
                  human capital, their leadership, and overall culture.
                </List.Item>
                <List.Item>
                  Identifying and recruiting executives at all company levels,
                  who can quickly provide the value added to transform the
                  portfolio company performance.
                </List.Item>
                <List.Item>
                  Determining long range talent resources, both internal and
                  external to the company.
                </List.Item>
              </List>
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

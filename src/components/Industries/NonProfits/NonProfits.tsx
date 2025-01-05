import { Container, Title, Image, Box, Card, Grid, Text } from "@mantine/core";
import { NonProfitBanner } from "../../../assets/images";
import {
  DiversityInc,
  TouchstoneEnergy,
  UnitedWayofKingCounty,
  NRECA,
  NBR,
  Naba,
  NAM,
  NSH,
  Pioneer,
  ACE,
  CliffordBeers,
  ICSC,
} from "../../../assets/images/companies/NonProfits";
import { Banner } from "../../Banner";

export const NonProfits: React.FC = () => {
  const retailCompanies = [
    {
      companyName: "Touchstone Energy",
      image: TouchstoneEnergy,
    },
    {
      companyName: "UnitedWay of King County",
      image: UnitedWayofKingCounty,
    },
    {
      companyName: "Diversity Inc.",
      image: DiversityInc,
    },
    {
      companyName: "NRECA",
      image: NRECA,
    },
    {
      companyName: "National Bureau of Asian Research",
      image: NBR,
    },
    {
      companyName: "National Association of Black Accountants",
      image: Naba,
    },
    {
      companyName: "National Association of Manufacturers",
      image: NAM,
    },
    {
      companyName: "National Society of Hispanic MBAs",
      image: NSH,
    },
    {
      companyName: "Pioneer Human Services",
      image: Pioneer,
    },
    {
      companyName: "American Council on Education",
      image: ACE,
    },
    {
      companyName: "Clifford Beers Clinic",
      image: CliffordBeers,
    },
    {
      companyName: "International Council of Shopping Centers",
      image: ICSC,
    },
  ];
  return (
    <>
      <Banner
        bannerImagePath={NonProfitBanner}
        page="Associations and Nonprofits"
      />
      <Container fluid w="60%" display={"flex"}>
        <Container w={"80%"}>
          <Box id="retailDescription">
            <Title order={3}>Nonprofit</Title>
            <Text>
              Outstanding leadership skills are developed over a lifetime of
              great opportunities and experiences. We are intimately familiar
              with association and not-for-profit organizations and the
              challenges they face every day.
            </Text>
            <Text>
              We are especially well qualified to identify that unique person to
              fit your organization's needs. As not-for-profit organizations
              begin operating more like businesses and implementing best
              practices and governance structures, effective leadership at the
              top is imperative. Reffett Associates will find the individuals
              who best fit your organization and will work towards the
              achievement of your organization's mission.
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

export default NonProfits;

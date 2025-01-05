import { Container, Title, Image, Box, Card, Grid, Text } from "@mantine/core";
import { PublicSectorBanner } from "../../../assets/images";
import {
  AAFEX,
  AFRL,
  CityOfCharlotte,
  CityOfSeattle,
  CommunityTransit,
  DoD,
  DoT,
  FDA,
  FirstNet,
  NavalPostGradSchool,
  NorthwestSeaport,
  PGBC,
  SoundTransit,
  USDA,
  UsMerchantMarine,
  VA,
} from "../../../assets/images/companies/PublicSector";
import { Banner } from "../../Banner";

export const PublicSector: React.FC = () => {
  const retailCompanies = [
    {
      companyName: "AFRL",
      image: AFRL,
    },
    {
      companyName: "US Food and Drug Administration",
      image: FDA,
    },
    {
      companyName: "US Department of Defense",
      image: DoD,
    },
    {
      companyName: "US Department of Transporation",
      image: DoT,
    },
    {
      companyName: "FirstNet",
      image: FirstNet,
    },
    {
      companyName: "US Merchant Maritime Adminisitration",
      image: UsMerchantMarine,
    },
    {
      companyName: "Army and Air Force Exchange Service",
      image: AAFEX,
    },
    {
      companyName: "City of Charlotte",
      image: CityOfCharlotte,
    },
    {
      companyName: "City of Seattle",
      image: CityOfSeattle,
    },
    {
      companyName: "Community Transit",
      image: CommunityTransit,
    },
    {
      companyName: "US Department of Agriculture",
      image: USDA,
    },
    {
      companyName: "US Department of Veteran Affairs",
      image: VA,
    },
    {
      companyName: "Naval Postgraduate School",
      image: NavalPostGradSchool,
    },
    {
      companyName: "Northwest Seaport Alliance",
      image: NorthwestSeaport,
    },
    {
      companyName: "Sound Transit",
      image: SoundTransit,
    },
    {
      companyName: "PGBC",
      image: PGBC,
    },
  ];
  return (
    <>
      <Banner bannerImagePath={PublicSectorBanner} page="Public Sector" />
      <Container fluid w="60%" display={"flex"}>
        <Container w={"80%"}>
          <Box id="retailDescription">
            <Title order={3}>Public Sector</Title>
            <Text>
              As a leading provider of retained executive search services across
              all levels of government, including federal, state and local
              governments and agencies, we possess a unique understanding of
              your needs. Our group of Managing Directors bring with them
              unparalleled experience in the public sector. With experience
              ranging from holding senior level positions in the Department of
              Defense, on Capitol Hill, and working with State and Local
              officials our team is experienced in the government hiring process
              and the issues that you confront finding a diverse and qualified
              talent pool.
            </Text>
            <Text>
              Reffett Associates is a veteran-owned business and maintains a GSA
              contract (GS-02F-0194W). We are one of the few executive search
              firms to be awarded this prestigious qualification after
              completing their extensive qualification process.
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

export default PublicSector;

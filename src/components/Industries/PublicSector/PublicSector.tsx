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
      <Image src={PublicSectorBanner} fit="fill" h={"15rem"} />
      <Container fluid w="60%" display={"flex"}>
        <Container>
          <Box id="retailDescription">
            <Title order={3}>Public Sector</Title>
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

export default PublicSector;

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
import { Banner } from "../../Banner";

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
      <Banner bannerImagePath={ManufacturingBanner} page="Manufacturing" />
      <Container fluid w="60%" display={"flex"}>
        <Container w={"80%"}>
          <Box id="retailDescription">
            <Title order={3}>Manufacturing</Title>
            <Text>
              Success in today's market requires leaders and executives who
              understand the nature of its rapidly changing landscape. Often
              this means leveraging external partners such as Reffett Associates
              to identify and attract exceptional talent that can make a
              significant business impact.
            </Text>
            <Text>
              The Reffett Associates team is uniquely positioned to understand
              our clients' needs. Having served as senior executives in major
              professional services and Fortune 500 companies, we possess deep
              expertise in providing business solutions to commercial and
              government clients. Our insight and consultative approach,
              combined with access to the best talent, ensures that the results
              we deliver to clients exceed their expectations.
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

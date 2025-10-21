import { Container, Title, Image, Box, Card, Grid, Text } from '@mantine/core';
import { Banner } from '../../Banner';

interface IndustryCompanyProps {
  companyName: string;
  image: string;
}

interface IndustryTemplateProps {
  bannerPath: string;
  pageTitle: string;
  industryCompanies: IndustryCompanyProps[];
  children?: React.ReactNode;
}

export const IndustryTemplate: React.FC<IndustryTemplateProps> = (
  props: IndustryTemplateProps
) => {
  const { bannerPath, pageTitle, industryCompanies, children } = props;
  return (
    <>
      <Banner bannerImagePath={bannerPath} page={pageTitle} />
      <Container fluid w="65%">
        <Container fluid w={'80%'}>
          <Box id={`${pageTitle} Description`}>
            <Title order={3}>{pageTitle}</Title>
            {children}
          </Box>
          <Box py={'2rem'}>
            <Title order={3}>Companies Served</Title>
            <Grid>
              {industryCompanies.map((company) => (
                <Grid.Col span={2.2} key={company.companyName}>
                  <Card
                    padding="sm"
                    style={{ alignItems: 'center', textAlign: 'center' }}
                  >
                    <Card.Section>
                      <Text fw={700}>{company.companyName}</Text>
                    </Card.Section>
                    <Card.Section>
                      <Image
                        src={company.image}
                        fit="contain"
                        alt={company.companyName}
                      />
                    </Card.Section>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default IndustryTemplate;

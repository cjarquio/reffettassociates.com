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
      <Container fluid w="65%" display={'flex'}>
        <Container w={'100%'}>
          <Box id={`${pageTitle} Description`}>
            <Title order={3}>{pageTitle}</Title>
            {children}
          </Box>
        </Container>
        <Container fluid w={'100%'}>
          <Title order={3}>Companies Served</Title>
          <Grid>
            {industryCompanies.map((company) => (
              <Grid.Col span={3} key={company.companyName}>
                <Card padding="sm" style={{ alignItems: 'center' }}>
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
        </Container>
      </Container>
    </>
  );
};

export default IndustryTemplate;

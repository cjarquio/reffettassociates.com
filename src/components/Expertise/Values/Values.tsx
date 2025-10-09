import '@mantine/core/styles.css';
import { Box, Title, Text, Container } from '@mantine/core';
import { ExpertiseBanner } from '../../../assets/images';
import { Banner } from '../../Banner';

export const Values: React.FC = () => {
  return (
    <>
      <Banner bannerImagePath={ExpertiseBanner} page="Our Values" />
      <Container size={'60%'} py={'md'}>
        <Box>
          <Title order={2} style={{ textAlign: 'center' }}>
            Our Commitment when Recruiting
          </Title>
          <Text pt={'1rem'} size="lg">
            With every executive search assignment, Reffett Associates makes a
            conscious effort to contact, develop and present a slate of
            candidates who represent every race, gender, ethnic background,
            physical challenge, religion, sexual orientation, and age.
          </Text>
          <Text pt={'1rem'} size="lg">
            All consideration is given to candidates of all backgrounds and
            walks of life. Our clients will affirm that Reffett Associates is
            all-encompassing in presenting the best qualified candidates that
            represent diverse races, religions, and nationalities. The firm
            maintains records of all research, interview notes, background
            checks and reference checks conducted for every recruitment to
            ensure that all information is readily available should the need to
            produce it arise.
          </Text>
          <Text pt={'1rem'} size="lg">
            Reffett Associates does not ask for, nor does it record, personal
            information regarding a candidate's race, color, religion, sex, or
            national origin, and in instances where that information is
            voluntarily disclosed during the search process, we will not allow
            it to have any bearing on a candidate's ability to progress through
            the search process.
          </Text>
        </Box>
        <Box>
          <Title order={2} style={{ textAlign: 'center' }}>
            Approach to Candidate Generation
          </Title>
          <Text pt={'1rem'} size="lg">
            Our commitment to our clients is to present all candidates in a fair
            and transparent way. While we only present the most qualified
            candidates for review, Reffett Associates has created a process that
            tracks every applicant and is reviewable by our clients at any time
            should they desire to see and consider the entire applicant pool for
            any given recruitment. This level of transparency ensures fair and
            meaningful consideration is given to each and every applicant.
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default Values;

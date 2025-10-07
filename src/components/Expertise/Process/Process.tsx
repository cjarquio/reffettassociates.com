import '@mantine/core/styles.css';
import {
  Box,
  Image,
  Title,
  Text,
  Flex,
  Container,
  Grid,
  Card,
} from '@mantine/core';
import { ExecutiveSearchStock, ExpertiseBanner } from '../../../assets/images';
import { IconArrowBigDownFilled } from '@tabler/icons-react';
import { Banner } from '../../Banner';

const successfulCandidateSteps = [
  {
    title: 'Getting to Know Your Organization',
    icon: <></>,
    description:
      'Meet with key executives and selected stakeholders to gain an understanding of your organization’s history, structure, operations, and values. We will design a unique recruitment strategy that will help you attain your organizational goals.',
  },
  {
    title: 'Defining the Position',
    icon: <></>,
    description:
      'Develop a position specification including title, reporting relationships, education requirements, work experience, descriptions of basic responsibilities, and compensation.',
  },
  {
    title: 'Recruiting Qualifying Candidates',
    icon: <></>,
    description:
      'Reffett Associate senior staff will directly contact candidates through original research, drawing on the resources of our extensive database, and targeted recruitment efforts to find you top talent that match your needs and culture.',
  },
  {
    title: 'Defining Strengths and Weaknesses',
    icon: <></>,
    description:
      'Our team will personally interview only the best suited candidates to ensure their fit for your critical role. We have extensive experience evaluating executive talent and a process in please to minimize bias in our process.',
  },
  {
    title: 'Meeting with Leadership and Communication',
    icon: <></>,
    description:
      'Provide detailed weekly status reports on our search progress and regular communication with your team. Only the top candidates are presented for individual meetings with management. The client always makes the final selection and offer of employment.',
  },
  {
    title: 'Selecting the Executive and Checking References',
    icon: <></>,
    description:
      "Protect a candidate's confidentiality by performing reference and other checks only after you have expressed a strong interest in an individual. Reffett Associate will provide customized briefing materials on all final candidates.",
  },
  {
    title: 'Negotiating Compensation',
    icon: <></>,
    description:
      'Assist your organization with understanding the current market for your position, making an employment offer and negotiating a competitive compensation package.',
  },
];

export const Process: React.FC = () => {
  return (
    <>
      <Banner bannerImagePath={ExpertiseBanner} page="Our Process" />
      <Container size={'80%'} p={'3rem'}>
        <Flex gap="xl">
          <Box>
            <Title order={2} style={{ textAlign: 'center' }}>
              Producing Outstanding Candidates To Meet Short & Long Term Goals
            </Title>
            <Text pt={'1rem'} size="lg">
              We believe that every search is a partnership with our client and
              we won't stop working on your behalf until we find the right fit
              for your needs. Our goal as a boutique firm is to provide a high
              level of personal attention to create a search plan that is unique
              to your needs and then they will work with you until your position
              is successfully filled.
            </Text>
            <Text pt={'1rem'} size="lg">
              Our goal as firm is to be able to provide a high level of personal
              attention and unparalleled service to both our clients and our
              candidates. For the Reffett Associates team, executive recruiting
              is all about relationships. Building and maintaining long-term,
              productive relationships with everyone with whom we work is our
              first priority.
            </Text>
            <Text pt={'1rem'} size="lg">
              Through our time tested process we will work with you to define
              the role, go to market, identify and recruit a diverse talent pool
              and navigate the interview and hiring process. On average you will
              see your first group of candidates within 5 weeks of our Kick-off
              meeting.
            </Text>
          </Box>
          <Image
            fit="cover"
            style={{ width: '50%' }}
            src={ExecutiveSearchStock}
          />
        </Flex>
        <Container pt={'5rem'}>
          <Title order={2} style={{ textAlign: 'center' }}>
            The Seven Steps to Finding Your Successful Candidate
          </Title>
          <Box display={'flex'}>
            <Grid
              display={'flex'}
              columns={1}
              align="center"
              justify="center"
              style={{ textAlign: 'center' }}
            >
              {successfulCandidateSteps.map((step, index) => {
                return (
                  <>
                    <Grid.Col
                      span={1}
                      key={step.title}
                      style={{ display: 'flex', justifyContent: 'center' }}
                    >
                      <Card
                        shadow="sm"
                        padding="md"
                        w={'60%'}
                        style={{ border: '1px solid black' }}
                      >
                        <Card.Section>{step.icon}</Card.Section>

                        <Text fw={500} size="lg" mt="lg">
                          {step.title}
                        </Text>

                        <Text mt="xs" c="dimmed" size="md">
                          {step.description}
                        </Text>
                      </Card>
                    </Grid.Col>
                    {index !== successfulCandidateSteps.length - 1 && (
                      <IconArrowBigDownFilled />
                    )}
                  </>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default Process;

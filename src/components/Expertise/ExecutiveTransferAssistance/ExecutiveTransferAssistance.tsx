import "@mantine/core/styles.css";
import { Box, Image, Title, Text, Flex, Container, Group } from "@mantine/core";
import { ExpertiseBanner, HandshakeStock } from "../../../assets/images";
import { IconCaretRight, IconPlus } from "@tabler/icons-react";
import { Banner } from "../../Banner";

export const ExecutiveTransferAssitance: React.FC = () => {
  const etaIntroQuestions = [
    "Are you ready for your next career move?",
    "Is your company preparing to downsize?",
    "Is it time to make the jump to the C-Suite?",
    "Are you ready to finally find that dream job?",
  ];
  const additionalServices = [
    {
      service: "Social Media Check",
      description:
        "Receive a report on your social media history and strategy discussion on how to leverage or manage what they report comes back with.",
    },
    {
      service: "Background Check",
      description:
        "Many employers will run background checks on their senior leaders. Run your own report so that you can know what to expect and manage any issues that may come up.",
    },
    {
      service: "Psycholagical Assessment",
      description:
        "Work with Reffett Affiliate to understand your leadership and management strengths and weaknesses. Receive in depth written report for future reference or sharing with employers, colleagues, or staff.",
    },
    {
      service: "Navigating the Federal Hiring Process",
      description:
        "Individual Workshop. Reffett Associates is experienced at recruiting senior leaders across the federal government. Our team will work with you to help you understand and learn how to navigate the federal hiring process.",
    },
    {
      service: "Monthly Check-in",
      description:
        "Reffett Associate staff will follow up to touch base and help fine tune your search strategy, application materials and more.",
    },
    {
      service: "Purchasing Your Own Company",
      description:
        "Work with Reffett staff and Reffett affiliates to pursue buying your own business. Includes strategy sessions and referrals.",
    },
    {
      service: "Career Coaching",
      description:
        "Work with Reffett Associate affiliate to create a coaching plan that fits your needs and goals.",
    },
    {
      service: "Board Membership",
      description:
        "Clients must have completed Career Blast before they can purchase this service. Work with Bill Reffett and senior staff to learn strategies and tips to help you secure a Board seat.",
    },
  ];
  return (
    <>
      <Banner
        bannerImagePath={ExpertiseBanner}
        page="Executive Transfer Assistance"
      />
      <Container size={"60%"}>
        <Flex gap="xl">
          <Image fit="cover" style={{ width: "50%" }} src={HandshakeStock} />
          <Box>
            <Title order={2} style={{ textAlign: "center" }}>
              The Skills You Need To Find The Job You Deserve
            </Title>
            {etaIntroQuestions.map((question: string) => (
              <Flex key={question}>
                <IconCaretRight />
                <Text pb={"1rem"} size="lg">
                  {question}
                </Text>
              </Flex>
            ))}
            <Text pt={"1rem"} size="lg">
              In uncertain times or during a booming market you should always be
              ready for what the next opportunity or necessity brings. Take
              control of your career.
            </Text>
            <Text pt={"1rem"} size="lg">
              Reffett Associates' team of experienced Managing Directors has
              been placing executives of all types into top jobs across a
              variety of private and public sector opportunities for years. We
              can help you take the steps to be ready for your next career
              transition.
            </Text>
          </Box>
        </Flex>
        <Title order={3}>Career Refresh</Title>
        <Text pt={"1rem"} size="lg">
          With Career Refresh you will work with senior Reffett Associate
          executive recruiters to learn how to effectively refresh your resume,
          cover letter, job hunting skills and LinkedIn profile. You will have
          two separate calls with Reffett staff and receive materials to help
          and guide you with your job hunt.
        </Text>

        <Title order={3}>Career Boost</Title>
        <Text pt={"1rem"} size="lg">
          With Career Boost you will take a deeper dive into all aspects of your
          job hunt. Build upon the skills learned in Career Refresh and take the
          next step in using your network to master your job hunt. Your network
          is the best tool to help you find your next job Reffett Associates
          will teach you how to create and actionable and effective plan to
          leverage your network.
        </Text>

        <Title order={3}>Mastering the Interview</Title>
        <Text pt={"1rem"} size="lg">
          The art of the interview is key to landing your next career. Work with
          Reffett Associates to develop and actually practice the skills and
          techniques needed to excel in an interview.
        </Text>

        <Title order={3}>Career Blast</Title>
        <Text pt={"1rem"} size="lg">
          Receive a price break by purchasing both Career Refresh and Mastering
          the Interview packages together. Reffett staff will work with you to
          go through their entire process in a timely way that works with your
          schedule.
        </Text>
        <Title order={3}>Additional Services</Title>
        <Text pt={"1rem"} size="lg">
          Reffett Associates recognizes that there are other additional services
          many of our clients' desire to help them with their career transition.
          We offer the following services for those that want more. Contact
          Reffett Associates to learn more about any of these services.
        </Text>
        {additionalServices.map((additionalService) => (
          <Group>
            <IconPlus />
            <Box key={additionalService.service}>
              <Text fw={700}>{additionalService.service}</Text>
              <Text size="sm" c="dimmed">
                {additionalService.description}
              </Text>
            </Box>
          </Group>
        ))}
      </Container>
    </>
  );
};

export default ExecutiveTransferAssitance;

import "@mantine/core/styles.css";
import {
  Image,
  Text,
  Container,
  Button,
  Card,
  Group,
  Title,
  Grid,
} from "@mantine/core";
import { raTeam } from "./teamHelperFunctions";
import { Link } from "react-router-dom";
import { Banner } from "../../Banner";
import { AboutBanner } from "../../../assets/images";

export interface RaTeamInfo {
  name: string;
  title: string;
  location: string;
  image: string;
  link: string;
  email?: string;
  ph?: string;
  description: string[];
}

export const Team: React.FC = () => {
  return (
    <>
      <Banner bannerImagePath={AboutBanner} page={"Our Team"} />
      <Container size={"45%"}>
        <Title order={2} style={{ textAlign: "center" }}>
          Experienced, Professional, & Invested In Your Goals
        </Title>
        <Text pt={"1rem"} size="lg">
          Our team of experienced and trusted executive search experts are
          dedicated to providing our clients and candidates the best possible
          recruitment experience possible. Every search is an opportunity to
          build relationships through integrity, communication and hard work.
        </Text>
        <Grid>
          {raTeam.map((teamMember: RaTeamInfo) => (
            <Grid.Col span={4} key={teamMember.name}>
              <Card padding="lg">
                <Card.Section>
                  <Image
                    src={teamMember.image}
                    fit="fill"
                    height={320}
                    alt={teamMember.name}
                  />
                </Card.Section>
                <Group
                  mt="md"
                  gap={0}
                  style={{ flexDirection: "column", alignItems: "start" }}
                >
                  <Text fw={700}>{teamMember.name}</Text>
                  <Text fw={500}>{teamMember.title}</Text>
                  <Text size="sm" c="dimmed">
                    {teamMember.location}
                  </Text>
                  {teamMember.email && (
                    <Text size="sm" c="dimmed">
                      {teamMember.email}
                    </Text>
                  )}
                </Group>
                <Link to={teamMember.link}>
                  <Button color="blue" fullWidth mt="md" radius="md">
                    Learn More
                  </Button>
                </Link>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Team;

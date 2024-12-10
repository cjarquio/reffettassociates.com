import "@mantine/core/styles.css";
import {
  Box,
  Image,
  Title,
  Text,
  Flex,
  Container,
  Group,
  Stack,
  Grid,
} from "@mantine/core";
import { getTeamMember } from "./teamHelperFunctions";
import { useParams } from "react-router-dom";
import { RaTeamInfo } from "./Team";

export const TeamMember: React.FC = () => {
  const { teamMember } = useParams();
  const employeeDescriptions = getTeamMember(teamMember) as RaTeamInfo;

  return (
    <Container size={"60%"}>
      <Grid display={"flex"} align="center" justify="center">
        <Grid.Col span={5}>
          <Image fit="contain" src={employeeDescriptions.image} />
        </Grid.Col>
        <Grid.Col span={7}>
          <Title order={2} style={{ textAlign: "center" }}>
            {employeeDescriptions.name}
          </Title>
          <Title order={4} style={{ textAlign: "center" }} c={"dimmed"}>
            {employeeDescriptions.title}
          </Title>
          {employeeDescriptions.description.map((line) => (
            <Text pt={"1rem"} size="lg" style={{ whiteSpace: "pre-wrap" }}>
              {line}
            </Text>
          ))}
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default TeamMember;

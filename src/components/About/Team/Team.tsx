import "@mantine/core/styles.css";
import {
  Image,
  Text,
  Container,
  Badge,
  Button,
  Card,
  Group,
  Title,
  Grid,
} from "@mantine/core";

export const Team: React.FC = () => {
  return (
    <Container size={"45%"}>
      <Title order={2} style={{ textAlign: "center" }}>
        Serving Those That Served
      </Title>
      <Text pt={"1rem"} size="lg">
        Our team of experienced and trusted executive search experts are
        dedicated to providing our clients and candidates the best possible
        recruitment experience possible. Every search is an opportunity to build
        relationships through integrity, communication and hard work.
      </Text>
      <Grid>
        <Grid.Col span={3}>
          <Card padding="lg">
            <Card.Section>
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Norway Fjord Adventures</Text>
              <Badge color="pink">On Sale</Badge>
            </Group>

            <Text size="sm" c="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button color="blue" fullWidth mt="md" radius="md">
              Book classic tour now
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Team;

import "@mantine/core/styles.css";
import {
  Image,
  Text,
  Flex,
  Container,
  Badge,
  Button,
  Card,
  Group,
} from "@mantine/core";

export const Team: React.FC = () => {
  return (
    <Container size={"60%"}>
      <Flex gap="xl">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
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
      </Flex>
    </Container>
  );
};

export default Team;

import "@mantine/core/styles.css";
import { Box, Text, Container, Title } from "@mantine/core";
import announcements from "../../assets/news/announcements.json";

export const News: React.FC = () => {
  const sortedNews = announcements.sort(
    (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );
  return (
    <>
      <Container size={"60%"}>
        <Box>
          <Text pt={"1rem"} size="lg">
            Reffett Associates is pleased to be able to share the following
            stories and articles about our successful executive recruiting
            accomplishments. These articles showcase the wide range of clients
            that we work with and the wide variety of roles that we can fill.
            The following links represent only a portion of the recruitments
            that our team has completed recently.
          </Text>

          <Title order={2}>News</Title>
        </Box>
      </Container>
    </>
  );
};

export default News;

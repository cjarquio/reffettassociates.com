import { Text, Title, List, Container } from "@mantine/core";
import { useParams } from "react-router-dom";
import news from "../../../assets/news/internalnews.json";
import { Banner } from "../../Banner";
import { NewsBanner } from "../../../assets/images";
import { ContactButtonSection } from "../../Contact";

export default function InternalNews() {
  const { topicId } = useParams();

  const article = news.find((topic) => topic.link === topicId);

  const Article = () => {
    const section = article?.article.section;

    return (
      section &&
      section.map((item) => {
        return (
          <>
            <Title order={5}>{item.sectionTitle}</Title>
            {item.additionalLinks && (
              <List>
                {item.additionalLinks.map((link) => (
                  <List.Item>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </List.Item>
                ))}
              </List>
            )}
            {item.paragraphs &&
              item.paragraphs.map((paragraph) => {
                return <Text>{paragraph}</Text>;
              })}
          </>
        );
      })
    );
  };

  return (
    <>
      {article && (
        <Banner bannerImagePath={NewsBanner} page={article.article.title} />
      )}
      <Container size={"60%"}>
        <Article />
        <ContactButtonSection />
      </Container>
    </>
  );
}

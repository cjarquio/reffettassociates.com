import '@mantine/core/styles.css';
import {
  Box,
  Text,
  Container,
  Title,
  Card,
  Grid,
  Image,
  Button,
  Pagination,
} from '@mantine/core';
import announcements from '../../assets/news/announcements.json';
import {
  ExternalNewsImage,
  InternalNewsImage,
  NewsBanner,
} from '../../assets/images';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Banner } from '../Banner';
import classes from './News.module.css';

function chunk<T>(array: T[], size: number): T[][] {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}

export const News: React.FC = () => {
  const [activePage, setPage] = useState(1);
  const navigate = useNavigate();
  const chunkedNews = chunk(
    announcements.sort(
      (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
    ),
    6
  );

  const handleClick = (external: boolean, link: string) => {
    if (external) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      navigate(link);
    }
  };

  const newsCards = chunkedNews[activePage - 1].map((article) => (
    <Grid.Col span={4} key={article.title}>
      <Card padding="sm" style={{ alignItems: 'center' }}>
        <Card.Section>
          <Image
            src={article.external ? ExternalNewsImage : InternalNewsImage}
            fit="contain"
            w={200}
            alt={'Stock news image'}
          />
        </Card.Section>
        <Card.Section className={classes.articleDetails}>
          <Text fw={700} className={classes.articleTitle}>
            {article.title}
          </Text>
          <Text>{article.date}</Text>
          <Button
            color="blue"
            fullWidth
            mt="md"
            radius="md"
            onClick={() => handleClick(article.external, article.link)}
          >
            Read More
          </Button>
        </Card.Section>
      </Card>
    </Grid.Col>
  ));

  return (
    <>
      <Banner bannerImagePath={NewsBanner} page="News and Insights" />
      <Container size={'60%'}>
        <Box>
          <Text pt={'1rem'} size="lg">
            Reffett Associates is pleased to be able to share the following
            stories and articles about our successful executive recruiting
            accomplishments. These articles showcase the wide range of clients
            that we work with and the wide variety of roles that we can fill.
            The following links represent only a portion of the recruitments
            that our team has completed recently.
          </Text>

          <Container fluid>
            <Title order={2}>News</Title>
            <Grid>{newsCards}</Grid>
            <Pagination
              total={chunkedNews.length}
              value={activePage}
              onChange={setPage}
              className={classes.pagination}
            />
          </Container>
        </Box>
      </Container>
    </>
  );
};

export default News;

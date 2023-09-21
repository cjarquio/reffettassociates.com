import React from 'react';
import { useParams } from "react-router-dom";
import news from '../assets/data/internalnews.json';
import { Typography, Box } from '@mui/material';

const styles = {
  root: {
      
    },
    paragraph: {
      fontSize: '1.1em'
    }
}

export default function InternalNews() {
  let { topicId } = useParams();

  const article = news.find(topic => topic.link === topicId);

  const Article = () => {
    const section = article.article.section;
    
    return (
      section.map((item) => {
        return (
          <>
            <h5>{item.sectionTitle}</h5>
            {
              item.paragraphs.map((paragraph)=>{
                return (
                  <Typography sx={styles.paragraph}>{paragraph}</Typography>
                )
              })
            }
          </>
        )
      })
    );
  }

  return (
    <Box sx={styles.root}>
      <h4>{article.article.title}</h4>
      <Article />
    </Box>
  );
}
import React from 'react';
import { useParams } from "react-router-dom";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import news from '../assets/data/internalnews.json';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      
    },
    paragraph: {
      fontSize: '1.1em'
    }
  })
);

export default function InternalNews() {
  const classes = useStyles();
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
                  <p className={classes.paragraph}>{paragraph}</p>
                )
              })
            }
          </>
        )
      })
    );
  }

  return (
    <div className={classes.root}>
      <h4>{article.article.title}</h4>
      <Article />
    </div>
  );
}
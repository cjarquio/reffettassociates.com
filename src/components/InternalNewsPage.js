import React from 'react';
import { useParams } from "react-router-dom";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import news from '../assets/data/internalnews.json';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      
    }
  })
);

export default function InternalNews() {
  const classes = useStyles();
  let { topicId } = useParams();

  const article = news.find(topic => topic.link === topicId);

  const Section = () => {
    const section = article.article.section;

    return (
      section.map((item) => {
        return (
        <p>{item}</p>
        )
      })
    );
  }

  const Article = () => {
    const sectionTitle = article.article.subtitle;
    
    return (
      sectionTitle.map((item) => {
        return (
          <div>
            <h5>{item}</h5>
            <Section />
          </div>
        );
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
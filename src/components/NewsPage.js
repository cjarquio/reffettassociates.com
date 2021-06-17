import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@material-ui/lab';
import { useRouteMatch } from 'react-router-dom';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import { Paper, Typography } from '@material-ui/core';
import PageTitle from './PageTitle';
import announcements from '../assets/data/announcements.json'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));


export default function NewsPage() {
  const classes = useStyles();
  const [news , setNews] = useState([]);
  let match = useRouteMatch();

  useEffect(()=>{
     let mounted = true;

     if(mounted){
          const sortedNews = announcements.sort(function (a, b) {
               // Turn your strings into dates, and then subtract them
               // to get a value that is either negative, positive, or zero.
               return new Date(b.date) - new Date(a.date);
          });
          
          
          setNews(sortedNews)
     }

     return ()=>{
          mounted = false;
     }
  },[])

  return (
    <div>
      <PageTitle
        title='News'
        subtitle=' '
      />
      <Timeline align="alternate">
        {
          news.map((announcement) => {
            return (
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body">
                    {announcement.date}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color='primary'>
                    <AnnouncementIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      {announcement.title}
                    </Typography>
                    <a href={announcement.external? announcement.link:`#${match.url}/${announcement.link}`}>{announcement.external? announcement.link:`http://reffettassociates.com/#${match.url}/${announcement.link}`}</a>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            )
          })
        }
      </Timeline>
    </div>
  );
}
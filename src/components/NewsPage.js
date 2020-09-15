import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@material-ui/lab';
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

  return (
    <div>
      <PageTitle
        title='News'
        subtitle=' '
      />
      <Timeline align="alternate">
        {
          announcements.reverse().map((announcement) => {
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
                    <a href={announcement.link}>{announcement.link}</a>
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
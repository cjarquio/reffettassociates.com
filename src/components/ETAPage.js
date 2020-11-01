import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Collapse, List, ListItem, Typography, Paper } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PageTitle from './PageTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '75%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    border: '1px black solid'
  },
  listitem: {
    justifyContent: 'space-between'
  }
}));

const steps = [
  {
    step: "Social Media Check",
    explanation: "Receive a report on your social media history and strategy discussion on how to leverage or manage what they report comes back with."
  },
  {
    step: "Background Check",
    explanation: "Many employers will run background checks on their senior leaders. Run your own report so that you can know what to expect and manage any issues that may come up."
  },
  {
    step: "Psychological Assessment",
    explanation: "Work with Reffett Affiliate to understand your leadership and management strengths and weaknesses. Receive in depth written report for future reference or sharing with employers, colleagues, or staff."
  },
  {
    step: "Navigating the Federal Hiring Process",
    explanation: "Individual Workshop. Reffett Associates is experienced at recruiting senior leaders across the federal government. Our team will work with you to help you understand and learn how to navigate the federal hiring process."
  },
  {
    step: "Monthly Check-in",
    explanation: "Reffett Associate staff will follow up to touch base and help fine tune your search strategy, application materials and more."
  },
  {
    step: "Purchasing Your Own Company",
    explanation: "Work with Reffett staff and Reffett affiliates to pursue buying your own business. Includes strategy sessions and referrals."
  },
  {
    step: "Career Coaching",
    explanation: "Work with Reffett Associate affiliate to create a coaching plan that fits your needs and goals."
  },
  {
    step: "Board Membership",
    explanation: "Clients must have completed Career Blast before they can purchase this service. Work with Bill Reffett and senior staff to learn strategies and tips to help you secure a Board seat."
  }
]

export default function ETAPage() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState("");

  const handleClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex("")
    } else {
      setSelectedIndex(index)
    }
  };

  return (
    <div>
      <PageTitle
        title='Executive Transition Assistance | The Skills You Need To Find The Job You Deserve'
        subtitle=''
      />
      <p>Are you ready for your next career move? In uncertain times or during a booming market you should always be ready for what the next opportunity or necessity brings. Take control of your career. </p>
      <p>Is your company preparing to downsize? </p>
      <p>No opportunity for advancement?</p>
      <p>Unhealthy work environment?</p>
      <p>Is it time to make the jump to the C-Suite?</p>
      <p>Are you ready to finally find that dream job?</p>
      <p>Reffett Associates’ team of experienced Managing Directors has been placing executives of all types into top jobs across a variety of private and public sector opportunities for years. We can help you take the steps to be ready for your next career transition.</p>
      <h5>Career Refresh</h5>
      <p>
        With Career Refresh you will work with senior Reffett Associate executive recruiters to learn how to effectively refresh your resume, cover letter, job hunting skills and LinkedIn profile. You will have two separate calls with Reffett staff and receive materials to help and guide you with your job hunt.
      </p>
      <h5>Career Boost</h5>
      <p>
        With Career Boost you will take a deeper dive into all aspects of your job hunt. Build upon the skills learned in Career Refresh and take the next step in using your network to master your job hunt. Your network is the best tool to help you find your next job Reffett Associates will teach you how to create and actionable and effective plan to leverage your network.
      </p>
      <h5>Mastering the Interview</h5>
      <p>
        The art of the interview is key to landing your next career. Work with Reffett Associates to develop and actually practice the skills and techniques needed to excel in an interview.
      </p>
      <h5>Career Blast</h5>
      <p>
        Receive a price break by purchasing both Career Refresh and Mastering the Interview packages together. Reffett staff will work with you to go through their entire process in a timely way that works with your schedule.
      </p>
      <h5>Additional Services</h5>
      <p>
        Reffett Associates recognizes that there are other additional services many of our clients’ desire
        to help them with their career transition. We offer the following services for those that want
        more. Contact Reffett Associates to learn more about any of these services.
      </p>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        {
          steps.map((item, index) => {
            return (
              <div>
                <Paper elevation={3}>
                  <ListItem className={classes.listitem} button onClick={() => handleClick(index)}>
                    <Typography variant='h6'>{item.step}</Typography>
                    {index === selectedIndex ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                </Paper>
                <Collapse in={index === selectedIndex} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <Typography>{item.explanation}</Typography>
                    </ListItem>
                  </List>
                </Collapse>
              </div>
            )
          })
        }
      </List>
      <ul><h5>Our Executive Transition Assistance program is discrete and high touch. Our senior staff will work directly with you to:</h5>
        <li> Identify appropriate industry opportunities</li>
        <li>Translate your unique skill set and experience into meaningful language</li>
        <li>Create an update, modern, resume that connects with hiring authorities</li>
        <li>Develop networking strategies</li>
        <li>Refine your LinkedIn profile to attract attention and communicate your capabilities</li>
        <li>Practice interview skills</li>
        <li>And more.</li>
      </ul>
      <p>On average it takes executives 9 months to make a career transition. Are you ready for your next step? Our team of experienced professionals is ready to help you find your next job faster.</p>
      <p><a href='mailto:tom.young@reffettassociates.com'>Contact Tom Young</a> for an introductory meeting to find out more.</p>
      <p>We are committed to serving Veterans and helping them achieve their career goals. <Link to='/veterans'>Learn More.</Link></p>
    </div>
  );
}
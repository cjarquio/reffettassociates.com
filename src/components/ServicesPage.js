import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const subtitle = `We believe that every search is a partnership with our client and we won’t stop working on your behalf until we find the right fit for your needs. Our goal as a boutique firm is to provide a high level of personal attention to create a search plan that is unique to your needs and then they will work with you until your position is successfully filled. 
\n\n
Our goal as a small firm is to be able to provide a high level of personal attention and unparalleled service to both our clients and our candidates. For the Reffett Associates team, executive recruiting is all about relationships. Building and maintaining long-term, productive relationships with everyone with whom we work is our first priority. 
\n\n
Through our time tested process we will work with you to define the role, go to market, identify and recruit a diverse talent pool and navigate the interview and hiring process. On average you will see your first group of candidates within 5 weeks of our Kick-off meeting. `;

const steps = [
  {
    step: "Getting to Know Your Organization",
    explanation: "Meet with key executives and selected stakeholders to gain an understanding of your organization’s history, structure, operations, and values. We will design a unique recruitment strategy that will help you attain your organizational goals."
  },
  {
    step: "Defining the Position",
    explanation: "Develop a position specification including title, reporting relationships, education requirements, work experience, descriptions of basic responsibilities, and compensation."
  },
  {
    step: "Recruiting Qualified Candidates",
    explanation: "Reffett Associate senior staff will directly contact candidates through original research, drawing on the resources of our extensive database, and targeted recruitment efforts to find you top talent that match your needs and culture."
  },
  {
    step: "Defining Strengths and Weaknesses",
    explanation: "Our team will personally interview only the best suited candidates to ensure their fit for your critical role. We have extensive experience evaluating executive talent and a process in please to minimize bias in our process."
  },
  {
    step: "Meeting with Leadership and Communication",
    explanation: "Provide detailed weekly status reports on our search progress and regular communication with your team. Only the top candidates are presented for individual meetings with management. The client always makes the final selection and offer of employment."
  },
  {
    step: "Selecting the Executive and Checking References",
    explanation: "Protect a candidate's confidentiality by performing reference and other checks only after you have expressed a strong interest in an individual. Reffett Associate will provide customized briefing materials on all final candidates."
  },
  {
    step: "Negotiating Compensation",
    explanation: "Assist your organization with understanding the current market for your position, making an employment offer and negotiating a competitive compensation package."
  }
]

export default function ServicesPage() {
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
        title='Services | Producing Outstanding Candidates To Meet Short &amp; Long Term Goals'
        subtitle={subtitle}
      />
      <h3>The Seven Steps to Finding Your Successful Candidate</h3>
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
                  <ListItem className={classes.listitem} button onClick={()=>handleClick(index)}>
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
    </div>
  );
}
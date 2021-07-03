import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab, Box, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import PageTitle from './PageTitle';
import team from '../assets/data/team.json';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      paddingTop: 50,
      '& .MuiTab-textColorPrimary': {
        color: 'rgba(0,0,0,1)',
        fontWeight: 550
      },
      '& .MuiTab-textColorPrimary.Mui-selected':{
        color: '#3f51b5'
      }
    },
    name:{
      fontWeight: 'bold'
    },
    picture: {
      width: '100%'
    },
    memberInfo: {
      textAlign: 'center',
      fontFamily: 'Georgia'
    },
    bio: {
      fontSize: '0.95em'
    }
  })
);

const subtitle = `Our team of experienced and trusted executive search experts are dedicated to providing our clients and candidates the best possible recruitment experience possible. Every search is an opportunity to build relationships through integrity, communication and hard work.`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

export default function TeamPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const RenderTeamMembers = () => {
    return (
      team.map((member) => {
        return (
          <TabPanel value={value} index={member.id}>
            <div style={{ paddingTop: 10 }} className='row' key={member.id}>
              <div className='col-12 col-md-3'>
                <img className={classes.picture} src={member.image} alt={member.name} />
                <p className={classes.memberInfo}>
                  <span className={classes.name}>{member.name}</span><br />
                  {member.title}<br />
                  {member.location}
                </p>
              </div>
              <div className='col-12 col-md-9'>
                <RenderBio bio={member.bio} />
              </div>
            </div>
          </TabPanel>
        );
      })
    );
  }

  const RenderBio = ({ bio }) => {
    return (
      bio.map((paragraph) => {
        return (<p className={classes.bio}>{paragraph}</p>)
      })
    );
  }

  return (
    <div>
      <PageTitle
        title='Our Team | Experienced, Professional, &amp; Invested In Your Goals'
        subtitle={subtitle}
      />
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            {
              team.map((member) => {
                return (
                  <Tab label={member.name} {...a11yProps(member.id)} />
                );
              })
            }
          </Tabs>
        </AppBar>
      </div>
      <RenderTeamMembers />
    </div>
  );
}

/* LEAVING HERE JUST IN CASE
{
    "id": 7,
    "name": "Lonnie P. Taylor",
    "image": "/images/Team/LonnieTaylor.jpg",
    "title": "Senior Advisor",
    "location": "Metro DC",
    "email": "",
    "phoneNumber": "",
    "bio": [
      "Formerly the CEO of the National Job Corps Association, Lonnie Taylor serves as Senior Advisor with Reffett Associates, a retained search firm headquartered in Seattle, Washington with offices in the Washington, DC area and throughout the U.S. He provides strategic advice on development, operations and execution matters pending before the firm.",
      "Lonnie has over 20 years of experience in managing executives and recruiting talent. He enjoys a highly-respected reputation as a counselor to senior leadership on the strategic acquisition of exceptional talent. His experience as a search professional has included tenure with the top ten U.S. executive search firms of Heidrick & Struggles, Boyden and Diversified Search. Within the industry, Lonnie’s efforts have focused on establishing and sustaining Government, Legal and Public Affairs practice groups through search retention, execution and management counseling.",
      "Before joining the executive search industry held distinguish roles in both government and the private sector that included leadership roles on Capitol Hill, in the Administration, and with the U.S. Chamber of Commerce, among others.",
      "He is active in community affairs through his work with non-profit organizations. Lonnie currently serves on the board of International Social Service-USA, a group dedicated to reuniting families across international borders, and is the former Chairman of the Board of Youth Service America and the Washington Area Council on Alcohol and Drug Abuse.",
      "Lonnie holds a Juris Doctorate from the Georgetown University Law Center and a Bachelor’s degree in Business Administration from the George Washington University. He lives in the Washington, DC area."
    ]
  },
  {
    "id": 3,
    "name": "Angel Rodriguez",
    "image": "/images/Team/AngelRodriguez.jpg",
    "title": "Managing Director",
    "location": "Dallas, TX",
    "email": "",
    "phoneNumber": "",
    "bio": [
      "Angel has over 20 years of corporate executive experience as a respected senior business and human resources leader.  Most recently, he served the business community as the Chief HR Officer for WorldVentures, a travel and direct selling company, with over 250,000 representatives and HQ staff.",
      "Prior to this, Angel served as the Senior HR Leader for Kellogg International business, specifically Asia, Latin America, and Europe. In addition, Angel was a key leader in the integration of the Pringles acquisition by Kellogg.",
      "Before joining Kellogg, Angel was the Senior Vice President of Human Resources for United Surgical Partners International, a leader in the ambulatory surgery industry, and preceding that was a Senior HR Executive at Frito Lay, where he was accountable for 43,000 field employees, led a team of 175 HR professionals, led the North American Staffing efforts, and was a key business and culture enabler.",
      "Angel has served on several non-profit boards, including the Corporate Advisory Board for the National Society of Hispanic MBAs, the Harvard/Hispanic Association on Corporate Responsibility Alumni Network, the Texas Lyceum, and the National Board for the Girl Scouts of the USA. In addition, Angel is an Eagle Scout and a member of the INROADS Alumni Hall of Fame, and is actively involved in the movement to find solutions for the challenge of Autism. He holds a Bachelor of Arts from The University of Connecticut, a Master of Business Administration from The University of Texas at Dallas, and a Governance certificate from Harvard Business School."
    ]
  },
*/
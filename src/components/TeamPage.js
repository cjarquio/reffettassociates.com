import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab, Box, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import PageTitle from './PageTitle';
import team from '../assets/data/team.json';

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
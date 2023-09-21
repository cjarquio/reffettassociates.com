import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab, Box, Typography } from '@mui/material'
import PageTitle from './PageTitle';
import team from '../assets/data/team.json';

const styles = {
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: 'white',
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
  }

const subtitle = `Our team of experienced and trusted executive search experts are dedicated to providing our clients and candidates the best possible recruitment experience possible. Every search is an opportunity to build relationships through integrity, communication and hard work.`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
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
    </Box>
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const RenderTeamMembers = () => {
    return (
      team.map((member) => {
        return (
          <TabPanel value={value} index={member.id}>
            <Box style={{ paddingTop: 10 }} sx='row' key={member.id}>
              <Box sx='col-12 col-md-3'>
                <img className={styles.picture} src={member.image} alt={member.name} />
                <Typography sx={styles.memberInfo}>
                  <Box sx={styles.name}>{member.name}</Box><br />
                  {member.title}<br />
                  {member.location}
                </Typography>
              </Box>
              <Box sx='col-12 col-md-9'>
                <RenderBio bio={member.bio} />
              </Box>
            </Box>
          </TabPanel>
        );
      })
    );
  }

  const RenderBio = ({ bio }) => {
    return (
      bio.map((paragraph) => {
        return (<p sx={styles.bio}>{paragraph}</p>)
      })
    );
  }

  return (
    <Box>
      <PageTitle
        title='Our Team | Experienced, Professional, &amp; Invested In Your Goals'
        subtitle={subtitle}
      />
      <Box sx={styles.root}>
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
      </Box>
      <RenderTeamMembers />
    </Box>
  );
}
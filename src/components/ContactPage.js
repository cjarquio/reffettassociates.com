import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Box, Typography } from '@material-ui/core';
import PageTitle from './PageTitle';
import ContactForm from './ContactForm';
import contacts from '../assets/data/contacts.json';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      '& .MuiTab-textColorPrimary': {
        color: 'rgba(0,0,0,1)',
        fontWeight: 550
      },
      '& .MuiTab-textColorPrimary.Mui-selected': {
        color: '#3f51b5'
      }
    },
    contactInfo: {
      display: (null || "") ? 'none' : '',
      margin: 0
    }
  })
);

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

export default function ContactPage(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.location.contactId ? props.location.contactId : 0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ContactInformation = () => {

    return (
      contacts.map((location) => {
        return (
          <TabPanel value={value} index={location.id}>
            <div style={{ paddingTop: 10 }} key={location.id}>
              <h5 style={{ fontWeight: 'bold' }}>{location.office} Office</h5>
              <p className={classes.contactInfo}>{location.contactName}</p>
              <p className={classes.contactInfo}>{location.addressLineOne}</p>
              <p className={classes.contactInfo}>{location.addressLineTwo}</p>
              <p className={classes.contactInfo}>{location.contactMethod}</p>
              <p className={classes.contactInfo}>{location.altContactMethod}</p>
            </div>
          </TabPanel>
        );
      })
    );
  }

  return (
    <div className={classes.root}>
      <PageTitle
        title='Contact Us'
        subtitle=''
      />
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          {
            contacts.map((location) => {
              return (
                <Tab label={location.office} {...a11yProps(location.id)} />
              );
            })
          }
        </Tabs>
      </AppBar>
      <ContactInformation />
      <br /><br />
      <ContactForm />
    </div>
  );
}
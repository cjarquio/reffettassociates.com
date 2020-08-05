import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab, Box, Typography } from '@material-ui/core'
import PageTitle from './PageTitle';
import ContactForm from './ContactForm';
import contacts from '../assets/data/contacts.json';

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

/*function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}*/

export default function ContactPage(props) {
  const [value, setValue] = React.useState(props.location.contactId? props.location.contactId:0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ContactInformation = (props) => {
    return (
      contacts.map((location) => {
        return (
          <TabPanel value={value} index={location.id}>
            <div style={{ paddingTop: 10 }} key={location.id}>
              <p>{location.contactName}</p>
              <p>
                {location.addressLineOne} <br />
                {location.addressLineTwo}
              </p>
              <p>{location.contactMethod}</p>
            </div>
          </TabPanel>
        );
      })
    );
  }

  return (
    <div>
      <PageTitle
        title='Contact Us'
        subtitle=''
      />
      {/*<AppBar position="static" color="default">
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
              contacts.map((location) => {
                return (
                  <Tab label={location.office} {...a11yProps(location.id)} />
                );
              })
            }
          </Tabs>
          </AppBar>*/}
        <ContactInformation />
      <br /><br />
      <ContactForm />
    </div>
  );
}
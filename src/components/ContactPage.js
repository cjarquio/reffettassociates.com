import React from 'react';
import PropTypes from 'prop-types';
import { isBrowser } from 'react-device-detect';
import { AppBar, Tabs, Tab, Box, Typography, Card, CardContent } from '@mui/material';
import PageTitle from './PageTitle';
import contacts from '../assets/data/contacts.json';
import members from '../assets/data/team.json';


const styles = {
  root: {
      '& .MuiTab-textColorPrimary': {
        color: 'rgba(0,0,0,1)',
        fontWeight: 550
      },
      '& .MuiTab-textColorPrimary.Mui-selected': {
        color: '#3f51b5'
      }
    },
    picture: {
      width: '100%'
    },
    contactInfo: {
      display: (null || "") ? 'none' : '',
      margin: 0
    },
    directContact: {
      textAlign: 'center'
    }
}

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
  const [value, setValue] = React.useState(props.location.contactId ? props.location.contactId : 0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ContactInformation = () => {
    return (
      contacts.map((location) => {
        const contactImage = members.find(member => member.name === location.contactName)?.image;
        return (
          <TabPanel value={value} index={location.id}>
            <div style={{ paddingTop: 10 }} sx='row' key={location.id}>
              <div sx='col-12 col-md-1' />
              <div sx='col-12 col-md-3'>
                {
                            contactImage ? <img sx={styles.picture} src={contactImage} alt={location.contactName} />:<></>
                }
              </div>
              <div sx='col-12 col-md-5'>
                {contactImage ? <h5 style={{ fontWeight: 'bold' }}>{location.office} Office</h5> : <></>}
                <p sx={styles.contactInfo}>{location.contactName}</p>
                <p sx={styles.contactInfo}>{location.addressLineOne}</p>
                <p sx={styles.contactInfo}>{location.addressLineTwo}</p>
                <p sx={styles.contactInfo}>{location.contactMethod}</p>
                <p sx={styles.contactInfo}>{location.altContactMethod}</p>
              </div>
            </div>
          </TabPanel>
        );
      })
    );
  }

  return (
    <div sx={styles.root}>
      <PageTitle
        title='Contact Us'
        subtitle=''
      />
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant={isBrowser ? "fullWidth" : "scrollable"}
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
      <div sx={styles.directContact}>
        <Card elevation={5}>
          <CardContent>
            <Typography variant='h6'>Contact Reffett Associates directly at <a href='tel:4256372993'>425.637.2993</a> or <a href='tel:7033515062'>703.351.5062</a></Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

/**
 * {
    "id": 1,
    "office": "Dallas",
    "contactName": "Angel Rodriguez",
    "addressLineOne": "4514 Cole Avenue, Suite 600",
    "addressLineTwo": "Dallas, TX 75205",
    "contactMethod": "angel@reffettassociates.com",
    "altContactMethod": ""
  },
 */
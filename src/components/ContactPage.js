import React from 'react';
import PropTypes from 'prop-types';
import { isBrowser } from 'react-device-detect';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Box, Typography, Card, CardContent } from '@material-ui/core';
import PageTitle from './PageTitle';
import contacts from '../assets/data/contacts.json';
import members from '../assets/data/team.json';


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
        let contactImage = members.find(member => member.name === location.contactName).image;
        return (
          <TabPanel value={value} index={location.id}>
            <div style={{ paddingTop: 10 }} className='row' key={location.id}>
              <div className='col-12 col-md-1' />
              <div className='col-12 col-md-3'>
                <img className={classes.picture} src={contactImage} alt={location.contactName} />
              </div>
              <div className='col-12 col-md-5'>
                <h5 style={{ fontWeight: 'bold' }}>{location.office} Office</h5>
                <p className={classes.contactInfo}>{location.contactName}</p>
                <p className={classes.contactInfo}>{location.addressLineOne}</p>
                <p className={classes.contactInfo}>{location.addressLineTwo}</p>
                <p className={classes.contactInfo}>{location.contactMethod}</p>
                <p className={classes.contactInfo}>{location.altContactMethod}</p>
              </div>
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
      <div className={classes.directContact}>
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
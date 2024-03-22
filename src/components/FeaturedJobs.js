import React from 'react';
import { ButtonBase, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import PageTitle from './PageTitle';
import jobs from '../assets/data/featuredjobs'

const useStyles = makeStyles(() =>
  createStyles({
    serviceButton: {
      border: ' 2px solid',
      borderColor: '#0f2f5b',
      boxShadow: '2px 2px 6px 1px rgba(0,0,0,0.15)',
      height: '300px',
      width: '30%',
      textAlign: 'center',
      margin: '15px',
    },
    link: {
      position: 'relative',
      width: '100%',
      height: '100%',
      color: 'black',
    },
    image: {
      width: '100%',
      height: '200px',
      display: 'inline-block',
      objectFit:'contain'
    },
    serviceTitle: {
      display: 'inline-block',
      fontWeight: 'bold',
      fontSize: '1.1em'
    },
    description: {
      textDecoration: 'none'
    },
    learnMore: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      textAlign: 'center'
    }
  })
);

function FeaturedJobsPage() {
  const classes = useStyles();

  const Jobs = () => {
    return (
      jobs.map((item) => {
        return (
          <ButtonBase
              focusRipple
              className={classes.serviceButton}
              key={item.serviceTitle}
              target='_blank'
              href={item.jobDescriptionPdf}
            >
              <div>
                <img className={classes.image} src={item.companyLogo} alt='company logo' />
                <Typography className={classes.serviceTitle}>{item.companyName}</Typography>
                 <Typography className={classes.description}>{item.jobTitle}</Typography>
              </div>
            </ButtonBase>
        );
      })
    );
  }

  return (
    <div>
      <PageTitle
        title='Featured Recruitments'
      />
      <Jobs />
    </div>
  );
}

export default FeaturedJobsPage;
import React from 'react';
import { ButtonBase, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Link, useRouteMatch } from "react-router-dom";
import PageTitle from './PageTitle';
import areas from '../assets/data/services.json'

const useStyles = makeStyles(() =>
  createStyles({
    serviceButton: {
      border: ' 2px solid',
      borderColor: '#0f2f5b',
      boxShadow: '2px 2px 6px 1px rgba(0,0,0,0.15)',
      height: '350px',
      width: '325px',
      textAlign: 'center',
      margin: '15px'
    },
    link: {
      position: 'relative',
      width: '100%',
      height: '100%',
      color: 'black',
    },
    image: {
      width: '100%',
      display: 'inline-block'
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

const subtitle = `Reffett Associates is a nationally recognized, fully retained executive search firm. As one of the premiere boutique firms in the executive search industry, we work with you to build a stronger organization by finding diverse candidates that fit your organization’s cultures and values.
\n\n
Reffett Associates is proudly veteran-owned and a certified Veteran Owned Small Business (VOSB). In addition, Reffett Associates is on the GSA Schedule and maintains a GSA contract (GS-02F-0194W). We are one of very few executive search firms to be awarded this prestigious qualification after having completed the GSA’s extensive qualifications process.
\n\n
We have extensive experience across the public, private and non-profit sectors including retail and consumer packaged goods, private equity, commercial/retail and federal services, federals, state and municipal government sectors and associations and non-profits.
\n\n
Our team is comprised of former executives with tangible industry experience, possessing real world, relatable knowledge about the challenges executives face in managing talent in a competitive marketplace.
`;

function AboutPage() {
  const classes = useStyles();
  let match = useRouteMatch();

  const ServiceArea = () => {
    return (
      areas.map((item) => {
        return (
          <Link style={{ textDecoration: 'none' }} to={`${match.url}/${item.url}`}>
            <ButtonBase
              focusRipple
              className={classes.serviceButton}
              key={item.serviceTitle}
            >
              <div className={classes.link}>
                <img className={classes.image} src={item.srcImg} alt={item.altText} />
                <Typography className={classes.serviceTitle}>{item.serviceArea}</Typography>
                <Typography>{item.description}</Typography>
                <Typography className={classes.learnMore}>LEARN MORE</Typography>
              </div>
            </ButtonBase>
          </Link >
        );
      })
    );
  }

  return (
    <div>
      <PageTitle
        title='About: Diligent, Experienced, Relationship Focused'
        subtitle={subtitle}
      />
      <ServiceArea />
    </div>
  );
}

export default AboutPage;
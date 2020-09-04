import React from 'react';
import { ButtonBase, Typography } from '@material-ui/core';
import { useParams } from "react-router-dom";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import PageTitle from './PageTitle';
import services from '../assets/data/services.json';

const useStyles = makeStyles(() =>
  createStyles({
    serviceButton: {
      border: ' 2px solid',
      borderColor: '#0f2f5b',
      boxShadow: '2px 2px 6px 1px rgba(0,0,0,0.15)',
      height: '250px',
      width: '200px',
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
      maxHeight: '70%',
      display: 'inline-block'
    },
    serviceTitle: {
      display: 'inline-block',
      fontWeight: 'bold',
      fontSize: '1.1em',
    },
    description: {
      textDecoration: 'none'
    },
    learnMore: {
      fontSize: '1.1em',
      fontWeight: 'bold',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      textAlign: 'center'
    }
  })
);

export default function Services() {
  const classes = useStyles();
  let { topicId } = useParams();

  const serviceArea = services.find(service => service.url === topicId);

  const Clients = () => {
    const clients = serviceArea.clients;

    return (
      clients.map((item) => {
        return (
          <ButtonBase
              className={classes.serviceButton}
              key={item.serviceTitle}
            >
              <div className={classes.link}>
                <img className={classes.image} src={item.image} alt={item.name} />
                <Typography className={classes.learnMore}>{item.name}</Typography>
              </div>
            </ButtonBase>
        );
      })
    );
  }

  return (
    <div>
      <PageTitle
        title={serviceArea.altText}
        subtitle={serviceArea.subtitle}
        subtitle2={serviceArea.subtitleList}
      />
      {/* Map client lists */}
      <h3>Clients</h3>
      <Clients />
    </div>
  );
}
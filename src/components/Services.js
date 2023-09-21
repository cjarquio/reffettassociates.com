import React from 'react';
import { Box, ButtonBase, Typography } from '@mui/material';
import { useParams } from "react-router-dom";
import PageTitle from './PageTitle';
import services from '../assets/data/services.json';

const styles = {
    banner: {
      width: '100%',
      transform: 'scaleY(0.7)'
    },
    clientButton: {
      border: ' 2px solid',
      borderColor: '#0f2f5b',
      boxShadow: '2px 2px 6px 1px rgba(0,0,0,0.15)',
      height: '250px',
      width: '225px',
      textAlign: 'center',
      margin: '20px'
    },
    link: {
      position: 'relative',
      width: '100%',
      height: '100%',
      color: 'black',
    },
    image: {
      paddingTop: '20px',
      width: '100%',
      maxHeight: '65%',
      display: 'inline-block'
    },
    clientName: {
      fontSize: '1.1em',
      fontWeight: 'bold',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      textAlign: 'center'
    }
  }

export default function Services() {
  let { topicId } = useParams();

  const serviceArea = services.find(service => service.url === topicId);

  const Clients = () => {
    const clients = serviceArea.clients;

    return (
      clients.map((item) => {
        return (
          <ButtonBase
              sx={styles.clientButton}
              key={item.serviceTitle}
            >
              <Box sx={styles.link}>
                <img className={styles.image} src={item.image} alt={item.name} />
                <Typography sx={styles.clientName}>{item.name}</Typography>
              </Box>
            </ButtonBase>
        );
      })
    );
  }

  return (
    <div>
      <img src={serviceArea.srcImg} alt={serviceArea.altText} sx={styles.banner} />
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
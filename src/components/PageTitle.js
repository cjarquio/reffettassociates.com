import { Typography } from '@mui/material';
import React from 'react';

const styles = {
    picture: {
      width: '100%'
    },
    bio: {

    }
  }

export default function PageTitle({ title, subtitle, subtitle2 = [] }) {

  return (
    <>
      <Typography variant='h3' sx={styles.bio}>{title}</Typography>
      {
        subtitle.split('\n').map((paragraph) => {
          return (<p>{paragraph}</p>)
        })
      }
      <ul>
        {
          subtitle2.map(item => {
            return (<li>{item}</li>)
          })
        }
      </ul>
    </>
  );
}
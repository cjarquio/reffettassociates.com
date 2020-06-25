import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    officeCards: {
      height: 300,
      margin: 25
    },
    cardImage: {
      height: '100%'
    },
    banner: {
      width: '100%'
    },
    bannerImage: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/images/Banner/Landscape.jpg')`,
      height: '50%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      paddingTop: 30,
      paddingBottom: 30 
    },
    bannerText: {
      margin: 'auto',
      color: 'white',
      width: '60%',
      fontFamily: 'Georgia',
      fontStyle: 'italic'
    }
  })
);

export default function HomePage() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.bannerImage}>
        <div className={classes.bannerText}>
          <h1>A LEADER IN EXECUTIVE SEARCH</h1>
        </div>
      </div>
      <div className='row'>
        <p>Home Page</p>
      </div>
    </div>
  );
}
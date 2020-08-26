import React from 'react';
import { useHistory } from "react-router-dom";
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
    locations: {
      textAlign: 'center',
      color: '#0f2f5b',
      fontFamily: 'Georgia',
      fontWeight: 'bold',
      cursor: 'pointer',
    }
  })
);



export default function HomePage() {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push("/contact");
  }

  return (
    <div>
      <img src='\images\Home\ReffettAssociatesHome.jpg' alt='Reffett Associate Landing Page' className={classes.banner}/>
      <h4 className={classes.locations} onClick={handleClick}>Seattle | Washington D.C. | New York | Dallas | Greensboro</h4>
    </div>
  );
}
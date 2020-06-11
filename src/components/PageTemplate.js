import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    officeCards: {
      height: 345,
      margin: 20
    },
    cardImage: {
      height: '100%'
    }
  })
);



export default function PageTemplate(props) {
  const classes = useStyles();

  return (
    <div style={{paddingBottom: 60}} className='container'>
      {props.children}
    </div >
  );
}
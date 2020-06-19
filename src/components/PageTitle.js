import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    picture: {
      width: '100%'
    },
    bio: {
      fontSize: '0.85em'
    }
  })
);

export default function PageTitle({title, subtitle}) {
  const classes = useStyles();

  return (
    <>
      <h2>{title}</h2>
      {
        subtitle.split('\n').map((paragraph)=>{
          return(<p>{paragraph}</p>)
        })
      }
    </>
  );
}
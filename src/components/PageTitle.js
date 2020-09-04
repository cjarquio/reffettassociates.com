import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    picture: {
      width: '100%'
    },
    bio: {

    }
  })
);

export default function PageTitle({ title, subtitle, subtitle2 = [] }) {
  const classes = useStyles();

  return (
    <>
      <h3 className={classes.bio}>{title}</h3>
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
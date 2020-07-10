import React from 'react';
import { TextField } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      border: '1px solid black',
      borderRadius: '2%',
      width: '60%'
    },
    field: {
      width: '100%'
    },
    form: {
      padding: 15
    }
  })
);

export default function ContactForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form>
        <div className={classes.form}>
          <TextField 
            label='Name'
            className={classes.field}
            name='name'
          />
        </div>
        <div className={classes.form}>
          <TextField 
            label='Email'
            className={classes.field}
            name='email'
          />
        </div>
        <div className={classes.form}>
          <TextField 
            label='Company'
            className={classes.field}
            name='company'
          />
        </div>
        <div className={classes.form}>
          <TextField 
            label='Phone'
            className={classes.field}
            name='phone'
          />
        </div>
        <div style={{paddingBottom: 30}} className={classes.form}>
          <TextField 
            label='Message'
            className={classes.field}
            name='message'
          />
        </div>
      </form>
    </div>
  );
}
import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import PageTitle from './PageTitle';

const useStyles = makeStyles(() =>
  createStyles({
    picture: {
      width: '100%'
    },
    bio: {

    }
  })
);

const subtitle = `Reffett Associates is a nationally recognized, fully retained executive search firm.  As one of the premiere boutique firms in the executive search industry, we work with you to build a stronger organization by incorporating the most effective leaders of today into your firm of tomorrow.  We have extensive experience in retail and consumer packaged goods, private equity, commercial & federal services, government sectors and associations and non-profits.`;

export default function AboutPage() {
  const classes = useStyles();

  return (
    <div>
      <PageTitle
        title='About'
        subtitle={subtitle}
      />
      <p className={classes.bio}>About</p>
    </div>
  );
}
import React from 'react';
import { Card, CardImg, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import PageTemplate from './PageTemplate';
import locations from '../assets/data/locations';

const useStyles = makeStyles(() =>
  createStyles({
    officeCards: {
      height: 300,
      margin: 25
    },
    cardImage: {
      height: '100%'
    }
  })
);

export default function HomePage() {
  const classes = useStyles();

  return (
    <PageTemplate>
      <div className='row'>
        {
          locations.map((office) => {
            return (
              <div className="col-12 col-sm-6">
                <Card outline color='primary' className={classes.officeCards} key={office.id}>
                  <NavLink style={{ height: 'inherit' }} tag={Link} to="/contact">
                    <CardImg top className={classes.cardImage} src={office.image} alt={office.location} />
                  </NavLink>
                </Card>
              </div>
            )
          })
        }
      </div>
    </PageTemplate >
  );
}
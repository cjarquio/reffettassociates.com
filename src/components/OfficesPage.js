import React from 'react';
import { Card, CardImg, CardHeader, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import locations from '../assets/data/locations';

const useStyles = makeStyles(() =>
  createStyles({
    officeCards: {
      height: 300,
      margin: 25
    },
    cardImage: {
      height: '100%',
      borderRadius: '2%'
    },
    cardTitle: {
      color: 'black',
      fontWeight: 'bold',
      alignSelf: 'center',
      fontSize: '1.1em',
      padding: '0.4rem 1.25rem'
    }
  })
);

export default function OfficesPage() {
  const classes = useStyles();

  return (
    <div>
      <div className='row'>
        {
          locations.map((office) => {
            return (
              <div className="col-12 col-sm-6">
                <NavLink style={{ height: 'inherit' }} tag={Link} to="/contact">
                  <Card className={classes.officeCards} key={office.id}>
                    <CardHeader className={classes.cardTitle}>{office.location}</CardHeader>
                    <CardImg top className={classes.cardImage} src={office.image} alt={office.location} />
                  </Card>
                </NavLink>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
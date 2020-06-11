import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import locations from '../assets/data/locations';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    officeCards: {
      height: 375,
      margin: 20
    },
    cardImage: {
      height: '100%'
    }
  })
);

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className='container'>
      <div className='row'>
        {
          locations.map((office) => {
            return (
              <div className="col-12 col-sm-6">
                <Card outline color='primary' className={classes.officeCards} key={office.id}>
                  <NavLink style={{height:'inherit'}} tag={Link} to="/contact">
                    <CardImg top className={classes.cardImage} src={office.image} alt={office.location} />
                  </NavLink>
                </Card>
              </div>
            )
          })
        }
      </div>
    </div >
  );
}
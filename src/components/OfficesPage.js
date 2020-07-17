import React from 'react';
import {isBrowser} from 'react-device-detect';
import { Card, CardImg, CardHeader, CardText, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import locations from '../assets/data/locations';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: isBrowser? 'flex':'contents',
      flex:'0 0 50%',
      maxWidth:'50%',
      '&:last-child:nth-child(odd)': {
        transform:'translateX(50%)'
      }
    },
    officeCards: {
      height: 300,
      margin: 25,
      paddingBottom: '30px'
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
    },
    cardText: {
      color: 'black',
      alignSelf: 'center',
      fontSize: '1em',
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
              <div className={classes.root}>
                <NavLink style={{ height: 'inherit' }} tag={Link} to="/contact">
                  <Card className={classes.officeCards} key={office.id}>
                    <CardHeader className={classes.cardTitle}>{office.location}</CardHeader>
                    <CardImg top className={classes.cardImage} src={office.image} alt={office.location} />
                    <CardText className={classes.cardText}>{office.address}</CardText>
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
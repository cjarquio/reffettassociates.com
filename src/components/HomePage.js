import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import locations from '../assets/data/locations';

export default function HomePage() {
  return (
    <div className='container'>
      <div className='row'>
      {
        locations.map((office) => {
          return (
            <div className='col-sm-12 col-md-3'>
              <Card key={office.id}>
                <CardImg top width='100%' src={office.image} alt={office.location} />
                <CardText>{office.address}</CardText>
              </Card>
            </div>
          )
        })
      }
      </div>
    </div>
  );
}
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import locations from '../assets/data/locations';

export default function HomePage() {
  return (
    <div>
      {
        locations.map((office) => {
          return (
            <Card key={office.id}>
              <CardImg top width="100%" src="reffettassociates/src/assets/images/Seattle.jpg" alt={office.location} />
              <CardText>{office.address}</CardText>
            </Card>
          )
        })
      }
    </div>
  );
}
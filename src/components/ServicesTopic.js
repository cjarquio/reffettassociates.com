import React from 'react';
import { useParams } from "react-router-dom";
import About from './AboutPage';
import { Government, Retail, Public, Private, Manufacturing, Associations } from './ServiceAreas';

export default function ServicesTopics() {
  let { topicId } = useParams();

  switch (topicId) {
    case 'government-professional-services':
      return <Government />;
    case 'retail':
      return <Retail />;
    case 'public-sector':
      return <Public />;
    case 'private-equity':
      return <Private />;
    case 'manufacturing-industrials':
      return <Manufacturing />;
    case 'associations-nonprofit':
      return <Associations />;
    default:
      return( <About />);
  }
}
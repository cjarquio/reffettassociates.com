import React from 'react';
import {
  useParams
} from "react-router-dom";
import PageNotFound from './PageNotFound';

export default function ServicesTopics() {
  let { topicId } = useParams();

  switch (topicId) {
    case 'government-professional-services':
      return <h3>Government Contracting &amp; Professional Services</h3>;
    case 'retail':
      return <h3>Retail</h3>;
    case 'public-sector':
      return <h3>Public Sector</h3>;
    case 'private-equity':
      return <h3>Private Equity &amp; Financial Services</h3>;
    case 'manufacturing-industrials':
      return <h3>Manufacturing &amp; Industrials</h3>;
    case 'associations-nonprofit':
      return <h3>Association &amp; Nonprofit</h3>;
    default:
      return( <PageNotFound />);
  }
}
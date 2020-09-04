import React from 'react';
import { useParams } from "react-router-dom";
import PageTitle from './PageTitle';
import services from '../assets/data/services.json';

export default function Services() {
  let { topicId } = useParams();

  const serviceArea = services.find(service => service.url === topicId);
  
  console.error(JSON.stringify(serviceArea));

  return (
    <div>
      <PageTitle
        title={serviceArea.altText}
        subtitle={serviceArea.subtitle}
        subtitle2={serviceArea.subtitleList}
      />
      {/* Map client lists */}
      <h3>Clients</h3>
    </div>
  );
}
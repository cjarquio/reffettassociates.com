import React from 'react';
import PageTitle from './PageTitle';

const subtitle = `Our process of finding you the next leader for your organization has been time tested. Regardless of the role being recruited for or the industry the job is in our Team will present you with a diverse slate of qualified candidates for consideration.  
\n\n
We start every search by getting to know your organization and your culture. From there we follow our process and engage the Reffett Associate team to begin finding candidates that will not only have the skills needed to excel in the role but will also be a match for your organization’s own unique culture. 
\n\n
By going beyond recycling database candidates and posting online for active job seekers we can concentrate our efforts on contacting prospective candidates that match the skills and experience you are seeking. For every search we conduct we create a unique recruitment plan to target and pursue new candidates for your role and then our team contacts them directly to determine their interest and their fit for your opportunity. This labor-intensive process generates the best results and most diverse candidate pool for your position.`;

export default function ProcessPage(){
  return(
    <div>
      <PageTitle
        title='Process | A Leader In Identification, Evaluation, &amp; Development'
        subtitle={subtitle}
      />
    </div>
  );
}
import React from 'react';
import PageTitle from './PageTitle';

const subtitle = `Reffett Associates is a nationally recognized, fully retained executive search firm. As one of the premiere boutique firms in the executive search industry, we work with you to build a stronger organization by finding diverse candidates that fit your organization’s cultures and values.
\n\n
We have extensive experience across the public, private and non-profit sectors including retail and consumer packaged goods, private equity, commercial and federal services, Federals, State and Municipal government sectors and associations and non-profits.
\n\n
Our team is comprised of former executives with tangible industry experience, possessing real world, relatable knowledge about the challenges executives face in managing talent in a competitive marketplace. 
`;

export default function AboutPage() {
  return (
    <div>
      <PageTitle
        title='About'
        subtitle={subtitle}
      />
    </div>
  );
}
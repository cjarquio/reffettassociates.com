import React from 'react';
import PageTitle from './PageTitle';

const subtitle = `We believe that every search is a partnership with our client and we won’t stop working on your behalf until we find the right fit for your needs. Our executive search professionals will work directly with you to create a search plan that is unique to your needs and then they will work with you until your position is successfully filled. 
\n\n
Our goal as a small firm is to be able to provide a high level of personal attention and unparalleled service to both our clients and our candidates. For the Reffett Associates team, executive recruiting is all about relationships. Building and maintaining long-term, productive relationships with everyone with whom we work is our first priority. 
\n\n
Through our time tested process we will work with you to define the role, go to market, identify and recruit a diverse talent pool and navigate the interview and hiring process. On Average you will see your first group of candidates within 5 weeks of our Kick-off meeting. `;

export default function ServicesPage(){
  return(
    <div>
      <PageTitle
        title='Services | Producing Outstanding Candidates To Meet Short &amp; Long Term Goals'
        subtitle={subtitle}
      />
    </div>
  );
}
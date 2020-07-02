import React from 'react';
import PageTitle from './PageTitle';

const subtitle = `Our process of finding you the next leader for your organization has been time tested. Regardless of the role being recruited for or the industry the job is in our Team will present you with a diverse slate of qualified candidates for consideration.  
\n\n
We start every search by getting to know your organization and your culture. From there we follow our process and engage the Reffett Associate team to begin finding candidates that will not only have the skills needed to excel in the role but will also be a match for your organization’s own unique culture. 
\n\n
By going beyond recycling database candidates and posting online for active job seekers we can concentrate our efforts on contacting prospective candidates that match the skills and experience you are seeking. For every search we conduct we create a unique recruitment plan to target and pursue new candidates for your role and then our team contacts them directly to determine their interest and their fit for your opportunity. This labor-intensive process generates the best results and most diverse candidate pool for your position.`;

export default function ProcessPage() {
  return (
    <div>
      <PageTitle
        title='Process | A Leader In Identification, Evaluation, &amp; Development'
        subtitle={subtitle}
      />
      <h4>Our Commitment to Equity and Diversity in Recruiting</h4>
      <p>
        Reffett Associates believes that diversity in the workforce should be a priority of all organizations.  With every executive search assignment, our firm makes a conscious effort to contact, develop and present a slate of candidates who represent every race, gender, ethnic background, physical challenge, religion, sexual orientation and age.
      </p>
      <p>
        All consideration is given to full inclusion of candidates of all backgrounds and diversity. Our Clients will affirm that Reffett Associates is all-inclusive in presenting candidates that represent diverse races, religions, and nationalities. The firm keeps on file all research, interview notes, background checks and reference checks conducted to ensure that all information is readily available should the need to produce it arise.
      </p>
      <p>
        Reffett Associates does not ask for, nor does it record, personal information regarding a candidate’s race, color, religion, sex, or national origin, and in instances where that information is disclosed in the course of the search process, we will not allow it have any bearing on a candidate’s ability to progress through the search process.
      </p>
      <h4>Our Pursuit of Equity in Recruiting Practices</h4>
      <p>
        Furthermore, Reffett Associates has a commitment to equity and equitable search practices. We recognize that often, and particularly for leadership positions, there are systemic barriers that prevent potential applicants from being aware of an opportunity or be willing to apply for a potential opportunity. Through our recruitment process we seek to ensure that any barriers to potential candidates or search techniques that exist that would artificially limit our pool of potential candidates are identified and eliminated to create the broadest possible applicant pool for our Client.
      </p>
      <h4>Preventing Bias in Candidate Presentation</h4>
      <p>
        In an effort to eliminate bias in the presentation of candidates either by Reffett Associates staff or a Search/Selection committee, Reffett Associates has created a reviewable anti-bias process. This process will be available to you for review at any time. The goal of this anti-bias process is that any authorized member of your organization can at any time check the status of any applicant for your position ensuring that all applicants receive equitable consideration.
      </p>
    </div>
  );
}
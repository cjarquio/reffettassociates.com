import React from 'react';
import PageTitle from './PageTitle';

function ServicesTemplate(props) {
  return (
    <div>
      <PageTitle
        title={props.title}
        subtitle={props.subtitle}
      />
      {/* Map client lists */}
      <h3>Clients</h3>
      {props.children}
    </div>
  );
}

export function Government() {
  const title = 'Government Contracting & Professional Services';
  const subtitle = `Success in today's Federal, State and Local Government markets requires leaders and executives who understand this rapidly changing marketplace.  Our group of Managing Directors has a deep understanding of your needs, and how to navigate the intricacies of doing business with the government.
  \n\n
  With experience at all levels of Federal Government contracting and broad experience in working with the top Federal, State and Local Government service providers, we understand the unique requirements for senior leaders and executives with experience in government contracting and program management.  This includes contractors performing work overseas and in combat zones in support of US Forces.
  \n\n
  Our experience encompasses the entire Federal Government, and a majority of the top 100 Federal contractors.`;

  return (
    <div>
      <ServicesTemplate title={title} subtitle={subtitle}>
        <h6>Will be adding each client image here</h6>
      </ServicesTemplate>
    </div>
  );
}

export function Retail() {
  const title = 'Retail';
  const subtitle = `We understand the challenges that you face, and what is needed to drive success. In today’s omni-channel retail world, leaders must be knowledgeable and versatile. This is not an environment for the timid.
  \n\n
  Our Managing Directors were selected based on their expertise in key leadership roles in the industries they serve. Our Retail / Consumer team is composed of senior executives who have been on “your side” of the desk. They understand the importance of identifying superior leaders and recruiting them to the organization. The search firm you select must have the same sense of urgency displayed by your organization – timeliness is essential to effective candidate placement.
  \n\n
  We have assisted companies in all areas of the Retail / Consumer world, such as traditional department stores, specialty retail companies, business to consumer, and on-line retailing. Each search engagement is specifically tailored to the needs of the client and is personally conducted by a Managing Director – from the beginning to its successful conclusion.`;

  return (
    <div>
      <ServicesTemplate title={title} subtitle={subtitle}>
        <h6>Will be adding each client image here</h6>
      </ServicesTemplate>
    </div>
  );
}

export function Public() {
  const title = 'Public Sector';
  const subtitle = `As a leading provider of retained executive search services to the federal government, we possess a unique understanding of your needs. Our group of Managing Directors bring with them unparalleled experience in the public sector. With experience ranging from holding senior level positions in the Office of Personnel Management, Department of Defense, on Capitol Hill, they are experienced in the government hiring process and the issues that you confront.
  \n\n
  Reffett Associates is a veteran-owned business and maintains a GSA contract (GS-02F-0194W). We are one of the few executive search firms to be awarded this prestigious qualification after completing their extensive qualification process. In addition, we are members of the National Defense Industrial Association, the Professional Services Council, and the Pacific Northwest Defense Coalition.`;

  return (
    <div>
      <ServicesTemplate title={title} subtitle={subtitle}>
        <h6>Will be adding each client image here</h6>
      </ServicesTemplate>
    </div>
  );
}

export function Private() {
  const title = 'Private Equity & Financial Services';
  const subtitle = `As market conditions have changed, Private Equity has become a greater part of our firm’s practice. We understand the talents and skills required to lead companies through all the stages of the life cycle, from the earliest stage start-up, to upgrading the management team of a portfolio company.
  \n\n
  Our firm has assisted major Private Equity firms in all stages of their evaluation process:`;

  return (
    <div>
      <ServicesTemplate title={title} subtitle={subtitle}>
        <h6>Will be adding each client image here</h6>
      </ServicesTemplate>
    </div>
  );
}

export function Manufacturing() {
  const title = 'Manufacturing & Industrials';
  const subtitle = `Success in today’s market requires leaders and executives who understand the nature of its rapidly changing landscape.  Often this means leveraging external partners such as Reffett Associates to identify and attract exceptional talent that can make a significant business impact.
  \n\n
  The Reffett Associates team is uniquely positioned to understand our clients’ needs.  Having served as senior executives in major professional services and Fortune 500 companies, we possess deep expertise in providing business solutions to commercial and government clients.  Our insight and consultative approach, combined with access to the best talent, ensures that the results we deliver to clients exceed their expectations.`;

  return (
    <div>
      <ServicesTemplate title={title} subtitle={subtitle}>
        <h6>Will be adding each client image here</h6>
      </ServicesTemplate>
    </div>
  );
}

export function Associations() {
  const title = 'Association & Nonprofit';
  const subtitle = `Outstanding leadership skills are developed over a lifetime of great opportunities and experiences.  We are intimately familiar with association and not-for-profit organizations and the challenges they face every day.
  \n\n
  We are especially well qualified to identify that unique person to fit your organization’s needs.  As not-for-profit organizations begin operating more like businesses and implementing best practices and governance structures, effective leadership at the top is imperative.  Reffett Associates will find the individuals who best fit your organization and will work towards the achievement of your organization’s mission.
  \n\n
  Our experience encompasses the entire Federal Government, and a majority of the top 100 Federal contractors.`;

  return (
    <div>
      <ServicesTemplate title={title} subtitle={subtitle}>
        <h6>Will be adding each client image here</h6>
      </ServicesTemplate>
    </div>
  );
}
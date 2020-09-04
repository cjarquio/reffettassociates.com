import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle';

export default function ETAPage() {
  return (
    <div>
      <PageTitle
        title='Executive Transition Assistance'
        subtitle=''
      />
      <p>Are you ready for your next career move? In uncertain times or during a booming market you should always be ready for what the next opportunity or necessity brings. Take control of your career. </p>
      <p>Is your company preparing to downsize? </p>
      <p>No opportunity for advancement?</p>
      <p>Unhealthy work environment?</p>
      <p>Is it time to make the jump to the C-Suite?</p>
      <p>Are you ready to finally find that dream job?</p>
      <p>Reffett Associates’ team of experienced Managing Directors has been placing executives of all types into top jobs across a variety of private and public sector opportunities for years. We can help you take the steps to be ready for your next career transition.</p>
      <ul><h5>Our Executive Transition Assistance program is discrete and high touch. Our senior staff will work directly with you to:</h5>
      <li> Identify appropriate industry opportunities</li>
      <li>Translate your unique skill set and experience into meaningful language</li>
      <li>Create an update, modern, resume that connects with hiring authorities</li>
      <li>Develop networking strategies</li>
      <li>Refine your LinkedIn profile to attract attention and communicate your capabilities</li>
      <li>Practice interview skills</li>
      <li>And more.</li>
      </ul>
      <p>On average it takes executives 9 months to make a career transition. Are you ready for your next step?</p>
      <p><a href='mailto:tom.young@reffettassociates.com'>Contact Tom Young</a> for an introductory meeting to find out more.</p>
      <p>We are committed to serving Veterans and helping them achieve their career goals. <Link to='/veterans'>Learn More.</Link></p>
    </div>
  );
}
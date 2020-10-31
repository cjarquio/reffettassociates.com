import React from 'react';
import {isBrowser} from 'react-device-detect';
import PageTitle from './PageTitle';

const subtitle = ``;

const imageStyle = isBrowser?
{
  width: '65%',
  height: 'fit-content',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
} :
{
  width: '100%'
};

export default function VeteransPage() {
  return (
    <div>
      <PageTitle
        title='Committed to Veterans | Serving Those That Served'
        subtitle={subtitle}
      />
      <h6 style={{ textDecoration: 'underline' }}>Committed to Veterans: Serving Those That Served</h6>
      <p>
        Reffett Associates is committed to serving and working with our veterans and helping them make the
        transition from active duty to the job market. We are experienced at helping veterans translate their
        military experience and training into meaningful and rewarding work in the public and private sector.
        Our staff has broad experience helping veterans from all branches and of all ranks as they transition to
        meaningful employment outside of the armed services. Even if you have been out of the military for
        years we can help you reframe your time in uniform to make you a more compelling candidate for
        civilian employers. We also work closely with a host of employers that value military service and many
        of them maintain close relationship with DoD and other related government agencies.
      </p>
      <p>As part of our commitment to members of the military we offer all recently discharged veterans, or soon to leave active service, 10% off our Executive Transition Assistance pricing</p>
      <img src='\images\Veterans\Veterans.jpg' alt='Veteran' style={imageStyle}/>
    </div>
  );
}
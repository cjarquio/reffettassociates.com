import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import PageTitle from './PageTitle';
import team from '../assets/data/team.json';

const useStyles = makeStyles(() =>
  createStyles({
    picture: {
      width: '100%'
    },
    bio: {
      fontSize: '0.85em'
    }
  })
);

const subtitle = `Reffett Associates is a nationally recognized, fully retained executive search firm.  As one of the premiere boutique firms in the executive search industry, we work with you to build a stronger organization by incorporating the most effective leaders of today into your firm of tomorrow.  We have extensive experience in retail and consumer packaged goods, private equity, commercial & federal services, government sectors and associations and non-profits.
\n
Our team is comprised of executives with tangible industry experience, possessing real world, relatable knowledge about the challenges executives face in managing talent in a competitive marketplace.`;

export default function AboutPage() {
  const classes = useStyles();

  const RenderTeamMembers = () => {
    return (
      team.map((member) => {
        return (
          <div style={{ borderBottom: '2px solid black' }} className='row' key={member.id}>
            <div className='col-12 col-md-2'>
              <img className={classes.picture} src={member.image} alt={member.name} />
              <p>
                {member.name}<br />
                {member.title}<br />
                {member.location}
              </p>
            </div>
            <div className='col-12 col-md-10'>
              <RenderBio bio={member.bio} />
            </div>
          </div>
        );
      })
    );
  }

  const RenderBio = ({ bio }) => {
    return (
      bio.map((paragraph) => {
        return (<p className={classes.bio}>{paragraph}</p>)
      })
    );
  }

  return (
    <div>
      <PageTitle
        title='About | Investing In The Future Through Human Capital'
        subtitle={subtitle}
      />
      <br/>
      <h2>Our Team | Experienced, Professional, &amp; Invested In Your Goals</h2>
      <RenderTeamMembers />
    </div>
  );
}
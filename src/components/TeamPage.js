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

const subtitle = `Our team is comprised of executives with tangible industry experience, possessing real world, relatable knowledge about the challenges executives face in managing talent in a competitive marketplace.`;

export default function TeamPage() {
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
        title='Our Team | Experienced, Professional, &amp; Invested In Your Goals'
        subtitle={subtitle}
      />
      <RenderTeamMembers />
    </div>
  );
}
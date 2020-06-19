import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
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

export default function AboutPage() {
  const classes = useStyles();

  const RenderTeamMembers = () => {
    return (
      team.map((member) => {
        return (
          <div style={{borderBottom: '2px solid black'}} className='row' key={member.id}>
            <div className='col-12 col-md-2'>
              <img className={classes.picture} src={member.image} alt={member.name}/>
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
      <RenderTeamMembers />
    </div>
  );
}
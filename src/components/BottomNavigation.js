import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarText, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      backgroundColor: '#0f2f5b'
    },
    logo: {
      width: '100%',
      height: 'auto'
    },
    bottomNavText: {
      color: 'white'
    },
    navLink: {
      padding: '0.5rem 1rem 0.5rem 0rem',
      color:'white',
      textDecoration: 'underline',
      fontSize: '0.9em'
    }
  })
);

export default function BottomNavigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <div className='container'>
     <NavbarBrand style={{width:'200px'}} tag={Link} to="/"><img className={classes.logo} src='/images/Logo/BottomNavLogo.png' alt='Logo' /></NavbarBrand>
     <NavbarText className={classes.bottomNavText}>&copy;2020 All Rights Reserved.</NavbarText>
     <Nav className={classes.navOptions}>
            <NavItem>
              <NavLink className={classes.navLink} tag={Link} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classes.navLink} tag={Link} to="/offices">Offices</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classes.navLink} tag={Link} to="/team">Our Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classes.navLink} tag={Link} to="/process">Process</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classes.navLink} tag={Link} to="/services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classes.navLink} tag={Link} to="/eta">Executive Transition Assistance</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classes.navLink} tag={Link} to="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
     </div>
    </div>
  );
}
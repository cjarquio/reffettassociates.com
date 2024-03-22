import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    logo: {
      width: '100%',
      height: 'auto'
    },
    navOptions: {
      fontSize: '1.1em',
      fontWeight: 'bold'
    },
    activeLink: {
      textDecoration: 'underline'
    },
    logoButton:{
      margin: 0
    }
  })
);

export default function MainNavigation() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={classes.root}>
      <Navbar color="faded" light expand='md'>
        <NavbarBrand className={classes.logoButton} style={location.pathname === '/'?{width:'100px'}:{width:'200px'}} tag={Link} to="/"><img className={classes.logo} src={location.pathname === '/'? 'images/Logo/Logo.png':'images/Logo/ReffettAssociatesLogov2.png'} alt='Reffett Associates' /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={classes.navOptions} navbar>
            <NavItem onClick={toggle}>
              <NavLink style={{color: location.pathname === '/about'? 'rgba(207,32,47,1)':'rgba(207,32,47,0.7)'}} tag={Link} to="/about">About</NavLink>
            </NavItem>
            <NavItem onClick={toggle}>
              <NavLink style={{color: location.pathname === '/team'? 'rgba(207,32,47,1)':'rgba(207,32,47,0.7)'}} tag={Link} to="/team">Our Team</NavLink>
            </NavItem>
            <NavItem onClick={toggle}>
              <NavLink style={{color: location.pathname === '/services'? 'rgba(207,32,47,1)':'rgba(207,32,47,0.7)'}} tag={Link} to="/services">Services</NavLink>
            </NavItem>
            <NavItem onClick={toggle}>
              <NavLink style={{color: location.pathname === '/process'? 'rgba(207,32,47,1)':'rgba(207,32,47,0.7)'}} tag={Link} to="/process">Process</NavLink>
            </NavItem>
            <NavItem onClick={toggle}>
              <NavLink style={{color: location.pathname === '/veterans'? 'rgba(207,32,47,1)':'rgba(207,32,47,0.7)'}} tag={Link} to="/veterans">Veterans</NavLink>
            </NavItem>
            <NavItem onClick={toggle}>
              <NavLink style={{color: location.pathname === '/offices'? 'rgba(207,32,47,1)':'rgba(207,32,47,0.7)'}} tag={Link} to="/offices">Offices</NavLink>
            </NavItem>
            <NavItem onClick={toggle}>
              <NavLink style={{color: location.pathname === '/eta'? 'rgba(207,32,47,1)':'rgba(207,32,47,0.7)'}} tag={Link} to="/eta">Executive Transition Assistance</NavLink>
            </NavItem>
            <NavItem onClick={toggle}>
              <NavLink style={{color: location.pathname === '/contact'? 'rgba(207,32,47,1)':'rgba(207,32,47,0.7)'}} tag={Link} to="/contact">Contact</NavLink>
            </NavItem>
            <NavItem onClick={toggle}>
              <NavLink style={{color: location.pathname === '/news'? 'rgba(207,32,47,1)':'rgba(207,32,47,0.7)'}} tag={Link} to="/news">News</NavLink>
            </NavItem>
            <NavItem onClick={toggle}>
              <NavLink style={{color: location.pathname === '/featuredrecruitments'? 'rgba(207,32,47,1)':'rgba(207,32,47,0.7)'}} tag={Link} to="/featuredrecruitments">Featured Recruitments</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
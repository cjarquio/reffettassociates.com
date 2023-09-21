import { Box } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavbarText, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const styles = {
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
      color: 'white',
      fontSize: '0.65em'
    },
    navLink: {
      padding: '0.5rem 1rem 0.5rem 0rem',
      color: 'white',
      fontSize: '0.75em'
    }
}

export default function BottomNavigation() {
  const location = useLocation();

  return (
    <Box sx={styles.root}>
      <Box sx='container'>
        <Nav sx={styles.navOptions}>
          <NavItem>
            <NavLink style={{textDecoration: location.pathname === '/about'? '':'underline'}} sx={styles.navLink} tag={Link} to="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{textDecoration: location.pathname === '/team'? '':'underline'}} sx={styles.navLink} tag={Link} to="/team">Our Team</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{textDecoration: location.pathname === '/services'? '':'underline'}} sx={styles.navLink} tag={Link} to="/services">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{textDecoration: location.pathname === '/process'? '':'underline'}} sx={styles.navLink} tag={Link} to="/process">Process</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{textDecoration: location.pathname === '/veterans'? '':'underline'}} sx={styles.navLink} tag={Link} to="/veterans">Veterans</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{textDecoration: location.pathname === '/offices'? '':'underline'}} sx={styles.navLink} tag={Link} to="/offices">Offices</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{textDecoration: location.pathname === '/eta'? '':'underline'}} sx={styles.navLink} tag={Link} to="/eta">Executive Transition Assistance</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{textDecoration: location.pathname === '/contact'? '':'underline'}} sx={styles.navLink} tag={Link} to="/contact">Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{textDecoration: location.pathname === '/news'? '':'underline'}} sx={styles.navLink} tag={Link} to="/news">News</NavLink>
          </NavItem>
        </Nav>
        <NavbarBrand style={{ width: '200px' }} tag={Link} to="/"><img sx={styles.logo} src='images/Logo/BottomNavLogo.png' alt='Logo' /></NavbarBrand>
        <NavbarText sx={styles.bottomNavText}>&copy;2023 All Rights Reserved.</NavbarText>
      </Box>
    </Box>
  );
}
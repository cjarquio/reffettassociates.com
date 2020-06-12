import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      //borderBottom: '1px solid #0f2f5b'
    },
    logo: {
      width: '100%',
      height: 'auto'
    },
    navOptions: {
      marginLeft: 'auto',
      fontSize: '1.2em'
    },
    activeLink: {
      textDecoration: 'underline'
    }
  })
);

export default function MainNavigation() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={classes.root}>
      <Navbar color="faded" light expand='md'>
        <NavbarBrand style={{width:'250px'}} tag={Link} to="/"><img className={classes.logo} src='/images/Logo.png' alt='Logo' /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={classes.navOptions} navbar>
            <NavItem>
              <NavLink tag={Link} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/processes">Process</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/news">News</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
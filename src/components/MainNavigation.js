import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default function MainNavigation(){
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return(
    <>
      <Navbar color="dark" dark expand='md'>
        <NavbarBrand tag={Link} to="/">Reffett Associates Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
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
    </>
  );
}
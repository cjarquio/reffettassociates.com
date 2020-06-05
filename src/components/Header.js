import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default function Header(){
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return(
    <>
      <Navbar color="dark" dark expand='md'>
        <NavbarBrand href="/">Reffett Associates Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink disabled href="/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="/">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="/">Process</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="/">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="/">News</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(()=>
  createStyles({
    root: {
      position: 'fixed',
      bottom: 0,
      width: '100%'
    }
  })
);

export default function Header(){
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return(
    <div className={classes.root}>
      <Navbar color="dark" dark expand='md'>
        <NavbarBrand href="/">Reffett Associates Logo</NavbarBrand>
      </Navbar>
    </div>
  );
}
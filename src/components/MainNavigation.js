import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Box, Collapse, Container, Toolbar, Typography, IconButton, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const styles = {
  appbar: {
    backgroundColor: 'white'
  },
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
}

const pages = [
  {page: 'About', to: '/about'},
  {page: 'Team', to: '/team'},
  {page: 'Services', to: '/services'},
  {page: 'Process', to: '/process'},
  {page: 'Veterans', to: '/veterans'},
  {page: 'Offices', to: '/offices'},
  {page: 'Executive Transition Assistance', to: '/eta'},
  {page: 'Contact', to: '/contact'},
  {page: 'News', to: '/news'}
]

export default function MainNavigation() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img style={styles.logo} src={location.pathname === '/'? 'images/Logo/Logo.png':'images/Logo/ReffettAssociatesLogov2.png'} alt='Reffett Associates' />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )

  // return (
  //   <Box>
  //     <AppBar position='static' sx={styles.appbar}>
  //       <NavbarBrand className={styles.logoButton} style={location.pathname === '/'?{width:'100px'}:{width:'200px'}} tag={Link} to="/"><img style={styles.logo} src={location.pathname === '/'? 'images/Logo/Logo.png':'images/Logo/ReffettAssociatesLogov2.png'} alt='Reffett Associates' /></NavbarBrand>
  //       <NavbarToggler onClick={toggle} />
  //       <Collapse isOpen={isOpen} navbar>
  //         <Nav className={styles.navOptions} navbar>
  //           <NavItem onClick={toggle}>
  //             <NavLink style={{color: location.pathname === '/about'? 'rgba(207,32,47,1)':'rgba(207,32,47,0.7)'}} tag={Link} to="/about">About</NavLink>
  //           </NavItem>
  //           <NavItem onClick={toggle}>
  //             <NavLink style={{color: location.pathname === '/team'? 'rgba(207,32,47,1)':'rgba(207,32,47,0.7)'}} tag={Link} to="/team">Our Team</NavLink>
  //           </NavItem>
  //           <NavItem onClick={toggle}>
  //             <NavLink style={{color: location.pathname === '/services'? 'rgba(207,32,47,1)':'rgba(207,32,47,0.7)'}} tag={Link} to="/services">Services</NavLink>
  //           </NavItem>
  //           <NavItem onClick={toggle}>
  //             <NavLink style={{color: location.pathname === '/process'? 'rgba(207,32,47,1)':'rgba(207,32,47,0.7)'}} tag={Link} to="/process">Process</NavLink>
  //           </NavItem>
  //           <NavItem onClick={toggle}>
  //             <NavLink style={{color: location.pathname === '/veterans'? 'rgba(207,32,47,1)':'rgba(207,32,47,0.7)'}} tag={Link} to="/veterans">Veterans</NavLink>
  //           </NavItem>
  //           <NavItem onClick={toggle}>
  //             <NavLink style={{color: location.pathname === '/offices'? 'rgba(207,32,47,1)':'rgba(207,32,47,0.7)'}} tag={Link} to="/offices">Offices</NavLink>
  //           </NavItem>
  //           <NavItem onClick={toggle}>
  //             <NavLink style={{color: location.pathname === '/eta'? 'rgba(207,32,47,1)':'rgba(207,32,47,0.7)'}} tag={Link} to="/eta">Executive Transition Assistance</NavLink>
  //           </NavItem>
  //           <NavItem onClick={toggle}>
  //             <NavLink style={{color: location.pathname === '/contact'? 'rgba(207,32,47,1)':'rgba(207,32,47,0.7)'}} tag={Link} to="/contact">Contact</NavLink>
  //           </NavItem>
  //           <NavItem onClick={toggle}>
  //             <NavLink style={{color: location.pathname === '/news'? 'rgba(207,32,47,1)':'rgba(207,32,47,0.7)'}} tag={Link} to="/news">News</NavLink>
  //           </NavItem>
  //         </Nav>
  //       </Collapse>
  //     </AppBar>
  //   </Box>
  // );
}
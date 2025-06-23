import { AppShell, rem, Box, Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import FooterNavigation from '../FooterNavigation/FooterNavigation';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import classes from './Root.module.css';
import ScrollToTop from './ScrollToTop';

export const AppLayout: React.FC = () => {
  return (
    <AppShell header={{ height: rem(96) }}>
      <ScrollToTop />
      <AppShell.Header className={classes.header}>
        <HeaderNavigation />
      </AppShell.Header>
      <Box className={classes.appMain}>
        <Outlet />
      </Box>
      <Container fluid className={classes.footerContainer}>
        <FooterNavigation />
      </Container>
    </AppShell>
  );
};

export default AppLayout;

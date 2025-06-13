import {
  Box,
  Center,
  Container,
  Group,
  Menu,
  UnstyledButton,
} from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import classes from './HeaderNavigation.module.css';
import { Logo } from '../../Logo/ReffettAssociatesLogo';
import { Link, useNavigate } from 'react-router-dom';

const links = [
  {
    link: 'about',
    label: 'About',
    links: [
      { link: '/about', label: 'About Reffett Associates' },
      { link: '/team', label: 'Our Team' },
      // { link: "/recruitments", label: "Featured Recruitments" },
    ],
  },
  {
    link: 'expertise',
    label: 'Expertise',
    links: [
      { link: '/process', label: 'Our Process' },
      { link: '/values', label: 'Our Values' },
      { link: '/veterans', label: 'For Veterans' },
      // {
      //   link: '/executive-transfer-assistance',
      //   label: 'Executive Transfer Assistance',
      // },
    ],
  },
  {
    link: 'industries',
    label: 'Industries',
    links: [
      { link: '/retail', label: 'Retail' },
      { link: '/public-sector', label: 'Public Sector' },
      {
        link: '/private-sector',
        label: 'Private Equity and Financial Services',
      },
      { link: '/nonprofits', label: 'Associations and Nonprofits' },
      {
        link: '/manufacturing-and-industrials',
        label: 'Manufacturing and Industrials',
      },
      { link: '/government-contracting', label: 'Government Contracting' },
    ],
  },
  {
    link: '/insights',
    label: 'Insights',
  },
  {
    link: '/contact',
    label: 'Contact Us',
  },
];

export const HeaderNavigation: React.FC = () => {
  const navigate = useNavigate();
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Link to={item.link} key={item.link}>
        <Menu.Item>{item.label}</Menu.Item>
      </Link>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <Container className={classes.hoverUnderlineAnimation}>
              <a
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
              >
                <Center>
                  <span className={classes.linkLabel}>{link.label}</span>
                  <IconPlus size="0.9rem" stroke={1.5} />
                </Center>
              </a>
            </Container>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Container className={classes.hoverUnderlineAnimation}>
        <Link key={link.label} to={link.link} className={classes.link}>
          {link.label}
        </Link>
      </Container>
    );
  });

  return (
    <Container size={'lg'}>
      <Box className={classes.inner}>
        <UnstyledButton onClick={() => navigate('/')}>
          <Logo style={{ height: '3.5rem' }} />
        </UnstyledButton>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
      </Box>
    </Container>
  );
};

export default HeaderNavigation;

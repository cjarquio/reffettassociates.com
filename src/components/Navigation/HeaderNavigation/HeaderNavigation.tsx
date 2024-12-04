import {
  Box,
  Center,
  Container,
  Group,
  Menu,
  UnstyledButton,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import classes from "./HeaderNavigation.module.css";
import { Logo } from "../../Logo/ReffettAssociatesLogo";

const links = [
  {
    link: "about",
    label: "About",
    links: [
      { link: "/about", label: "About Reffett Associates" },
      { link: "/team", label: "Our Team" },
      { link: "/locations", label: "Locations" },
      { link: "/veterans", label: "Veterans" },
      { link: "/recruitments", label: " Featured Recruitments" },
    ],
  },
  {
    link: "expertise",
    label: "Expertise",
    links: [
      { link: "/services", label: "Services" },
      { link: "/process", label: "Process" },
    ],
  },
  {
    link: "industries",
    label: "Industries",
    links: [
      { link: "/retail", label: "Retail" },
      { link: "/public", label: "Public Sector" },
      { link: "/private", label: "Private Equity and Financial Services" },
      { link: "/nonprofits", label: "Associations and Nonprofits" },
      { link: "/manufacturing", label: "Manufacturing and Industrials" },
    ],
  },
  {
    link: "/insights",
    label: "Insights",
  },
];

export const HeaderNavigation: React.FC = () => {
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
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
        <a
          key={link.label}
          href={link.link}
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          {link.label}
        </a>
      </Container>
    );
  });

  return (
    <Container size={"lg"}>
      <Box className={classes.inner}>
        <UnstyledButton>
          <Logo style={{ height: "3.5rem" }} />
        </UnstyledButton>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
      </Box>
    </Container>
  );
};

export default HeaderNavigation;

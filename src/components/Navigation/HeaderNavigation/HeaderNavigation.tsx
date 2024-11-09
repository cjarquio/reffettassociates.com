import { Box, Center, Container, Group, Menu, rem } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
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
      { link: "/docs", label: "Retail" },
      { link: "/resources", label: "Public Sector" },
      { link: "/community", label: "Private Equity and Financial Services" },
      { link: "/blog", label: "Associations and Nonprofits" },
      { link: "/blog", label: "Manufacturing and Industrials" },
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
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Container size={"xl"}>
      <Box className={classes.inner}>
        <Logo style={{ height: rem(60) }} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
      </Box>
    </Container>
  );
};

export default HeaderNavigation;

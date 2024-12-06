import { Text, Container, ActionIcon, Image } from "@mantine/core";
import { IconBrandLinkedinFilled } from "@tabler/icons-react";
import classes from "./FooterNavigation.module.css";
import VOSB from "../../../assets/images/veterans/VOSB.png";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "About",
    links: [
      { label: "About Reffett Associates", link: "#" },
      { label: "Our Team", link: "/team" },
      { label: "Locations", link: "#" },
      { label: "Veterans", link: "/veterans" },
    ],
  },
  {
    title: "Expertise",
    links: [
      { label: "Services", link: "#" },
      { label: "Process", link: "#" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Retail", link: "#" },
      { label: "Public Sector", link: "#" },
      { label: "Private Equity and Financial Services", link: "#" },
      { label: "Associations and Nonprofits", link: "#" },
      { label: "Manufacturing and Industrials", link: "#" },
    ],
  },
  {
    title: "Insights",
    links: [{ label: "News + Insights", link: "#" }],
  },
];

export const FooterNavigation: React.FC = () => {
  const groups = footerLinks.map((group) => {
    const links = group.links.map((link, index) => (
      <Link key={index} className={classes.link} to={link.link}>
        {link.label}
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <Image
          radius="xl"
          className={classes.vsobImage}
          h={200}
          w="auto"
          fit="contain"
          src={VOSB}
        />
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 Reffett Associates All rights reserved.
        </Text>

        <Link
          to={"https://www.linkedin.com/company/reffett-associates/"}
          target="_blank"
        >
          <ActionIcon size="xl" color="white" variant="subtle">
            <IconBrandLinkedinFilled
              style={{ width: "3rem", height: "3rem" }}
              stroke={1.5}
            />
          </ActionIcon>
        </Link>
      </Container>
    </footer>
  );
};

export default FooterNavigation;

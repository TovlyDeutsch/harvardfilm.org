// import FontIcon from "react-md/lib/FontIcons";
import Link from "gatsby-link";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Home",
      // LeftIcon: <p>home</p>,
      component: Link,
      to: "/"
    },
    {
      divider: true
    },
    {
      primaryText: "Films",
      component: Link,
      to: "/films"
    }
  ];

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        // LeftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
  }

  NavList.push({ divider: true });

  return NavList;
}
export default GetNavList;

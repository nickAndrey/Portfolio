import { useState } from "react";
import styled from "styled-components";
import { device } from "../../breakpoints";
import MenuLinkItem from "./MenuLinkItem";

export default function SocialListItems() {
  const [socialLinks, setSocialLinks] = useState([
    {
      id: "0",
      anchor: "https://www.linkedin.com/in/andrew-husiev-611b06b5/",
      title: "Linkedin",
      icon: "FaLinkedin",
      iconSize: "2em",
      hover: false,
    },
    {
      id: "1",
      anchor: "https://www.facebook.com/nickandreyuser",
      title: "Facebook",
      icon: "FaFacebookSquare",
      iconSize: "2em",
      hover: false,
    },
    {
      id: "2",
      anchor: "https://github.com/nickAndrey",
      title: "Github",
      icon: "FaGithubSquare",
      iconSize: "2em",
      hover: false,
    },
  ]);

  const onSetSocialLinksActive = (isHovered = false) => {
    return setSocialLinks(
      socialLinks.map((link) => ({ ...link, hover: isHovered }))
    );
  };

  return (
    <ListContainer>
      <header>Social</header>
      <ListSocialLinks
        onMouseEnter={() => onSetSocialLinksActive(true)}
        onMouseLeave={() => onSetSocialLinksActive(false)}
      >
        {socialLinks.map(({ id, anchor, title, icon, iconSize, hover }) => (
          <li key={id}>
            <MenuLinkItem
              anchor={anchor}
              title={title}
              isActive={hover}
              icon={icon}
              iconSize={iconSize}
            />
          </li>
        ))}
      </ListSocialLinks>
    </ListContainer>
  );
}

const ListContainer = styled.section`
  margin-top: 100px;
  header {
    font-size: 1.5em;
    color: #fff;
    opacity: 0.5;
    margin-bottom: 5px;
  }
`;

const ListSocialLinks = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  @media ${device.tablet} {
    justify-content: start;
  }

  li {
    margin-right: 10px;
  }
`;

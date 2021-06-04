import { useState, useEffect } from "react";
import styled from "styled-components";
import ToggleMenuButton from "./ToggleMenuButton";
import MenuLinkItem from "./MenuLinkItem";
import { device } from "../../breakpoints";

const Nav = styled.nav`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  @media ${device.mobileS} {
    justify-content: center;
  }
  @media ${device.tablet} {
    padding-left: 150px;
    justify-content: start;
  }

  .menu-item-list {
    display: grid;
    align-content: center;
    grid-gap: 12px 0;
    &__container {
      display: grid;
      @media ${device.tablet} {
        text-align: left;
      }
    }

    &__container:nth-child(2) {
      margin-top: 100px;
      header {
        font-size: 1.5em;
        color: #fff;
        opacity: 0.5;
        margin-bottom: 5px;
      }
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  ${({ open }) => (open ? "width: 100%" : "width: 0")};
  height: 100%;
  z-index: 1;
  overflow-x: hidden;
  transition: 0.5s;
  background: rgba(0, 0, 0, 0.95);
  top: 0;
  @media ${device.mobileS} {
    right: 0;
  }
  @media ${device.tablet} {
    left: 0;
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

export default function Menu({ fullName }) {
  const [isOpen, onOpen] = useState(false);
  const [sectionPositions, setSectionPositions] = useState([]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    setSectionPositions(
      [...sections]
        .filter((item) => item.id)
        .map((section) => section.getBoundingClientRect().top)
    );
  }, []);

  const [links, setLinks] = useState([
    { id: "0", anchor: "#welcome", title: "Home", hover: false },
    { id: "1", anchor: "#about", title: "About", hover: false },
    { id: "2", anchor: "#services", title: "Services", hover: false },
    { id: "3", anchor: "#projects", title: "Works", hover: false },
    { id: "4", anchor: "#contact", title: "Get in touch", hover: false },
  ]);
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

  const setAllLinksAsNotActive = (hookCallback, itemsList) => {
    hookCallback(itemsList.map((link) => ({ ...link, hover: true })));
  };

  const setAllLinksAsActive = (hookCallback, itemsList) => {
    hookCallback(itemsList.map((link) => ({ ...link, hover: false })));
  };

  return (
    <>
      <Overlay open={isOpen}>
        <Nav>
          <ToggleMenuButton
            activeState={isOpen}
            onToggleMenu={() => onOpen(!isOpen)}
          />

          <div className="menu-item-list">
            <section
              className="menu-item-list__container"
              onMouseEnter={() => setAllLinksAsNotActive(setLinks, links)}
              onMouseLeave={() => setAllLinksAsActive(setLinks, links)}
            >
              {links.map(({ id, anchor, title, hover }, idx) => (
                <MenuLinkItem
                  key={id}
                  anchor={anchor}
                  title={title}
                  isActive={hover}
                  scrollTo={sectionPositions[idx]}
                />
              ))}
            </section>

            <section className="menu-item-list__container">
              <header>Social</header>
              <ListSocialLinks
                onMouseEnter={() =>
                  setAllLinksAsNotActive(setSocialLinks, socialLinks)
                }
                onMouseLeave={() =>
                  setAllLinksAsActive(setSocialLinks, socialLinks)
                }
              >
                {socialLinks.map(
                  ({ id, anchor, title, icon, iconSize, hover }) => (
                    <li key={id}>
                      <MenuLinkItem
                        anchor={anchor}
                        title={title}
                        isActive={hover}
                        icon={icon}
                        iconSize={iconSize}
                      />
                    </li>
                  )
                )}
              </ListSocialLinks>
            </section>
          </div>
        </Nav>
      </Overlay>
    </>
  );
}

import { useState, useEffect } from "react";
import styled from "styled-components";
import ToggleMenuButton from "./toggle-menu-button";
import MenuLinkItem from "./menu-link-item";

const Nav = styled.nav`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  padding-left: 150px;

  .menu-item-list {
    display: grid;
    align-content: center;
    justify-items: end;
    grid-gap: 12px 0;
    &__container {
      display: grid;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  ${({ open }) => (open ? "width: 100%" : "width: 0")};
  height: 100%;
  z-index: 1;
  overflow-x: hidden;
  transition: 0.5s;
  background: rgba(0, 0, 0, 0.95);
`;

export default function Menu({ fullName }) {
  const [isOpen, onOpen] = useState(false);
  const [links, setLinks] = useState([
    { id: "0", anchor: "#welcome", title: "Home", hover: false },
    { id: "1", anchor: "#about", title: "About", hover: false },
    { id: "2", anchor: "#services", title: "Services", hover: false },
    { id: "3", anchor: "#projects", title: "Works", hover: false },
    { id: "4", anchor: "#contact", title: "Get in touch", hover: false },
  ]);

  const setAllLinksAsNotActive = () => {
    setLinks(links.map((link) => ({ ...link, hover: true })));
  };

  const setAllLinksAsActive = () => {
    setLinks(links.map((link) => ({ ...link, hover: false })));
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
            <div
              className="menu-item-list__container"
              onMouseEnter={() => setAllLinksAsNotActive()}
              onMouseLeave={() => setAllLinksAsActive()}
            >
              {links.map(({ id, anchor, title, hover }) => (
                <MenuLinkItem
                  key={id}
                  anchor={anchor}
                  title={title}
                  isActive={hover}
                />
              ))}
            </div>
          </div>

          {/* 
          <SocialLinks></SocialLinks>
          <GetInTouch></GetInTouch> */}
        </Nav>
      </Overlay>
    </>
  );
}

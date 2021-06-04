import { useState } from "react";
import styled from "styled-components";
import { device } from "../../breakpoints";
import MenuLinkItem from "./MenuLinkItem";

export default function MainListItems({ sectionPositions }) {
  const [links, setLinks] = useState([
    { id: "0", anchor: "#welcome", title: "Home", hover: false },
    { id: "1", anchor: "#about", title: "About", hover: false },
    { id: "2", anchor: "#services", title: "Services", hover: false },
    { id: "3", anchor: "#projects", title: "Works", hover: false },
    { id: "4", anchor: "#contact", title: "Get in touch", hover: false },
  ]);

  return (
    <ListContainer
      className="menu-item-list__container"
      onMouseEnter={() =>
        setLinks(links.map((link) => ({ ...link, hover: true })))
      }
      onMouseLeave={() =>
        setLinks(links.map((link) => ({ ...link, hover: false })))
      }
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
    </ListContainer>
  );
}

const ListContainer = styled.section`
  display: grid;
  @media ${device.tablet} {
    text-align: left;
  }
`;

import { useState, useEffect } from "react";
import styled from "styled-components";
import { device } from "../../breakpoints";
import ToggleMenuButton from "./ToggleMenuButton";
import MainListItems from "./MainListItems";
import SocialListItems from "./SocialListItems";

export default function Menu() {
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

  return (
    <Overlay open={isOpen}>
      <Nav>
        <ToggleMenuButton
          activeState={isOpen}
          onToggleMenu={() => onOpen(!isOpen)}
        />
        <ListWrapper>
          <MainListItems sectionPositions={sectionPositions} />
          <SocialListItems />
        </ListWrapper>
      </Nav>
    </Overlay>
  );
}

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
`;

const ListWrapper = styled.div`
  display: grid;
  align-content: center;
  grid-gap: 12px 0;
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

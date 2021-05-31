import { useEffect, useState } from "react";
import styled from "styled-components";

const Icon = styled.svg`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  cursor: pointer;
`;

const MenuButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  position: fixed;
  top: 50px;
  left: 50px;
  z-index: 1;

  .wrapper-menu {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 330ms ease-out;
  }

  .wrapper-menu.open {
    transform: rotate(-45deg);
  }

  .line-menu {
    background-color: ${({ color }) => color};
    transition: background-color 0.5s;
    border-radius: 5px;
    width: 100%;
    height: 6px;
  }

  .line-menu.half {
    width: 50%;
  }

  .line-menu.start {
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: right;
  }

  .open .line-menu.start {
    transform: rotate(-90deg) translateX(3px);
  }

  .line-menu.end {
    align-self: flex-end;
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: left;
  }

  .open .line-menu.end {
    transform: rotate(-90deg) translateX(-3px);
  }
`;

export default function ToggleMenuButton({ onToggleMenu, activeState }) {
  const [activeColor, setActiveColor] = useState("rgb(255, 255, 255)");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    window.onscroll = () => {
      const filtered = [...sections].filter((section) => {
        const { top } = section.getBoundingClientRect();
        if (top < 50) {
          return section;
        }
      });
      setActiveColor(
        getComputedStyle(filtered[filtered.length - 1]).backgroundColor
      );
    };
  }, []);

  const getActiveColor = () => {
    if (activeState) {
      return "#fff";
    } else {
      if (activeColor === "rgb(255, 255, 255)") {
        return "#000";
      } else {
        return "#fff";
      }
    }
  };

  return (
    <MenuButton onClick={onToggleMenu} color={getActiveColor()}>
      <div className={activeState ? "wrapper-menu open" : "wrapper-menu"}>
        <div className="line-menu half start"></div>
        <div className="line-menu"></div>
        <div className="line-menu half end"></div>
      </div>
    </MenuButton>
  );
}

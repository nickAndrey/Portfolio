import styled from "styled-components";
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";

export default function MenuLinkItem({
  anchor,
  title,
  isActive,
  icon,
  iconSize,
  scrollTo,
}) {
  const setIcon = () => {
    switch (icon) {
      case "FaLinkedin":
        return <FaLinkedin />;
      case "FaFacebookSquare":
        return <FaFacebookSquare />;
      case "FaGithubSquare":
        return <FaGithubSquare />;
      default:
        return;
    }
  };

  const scrollToPosition = (pos) => {
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  };

  return (
    <Anchor
      href={icon && anchor}
      target={icon && "_blank"}
      active={isActive}
      size={iconSize}
      onClick={() => scrollToPosition(scrollTo)}
    >
      {icon ? setIcon() : title}
    </Anchor>
  );
}

const Anchor = styled.a`
  font-size: ${({ size }) => (size ? size : "3em")};
  color: ${({ active }) => (active ? "rgba(255, 255, 255, 0.5)" : "#fff")};
  text-decoration: none;
  transition: color 0.3s;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

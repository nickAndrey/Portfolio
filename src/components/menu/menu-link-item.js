import styled from "styled-components";
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";

const Anchor = styled.a`
  font-size: ${({ size }) => (size ? size : "3em")};
  color: ${({ active }) => (active ? "rgba(255, 255, 255, 0.5)" : "#fff")};
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: #fff;
  }
`;

export default function MenuLinkItem({
  anchor,
  title,
  isActive,
  icon,
  iconSize,
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

  return (
    <Anchor href={anchor} active={isActive} size={iconSize} target={icon && "_blank"}>
      {icon ? setIcon() : title}
    </Anchor>
  );
}

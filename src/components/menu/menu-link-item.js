import styled from "styled-components";

const Anchor = styled.a`
  font-size: 3em;
  color: ${({ active }) => (active ? "rgba(255, 255, 255, 0.5)" : "#fff")};
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: #fff;
  }
`;

export default function MenuLinkItem({ anchor, title, isActive }) {
  return (
    <Anchor href={anchor} active={isActive}>
      {title}
    </Anchor>
  );
}

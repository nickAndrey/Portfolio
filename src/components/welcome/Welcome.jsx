import styled from "styled-components";
import { device } from "../../breakpoints";

export default function Welcome() {
  return (
    <Header>
      <Title>Hi, I'm Andrew</Title>
      <SubTitle>a web developer</SubTitle>
    </Header>
  );
}

const Header = styled.header`
  text-align: center;
`;

const Title = styled.h2`
  margin: 0;
  @media ${device.mobileS} {
    font-size: 2em;
  }
  @media ${device.tablet} {
    font-size: 4em;
  }
`;

const SubTitle = styled.p`
  margin: 0 0 35px 0;
  text-align: center;
  @media ${device.mobileS} {
    font-size: 1em;
  }
  @media ${device.tablet} {
    font-size: 2em;
  }
`;

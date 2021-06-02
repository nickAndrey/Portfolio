import styled from "styled-components";
import { device } from "../../breakpoints";

const Title = styled.h1`
  margin: 0 0 10px 0;
  text-align: center;
  @media ${device.mobileS} {
    font-size: 3em;
  }
  @media ${device.tablet} {
    font-size: 4em;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  bacground-position: top;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding 0 15px;
`;

const TitleSubscribe = styled.p`
  margin: 0 0 35px 0;
  text-align: center;
  font-size: 2em;
`;

export default function Welcome() {
  return (
    <Container>
      <Title>Hi, I'm Andrew</Title>
      <TitleSubscribe>a web developer</TitleSubscribe>
    </Container>
  );
}

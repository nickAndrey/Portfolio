import styled from 'styled-components';

const Title = styled.h1`
  margin: 0 0 10px 0;
  font-size: 4em;
  text-align: center;
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
`;

const TitleSubscribe = styled.p`
  margin: 0 0 35px 0;
  text-align: center;
  // color: #6c5ce7;
  font-size: 2em;
`;

const AnchorButton = styled.a`
  background: #6c5ce7;
  opacity: 0.8;
  color: #fff;
  padding: 10px 25px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
    background: #6c5ce7;
  }
`;

const Row = styled.div`
  display: ${props => props.display};
  grid-template-columns: ${props => props.columns};
  grid-column-gap: ${props => props.colGap};
`;

export default function Welcome() {
  return (
    <Container>
      <Title>Hi, I'm Andrew</Title>
      <TitleSubscribe>a web developer</TitleSubscribe>
      {/* <Row display="grid" columns="repeat(3, auto)" colGap="10px">
        <AnchorButton>Works</AnchorButton>
        <AnchorButton>Contact</AnchorButton>
        <AnchorButton>About</AnchorButton>
      </Row> */}
    </Container>
  );
}

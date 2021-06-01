import styled from "styled-components";
import { device } from "../../breakpoints";

const AboutContent = styled.p`
  max-width: 80%;
  @media ${device.mobileS} {
    font-size: 2em;
  }
  @media ${device.laptopL} {
    font-size: 4em;
  }
`;

export default function About() {
  return (
    <AboutContent>
      I’m a Front End Developer specialise in single-page dynamic web
      applications. I enjoy creating new things from small business web-sites to
      huge interactive web applications, always open to new opportunities.
    </AboutContent>
  );
}

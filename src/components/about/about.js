import styled from "styled-components";
import { device } from "../../breakpoints";

const AboutContent = styled.p`
  max-width: 80%;
  font-weight: 100;
  @media ${device.mobileS} {
    font-size: 1.5em;
  }
  @media ${device.laptopL} {
    font-size: 3em;
  }
`;

export default function About() {
  return (
    <AboutContent>
      I specialise in single-page dynamic web
      applications. I enjoy creating new things from small business web-sites to
      huge interactive web applications, always open to new opportunities.
    </AboutContent>
  );
}

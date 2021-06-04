import styled from "styled-components";
import { device } from "../../breakpoints";

export default function ServiceContainer({ title, content }) {
  return (
    <ServiceContainerLayout>
      <h3>{title}</h3>
      <p>{content}</p>
    </ServiceContainerLayout>
  );
}

const ServiceContainerLayout = styled.div`
  h3 {
    margin-bottom: 20px;
    font-weight: 600;
    @media ${device.mobileS} {
      font-size: 1.3em;
    }
    @media ${device.tablet} {
      font-size: 1.5em;
    }
    @media ${device.laptopL} {
      font-size: 2em;
    }
  }
  p {
    font-weight: 300;
    @media ${device.mobileS} {
      font-size: 1em;
    }
    @media ${device.tablet} {
      font-size: 1.3em;
    }
    @media ${device.laptopL} {
      font-size: 1.5em;
    }
  }
`;

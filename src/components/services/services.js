import styled from "styled-components";
import ServiceContainer from "./service-container";
import { device } from "../../breakpoints";

const ServiceLayout = styled.div`
  height: calc(100% - 100px * 2);
  padding: 100px 0;
`;

const ServiceRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  @media ${device.mobileS} {
    padding: 0 15px;
    grid-gap: 10px;
  }
  @media ${device.tablet} {
    padding: 0 50px;
    grid-gap: 50px;
  }
`;

const ServiceHeader = styled.header`
  text-align: center;
  @media ${device.mobileS} {
    margin-bottom: 50px;
  }
  @media ${device.tablet} {
    margin-bottom: 100px;
  }
`;

const ServiceTitle = styled.h2`
  margin: 0;
  @media ${device.mobileS} {
    font-size: 2em;
  }
  @media ${device.tablet} {
    font-size: 4em;
  }
`;

const ServiceSubTitle = styled.p`
  margin: 0 0 35px 0;
  text-align: center;
  @media ${device.mobileS} {
    font-size: 1em;
  }
  @media ${device.tablet} {
    font-size: 2em;
  }
`;

export default function Services() {
  const containers = [
    {
      id: "0",
      title: "HTML & CSS RWD",
      content:
        "Enterprise-class websites need consistent colors, fonts, and design to match the organization's branding guidelines. Toptal’s front-end developers are experts at designing responsive websites, with CSS at the core of front end development alongside JavaScript and HTML.",
    },
    {
      id: "1",
      title: "React JS Development",
      content:
        "ReactJS is renowned for its extensibility, adjustability, and convenience. Toptal ReactJS developers create complex software for your business, including web browsers and mobile application user interfaces.",
    },
    {
      id: "2",
      title: "Angular Development",
      content:
        "Angular is an open-source front-end framework developed by Google for creating dynamic, modern web apps. First introduced in 2009, the framework has gained huge traction over the years for eliminating unnecessary code and ensuring lighter & faster apps.",
    },
  ];

  return (
    <ServiceLayout>
      <ServiceHeader>
        <ServiceTitle>Technologies</ServiceTitle>
        <ServiceSubTitle>I work with</ServiceSubTitle>
      </ServiceHeader>
      <ServiceRow>
        {containers.map((container) => (
          <ServiceContainer
            key={container.id}
            title={container.title}
            content={container.content}
          />
        ))}
      </ServiceRow>
    </ServiceLayout>
  );
}

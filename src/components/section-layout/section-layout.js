import styled from "styled-components";

import Welcome from "../welcome/welcome";
import About from "../about/about";
import Services from "../services/services";
import Projects from "../projects/projects";
import Contact from "../contact/contact";

const Section = styled.section`
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: sticky;
  top: 0;

  &:nth-child(odd) {
    color: #fff;
    background: #2d3436;
  }

  &:nth-child(even) {
    color: #000;
    background: #fff;
  }
`;

export default function SectionLayout({ sectionName }) {
  const renderSection = () => {
    switch (sectionName) {
      case "welcome":
        return <Welcome />;
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return;
    }
  };

  return (
    <Section id={sectionName}>
      <a name={sectionName} />
      {renderSection()}
    </Section>
  );
}

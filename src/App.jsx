import SectionLayout from './components/section-layout/SectionLayout';
import Menu from './components/menu/Menu';

function App() {
  return (
    <>
      <Menu fullName="AH" />
      <SectionLayout sectionName="welcome" />
      <SectionLayout sectionName="about" />
      <SectionLayout sectionName="services" />
      <SectionLayout sectionName="projects" />
      <SectionLayout sectionName="contact" />
    </>
  );
}

export default App;

import SectionLayout from './components/section-layout/section-layout';
import Menu from './components/menu/menu';
import './App.css';

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

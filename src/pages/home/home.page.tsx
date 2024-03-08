//#region Imports

import { ReactElement } from 'react';
import { Main } from './home.page.styles.tsx';
import WelcomeComponent from '../../components/welcome/welcome.component.tsx';
import AboutMeComponent from '../../components/about-me/about-me.component.tsx';
import ExperienceComponent from '../../components/experience/experience.component.tsx';
import ProjectsComponent from '../../components/projects/projects.component.tsx';
import ContactComponent from '../../components/contact/contact.component.tsx';

//#endregion

export default function HomePage(): ReactElement {

  return (
    <Main>
      <WelcomeComponent />
      <AboutMeComponent />
      <ExperienceComponent />
      <ProjectsComponent />
      <ContactComponent />
    </Main>
  )
}

//#region Imports

import { ReactElement } from 'react';
import { Main } from './home.page.styles.tsx';
import { AnimationTypeEnum } from '../../core/models/enums/animation-type.enum.ts';
import ScrollAnimationWrapperComponent from '../../components/wrapper/scroll-animation-wrapper.component.tsx';
import LanguageSelector from '../../components/language-selector/language-selector.component.tsx';
import WelcomeComponent from '../../components/welcome/welcome.component.tsx';
import AboutMeComponent from '../../components/about-me/about-me.component.tsx';
import ExperienceComponent from '../../components/experience/experience.component.tsx';
import ProjectsComponent from '../../components/projects/projects.component.tsx';
import ContactComponent from '../../components/contact/contact.component.tsx';

//#endregion

export default function HomePage(): ReactElement {

  return (
    <Main>
      <ScrollAnimationWrapperComponent
        delay={ 100 }
        duration={ 800 }
        animationType={ AnimationTypeEnum.FADE_IN }
      >
        <LanguageSelector />
        <WelcomeComponent />
      </ScrollAnimationWrapperComponent>
      <AboutMeComponent />
      <ExperienceComponent />
      <ProjectsComponent />
      <ContactComponent />
    </Main>
  )
}

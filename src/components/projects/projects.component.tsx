//#region Imports

import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectCardInterface } from '../../core/models/interfaces/project-card.interface.ts';
import { AnimationTypeEnum } from '../../core/models/enums/animation-type.enum.ts';
import { NamespaceEnum } from '../../core/models/enums/namespace.enum.ts';
import {
  Content,
  Main, ProjectCard, ProjectCardContent, ProjectImg, ProjectRedirectBtn, ProjectsArea,
  Subtitle,
  Title,
} from './projects.component.styles.ts';
import ScrollAnimationWrapperComponent from '../wrapper/scroll-animation-wrapper.component.tsx';
import TintimIcon from './../../assets/images/tintim_icon.png';
import OndinaIcon from './../../assets/images/ondina_icon.png';
import SamaIcon from './../../assets/images/sama_icon.png';

//#endregion

export default function ProjectsComponent(): ReactElement {

  //#region Properties

  const { t } = useTranslation(NamespaceEnum.PROJECTS);

  const projects: ProjectCardInterface[] = [
    {
      image: TintimIcon,
      description: t('Tintin FACENS is a fun app that offers users the opportunity to complete missions and answer quizzes to earn points'),
      redirectUrl: 'https://play.google.com/store/apps/details?id=com.liga.app.tintim.facens&pcampaignid=web_share',
    },
    {
      image: SamaIcon,
      description: t('SAMA is an app for controlling and managing the academic environment. Learn in a different and innovative way'),
      redirectUrl: 'https://apps.apple.com/br/app/sama-ecossistema-de-ensino/id1604654157',
    },
    {
      image: OndinaIcon,
      description: t('Chacara Ondina is an application for controlling events, announcements and residential notifications'),
      redirectUrl: 'https://play.google.com/store/apps/details?id=com.liga.chacaraondina&pcampaignid=web_share',
    },
  ];

  //#endregion

  return (
    <Main>
      <Content>
        <ScrollAnimationWrapperComponent
          duration={ 800 }
          animationType={ AnimationTypeEnum.SCALE_UP }
          style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
        >
          <Title>{ t('Projects') }</Title>
          <Subtitle>{ t('Some of the projects I participated in') }</Subtitle>
        </ScrollAnimationWrapperComponent>

        <ScrollAnimationWrapperComponent
          duration={ 800 }
          animationType={ AnimationTypeEnum.FADE_IN_UP }
          style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
        >
          <ProjectsArea>
            { projects.map((project, index) =>
              <ProjectCard key={ index }>
                <ProjectCardContent>
                  <p>{ project.description }</p>
                  <ProjectRedirectBtn href={ project.redirectUrl } target="_blank">{ t('Visit') }</ProjectRedirectBtn>
                </ProjectCardContent>

                <ProjectImg src={ project.image } />
              </ProjectCard>
            )}
          </ProjectsArea>
        </ScrollAnimationWrapperComponent>
      </Content>
    </Main>
  )
}

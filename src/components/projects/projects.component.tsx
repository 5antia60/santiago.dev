//#region Imports

import { ReactElement } from 'react';
import {
  Content,
  Main, ProjectCard, ProjectCardContent, ProjectImg, ProjectRedirectBtn, ProjectsArea,
  Subtitle,
  Title,
} from './projects.component.styles.ts';
import { ProjectCardInterface } from '../../models/interfaces/project-card.interface.ts';
import TintimIcon from './../../assets/images/tintim_icon.png';
import OndinaIcon from './../../assets/images/ondina_icon.png';
import SamaIcon from './../../assets/images/sama_icon.png';

//#endregion

export default function ProjectsComponent(): ReactElement {

  //#region Properties

  const projects: ProjectCardInterface[] = [
    {
      image: TintimIcon,
      description: 'Tintin FACENS is a fun app that offers users the opportunity to complete missions and answer quizzes to earn points.',
      redirectUrl: 'https://play.google.com/store/apps/details?id=com.liga.app.tintim.facens&pcampaignid=web_share',
    },
    {
      image: SamaIcon,
      description: 'SAMA is an app for controlling and managing the academic environment. Learn in a different and innovative way.',
      redirectUrl: 'https://apps.apple.com/br/app/sama-ecossistema-de-ensino/id1604654157',
    },
    {
      image: OndinaIcon,
      description: 'Chácara Ondina is an application for controlling events, announcements and residential notifications.',
      redirectUrl: 'https://play.google.com/store/apps/details?id=com.liga.chacaraondina&pcampaignid=web_share',
    },
  ];

  //#endregion

  return (
    <Main>
      <Content>
        <Title>Projects</Title>
        <Subtitle>Some of the projects I participated in</Subtitle>

        <ProjectsArea>
          { projects.map((project, index) =>
            <ProjectCard key={ index }>
              <ProjectCardContent>
                <p>{ project.description }</p>
                <ProjectRedirectBtn href={ project.redirectUrl } target="_blank">Visit</ProjectRedirectBtn>
              </ProjectCardContent>

              <ProjectImg src={ project.image } />
            </ProjectCard>
          )}
        </ProjectsArea>
      </Content>
    </Main>
  )
}

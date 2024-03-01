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
      description: 'Tintim FACENS é um app divertido que oferece aos usuários a oportunidade de realizar missões e responder quizzes para ganhar pontos.',
      redirectUrl: 'https://play.google.com/store/apps/details?id=com.liga.app.tintim.facens&pcampaignid=web_share',
    },
    {
      image: SamaIcon,
      description: 'O SAMA é um app para controle e gestão do ambiente acadêmico. Aprenda de forma diferente e inovadora.',
      redirectUrl: 'https://apps.apple.com/br/app/sama-ecossistema-de-ensino/id1604654157',
    },
    {
      image: OndinaIcon,
      description: 'Chácara Ondina é um aplicativo para controle de eventos, comunicados e notificações residenciais.',
      redirectUrl: 'https://play.google.com/store/apps/details?id=com.liga.chacaraondina&pcampaignid=web_share',
    },
  ];

  //#endregion

  return (
    <Main>
      <Content>
        <Title>Projetos</Title>
        <Subtitle>Alguns dos projetos que participei</Subtitle>

        <ProjectsArea>
          { projects.map((project, index) =>
            <ProjectCard key={ index }>
              <ProjectCardContent>
                <p>{ project.description }</p>
                <ProjectRedirectBtn href={ project.redirectUrl } target="_blank">Visitar</ProjectRedirectBtn>
              </ProjectCardContent>

              <ProjectImg src={ project.image } />
            </ProjectCard>
          )}
        </ProjectsArea>
      </Content>
    </Main>
  )
}

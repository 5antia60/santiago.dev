//#region Imports

import { ReactElement } from 'react';
import {
  ExperienceArea,
  Content,
  Description,
  Intro,
  Main,
  TimelineArea,
  Subtitle,
  Title,
  Highlight,
  Link,
  ExperienceBox,
  ExperienceBoxTitle,
  ExperienceBoxDescription,
  ExperienceBoxIntro,
  ExperienceBoxResume, ExperienceBoxCompany,
} from './experience.component.styles.ts';
import santiagoResumePdf from '../../assets/files/santiago-resume.pdf';
import SkillsAreaComponent from '../skills-area/skills-area.component.tsx';
import { ExperienceCardInterface } from '../../models/interfaces/experience-card.interface.ts';

//#endregion

export default function ExperienceComponent(): ReactElement {

  //#region Props

  const experienceList: ExperienceCardInterface[] = [
    {
      title: 'Desenvolvedor FullStack | Web/App',
      company: 'LIGA Facens',
      descriptions: [
        'Desenvolvimento de sites e aplicativos web, realização de tarefas Front-End e, principalmente ' +
        'Back-End.',
        'Desenvolvimento de telas, componentes reutilizáveis e estilos.',
        'Construção de APIs e análises e otimização de bancos de dados.',
      ],
      period: 'Jun 2022 - Atual',
      skills: ['HTML & SCSS', 'Angular', 'ReactJs', 'NestJs', 'IonicFramework', 'TypeScript', 'Git', 'PostgreSql'],
      emphasis: true,
    },
    {
      title: 'Estagiário - Auxiliar de desenvolvimento',
      company: 'LIGA Facens',
      descriptions: ['Desenvolvimento de sites e aplicativos, focado em Front-End mas conhecendo o mundo Back-End, ' +
        'abusando de práticas de planejamento do método SCRUM.'],
      period: 'Mar 2021 - Jun 2022',
      skills: ['HTML & SCSS', 'Angular', 'ReactJs', 'TypeScript', 'Git'],
    },
    {
      title: 'Assistente/Monitor de laboratório',
      company: 'Laboratório de eng. elétrica | FACENS',
      descriptions: ['Manutenção de equipamentos elétricos e desenvolvimento de sistemas para uso interno dos ' +
      'funcionários e gestores do laboratorio.'],
      period: 'Jan 2020 - Dez 2020',
      skills: ['C#', 'SqlServer', 'Git'],
    },
  ];

  //#endregion

  return (
    <Main>
      <Content>
        <Title>Minha experiência</Title>
        <Subtitle>Minhas experiências e formação</Subtitle>

        <ExperienceArea>
          <Intro>
            <Description>
              Desde o início da minha jornada na faculdade de
              <Highlight> engenharia da computação </Highlight>
              em janeiro de 2020, tenho buscado ampliar meus conhecimentos e vivenciar diversas
              experiências na área.
            </Description>
            <Description>
              Procuro aprender e aprimorar minhas habilidades
              para entregar um bom trabalho. Estou comprometido em explorar novos horizontes e desafios,
              em busca de aprimoramento contínuo.
            </Description>
            <Description>
              Se quiser ter uma visão mais clara sobre minha fomrmação, você pode acessar o meu
              <Link href={ santiagoResumePdf } rel="noopener noreferrer" target="_blank"> currículo completo</Link>.
            </Description>
          </Intro>

          <TimelineArea>
            { experienceList.map(experience =>
              <ExperienceBox key={ experience.title } style={ experience.emphasis ? { width: '100%' } : {} }>
                <ExperienceBoxIntro>
                  <ExperienceBoxTitle>{ experience.title }</ExperienceBoxTitle>
                  <p>{ experience.period }</p>
                </ExperienceBoxIntro>

                <ExperienceBoxCompany>{ experience.company }</ExperienceBoxCompany>


                <ExperienceBoxResume>
                  { experience.descriptions.map((description, index) =>
                    <ExperienceBoxDescription key={ index }>{ description }</ExperienceBoxDescription>
                  )}


                  <SkillsAreaComponent
                    skillsList={ experience.skills }
                    showOnlySkills={ true }
                  />
                </ExperienceBoxResume>
              </ExperienceBox>
            )}
          </TimelineArea>
        </ExperienceArea>
      </Content>
    </Main>
  )
}

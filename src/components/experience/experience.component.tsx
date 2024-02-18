//#region Imports

import { ReactElement } from 'react';
import {
  ExperienceArea,
  Content,
  Description,
  Intro,
  ExperienceTitle,
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
  ExperienceBoxResume, ExperienceBoxCompany, TimelineAreaFooter
} from './experience.component.styles.ts';
import santiagoResumePdf from '../../assets/files/santiago-resume.pdf';
import SkillsAreaComponent from '../skills-area/skills-area.component.tsx';
import { ExperienceCardInterface } from '../../models/interfaces/experience-card.interface.ts';

//#endregion

export default function ExperienceComponent(): ReactElement {
  const experienceList: ExperienceCardInterface[] = [
    {
      title: 'Assistente/Monitor de laboratório',
      company: 'Laboratório de eng. elétrica | FACENS',
      descriptions: ['Manutenção de equipamentos elétricos e desenvolvimento de sistemas para uso interno dos ' +
        'funcionários e gestores do laboratorio.'],
      period: 'Jan 2020 - Dez 2020',
      skills: ['C#', 'SqlServer', 'Git'],
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
      title: 'Desenvolvedor FullStack | Web/App',
      company: 'LIGA Facens',
      descriptions: [
        'Desenvolvimento de sites e aplicativos web, realização de tarefas Front-End e, principalmente ' +
        'Back-End.',
        'Construção de telas, desenvolvimento de componentes reutilizáveis e aplicação estilos que garantem uma ' +
        'experiência de usuário fluida e coerente.',
        'Construção de APIs robustas que fornecem acesso aos recursos do sistema de forma eficiente e segura, ' +
        'com uma análise e otimização do banco de dados.',
      ],
      period: 'Jun 2022 - Atual',
      skills: ['HTML & SCSS', 'Angular', 'ReactJs', 'IonicFramework', 'TypeScript', 'Git', 'PostgreSql', 'NestJs'],
    },
  ]

  return (
    <Main>
      <Content>
        <Title>Minha experiência</Title>
        <Subtitle>Minhas experiências e formação</Subtitle>

        <ExperienceArea>
          <Intro>
            <ExperienceTitle>Formação</ExperienceTitle>

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
            <ExperienceTitle>Experiência</ExperienceTitle>

            { experienceList.map(experience =>
              <ExperienceBox>
                <ExperienceBoxIntro>
                  <ExperienceBoxTitle>{ experience.title }</ExperienceBoxTitle>
                  <p>{ experience.period }</p>
                </ExperienceBoxIntro>

                <ExperienceBoxCompany>{ experience.company }</ExperienceBoxCompany>

                <ExperienceBoxResume>
                  { experience.descriptions.map(description =>
                    <ExperienceBoxDescription>{ description }</ExperienceBoxDescription>
                  )}


                  <SkillsAreaComponent
                    skillsList={ experience.skills }
                    showOnlySkills={ true }
                  />
                </ExperienceBoxResume>
              </ExperienceBox>
            )}
            <TimelineAreaFooter></TimelineAreaFooter>
          </TimelineArea>
        </ExperienceArea>
      </Content>
    </Main>
  )
}

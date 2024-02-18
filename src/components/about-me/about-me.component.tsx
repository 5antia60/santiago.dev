//#region Imports

import { ReactElement } from 'react';
import {
  AboutArea,
  Content,
  Description,
  Intro, AboutTitle,
  Main,
  Subtitle,
  Title, Highlight, Link, SkillsArea
} from './about-me.component.styles.ts';
import SkillsAreaComponent from '../skills-area/skills-area.component.tsx';

//#endregion

export default function AboutMeComponent(): ReactElement {
  const githubUrl: string = 'https://github.com/5antia60';
  const linkedinUrl: string = 'https://www.linkedin.com/in/5antiag0';

  const skillsList: string[] = [
    'TypeScript',
    'JavaScript',
    'Front-End',
    'Back-End',
    'HTML & SCSS',
    'styled-components',
    'Angular',
    'ReactJs',
    'IonicFramework',
    'NodeJs',
    'NestJs',
    'PostgreSql',
    'Testes Unitários',
    'Git',
  ];

  const knowledgeList: string[] = [
    'Java',
    'C#',
    'C++',
    'SqlServer',
  ];

  return (
    <Main>
      <Content>
        <Title>Sobre mim</Title>
        <Subtitle>Minhas habilidades e o que eu faço</Subtitle>

        <AboutArea>
          <Intro>
            <AboutTitle>Muito prazer!</AboutTitle>

            <Description>
              Meu nome é Santiago e sou um Desenvolvedor Web/App, trabalho com a criação de
              <Highlight> Front-end</Highlight> e
              <Highlight> Back-end </Highlight>
              de Websites e Aplicativos Web que levam ao sucesso do produto como um todo.
            </Description>
            <Description>
              Também gosto de compartilhar conteúdo relacionado ao que aprendi ao longo dos anos no Desenvolvimento Web,
              para que possa ajudar outras pessoas da comunidade de desenvolvimento. Fica à vontade para se conectar ou
              me seguir no meu <Link href={ linkedinUrl } target="_blank">LinkedIn</Link>/
              <Link href={ githubUrl } target="_blank">Github</Link>,
              lá eu busco compartilhar conteúdo útil relacionado ao Desenvolvimento
              Web e Programação.
            </Description>
            <Description>Estou aberto a oportunidades onde posso
              <Highlight> contribuir</Highlight>,
              <Highlight> aprender</Highlight> e
              <Highlight> crescer</Highlight>. Se você tiver uma boa oportunidade que corresponda às minhas habilidades e experiência, vou deixar dados para contato aqui tambêm :D</Description>
          </Intro>

          <SkillsArea>
            <SkillsAreaComponent
              skillsList={ skillsList }
              knowledgeList={ knowledgeList }
            />
          </SkillsArea>
        </AboutArea>
      </Content>
    </Main>
  )
}

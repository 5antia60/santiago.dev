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
        <Title>About me</Title>
        <Subtitle>My skills and what I do</Subtitle>

        <AboutArea>
          <Intro>
            <AboutTitle>Great pleasure!</AboutTitle>

            <Description>
              My name is Santiago and I am a Web/App Developer, I work with the creation of
              <Highlight> Front-end</Highlight> and
              <Highlight> Back-end </Highlight>
              of Websites and Web Applications that lead to the success of the product as a whole.
            </Description>
            <Description>
              I also like to share content related to what I've learned over the years in Web Development,
              so you can help others in the development community. Feel free to connect or
              follow me on mine <Link href={ linkedinUrl } target="_blank">LinkedIn</Link>/
              <Link href={ githubUrl } target="_blank">Github</Link>,
              there I seek to share useful content related to Development
              Web and Programming.
            </Description>
            <Description>I'm open to opportunities wherever I can
              <Highlight> contribute</Highlight>,
              <Highlight> learn</Highlight> and
              <Highlight> grow</Highlight>. If you have a good opportunity that matches my skills and experience, I will leave contact details here too :D</Description>
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

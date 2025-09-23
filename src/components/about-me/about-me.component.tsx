//#region Imports

import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { NamespaceEnum } from '../../core/models/enums/namespace.enum.ts';
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
  const { t } = useTranslation(NamespaceEnum.ABOUT_ME);

  const githubUrl: string = 'https://github.com/5antia60';
  const linkedinUrl: string = 'https://www.linkedin.com/in/5antiag0';

  const skillsList: string[] = [
    'TypeScript',
    'JavaScript',
    'HTML & SCSS',
    'Angular',
    'ReactJs',
    'styled-components',
    'Next.js',
    'tailwindcss',
    'IonicFramework',
    'NodeJs',
    'NestJs',
    'Postgresql',
    'Unit Testing',
    'Git',
  ];

  const knowledgeList: string[] = [
    'Java',
    'Python',
    'C#',
    'C++',
  ];

  return (
    <Main>
      <Content>
        <Title>{ t('About me') }</Title>
        <Subtitle>{ t('My skills and what I do') }</Subtitle>

        <AboutArea>
          <Intro>
            <AboutTitle>{ t('Great pleasure') }</AboutTitle>

            <Description>
              { t('My name is Santiago and I am a Web/App Developer, I work with the creation of') }
              <Highlight> { t('Front-end') }</Highlight> { t('and') }
              <Highlight> { t('Back-end') } </Highlight>
              { t('of Websites and Web Applications that lead to the success of the product as a whole') }
            </Description>
            <Description>
              { t('I also like to share content related to what Ive learned over the years in Web Development') }
              <Link href={ linkedinUrl } target="_blank"> { t('LinkedIn') }</Link>/
              <Link href={ githubUrl } target="_blank">{ t('Github') } </Link>
              { t('there I seek to share useful content related to Development Web and Programming') }
            </Description>
            <Description>
              { t('I\'m open to opportunities wherever I can') }
              <Highlight> { t('contribute') }</Highlight>,
              <Highlight> { t('learn') }</Highlight> { t('and') }
              <Highlight> { t('grow') }</Highlight>
              { t('If you have a good opportunity that matches my skills and experience, I will leave contact details here too') }
            </Description>
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

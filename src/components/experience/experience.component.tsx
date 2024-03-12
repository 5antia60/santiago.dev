//#region Imports

import { ReactElement, useEffect, useState } from 'react';
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

  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

  const experienceList: ExperienceCardInterface[] = [
    {
      title: 'FullStack Developer | Web/App',
      company: 'LIGA Facens',
      descriptions: [
        'Development of websites and web applications, carrying out Front-End tasks and, mainly ' +
        'Back-End.',
        'Development of screens, reusable components and styles.',
        'Building APIs and analyzing and optimizing databases.',
      ],
      period: 'Jun 2022 - Current',
      skills: ['HTML & SCSS', 'Angular', 'ReactJs', 'NestJs', 'IonicFramework', 'TypeScript', 'Git', 'PostgreSql'],
      emphasis: true,
    },
    {
      title: 'Intern - Development assistant',
      company: 'LIGA Facens',
      descriptions: ['Development of websites and applications, focused on Front-End but knowing the Back-End world, ' +
      'abusing SCRUM method planning practices.'],
      period: 'Mar 2021 - Jun 2022',
      skills: ['HTML & SCSS', 'Angular', 'ReactJs', 'TypeScript', 'Git'],
    },
    {
      title: 'Lab Assistant/Monitor',
      company: 'Engineering laboratory electrical | FACENS',
      descriptions: ['Maintenance of electrical equipment and development of systems for internal use' +
      'laboratory employees and managers.'],
      period: 'Jan 2020 - Dec 2020',
      skills: ['C#', 'SqlServer', 'Git'],
    },
  ];

  //#endregion

  //#region Lifecycle Events

  useEffect(() => {
    window.addEventListener('resize', () => setInnerWidth(window.innerWidth));
    return () => window.removeEventListener('resize', () => setInnerWidth(window.innerWidth));
  }, []);

  //#endregion

  return (
    <Main>
      <Content>
        <Title>My experience</Title>
        <Subtitle>My experiences and training</Subtitle>

        <ExperienceArea>
          <Intro>
            <Description>
              Since the beginning of my college journey of
              <Highlight> computer engineering </Highlight>
              In January 2020, I have been trying to expand my knowledge and experience different
              experiences in the area.
            </Description>
            <Description>
              I try to learn and improve my skills
              to deliver good work. I am committed to exploring new horizons and challenges,
              in search of continuous improvement.
            </Description>
            <Description>
              If you want to have a clearer view of my training, you can access my
              <Link href={ santiagoResumePdf } rel="noopener noreferrer" target="_blank"> complete resume</Link>.
            </Description>
          </Intro>

          <TimelineArea>
            { experienceList.map(experience =>
              <ExperienceBox
                key={ experience.title }
                style={ experience.emphasis && innerWidth >= 992 ? { width: '100%' } : {} }>
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

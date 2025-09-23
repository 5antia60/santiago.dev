//#region Imports

import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { NamespaceEnum } from '../../core/models/enums/namespace.enum.ts';
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
  ExperienceBoxResume,
  ExperienceBoxCompany,
  ExperienceBoxTitleLabel,
  ExperienceBoxHeader,
  ExperienceBoxImg,
  TimelineBox, LineUi, CircleUi,
} from './experience.component.styles.ts';
import { ExperienceCardInterface } from '../../core/models/interfaces/experience-card.interface.ts';
import SkillsAreaComponent from '../skills-area/skills-area.component.tsx';
import santiagoResumePdf from '../../assets/files/santiago-resume.pdf';
import lenovoImg from './../../assets/images/lenovo.jpg';
import facensImg from './../../assets/images/facens.png';
import ligaImg from './../../assets/images/liga.jpg';

//#endregion

export default function ExperienceComponent(): ReactElement {

  //#region Props

  const { t } = useTranslation(NamespaceEnum.EXPERIENCE);

  const experienceList: ExperienceCardInterface[] = [
    {
      title: t('Junior Software Developer | Frontend'),
      company: t('Lenovo'),
      companyImg: lenovoImg,
      descriptions: [
        t('Software development focused on frontend solutions using Next.js'),
        t('Agile methodologies on a daily basis for better project results'),
      ],
      period: t('Mar 2025 - Current'),
      skills: ['Next.js', 'ReactJs', 'Tailwindcss', 'TypeScript', 'Unit Testing', 'Git'],
    },
    {
      title: t('FullStack Developer | Web/App'),
      company: t('LIGA Facens'),
      companyImg: ligaImg,
      descriptions: [
        t('Development of websites and web applications, carrying out Front-End tasks and, mainly Back-End'),
        t('Development of screens, reusable components and styles'),
        t('Building APIs and analyzing and optimizing databases'),
      ],
      period: t('Jun 2022 - Mar 2025'),
      skills: ['HTML & SCSS', 'Angular', 'ReactJs', 'NestJs', 'IonicFramework', 'TypeScript', 'Git', 'PostgreSql'],
    },
    {
      title: t('Intern - Development assistant'),
      company: t('LIGA Facens'),
      companyImg: ligaImg,
      descriptions: [
        t('Development of websites and applications, focused on Front-End but knowing the Back-End world')
      ],
      period: t('Mar 2021 - Jun 2022'),
      skills: ['HTML & SCSS', 'Angular', 'ReactJs', 'TypeScript', 'Git'],
    },
    {
      title: t('Lab Assistant/Monitor'),
      company: t('Engineering laboratory electrical | FACENS'),
      companyImg: facensImg,
      descriptions: [
        t('Maintenance of electrical equipment and development of systems for internal use laboratory employees and managers')
      ],
      period: t('Jan 2020 - Dec 2020'),
      skills: ['C#', 'SqlServer', 'Git'],
    },
  ];

  //#endregion

  return (
    <Main>
      <Content>
        <Title>{ t('My experience') }</Title>
        <Subtitle>{ t('My experiences and training') }</Subtitle>

        <ExperienceArea>
          <Intro>
            <Description>
              { t('Since the beginning of my college journey of') }
              <Highlight> { t('computer engineering') } </Highlight>
              { t('In January 2020...') }
            </Description>
            <Description>
              { t('I try to learn and improve my skills to deliver good work') }
            </Description>
            <Description>
              { t('If you want to have a clearer view of my training') }
              <Link href={ santiagoResumePdf } rel="noopener noreferrer" target="_blank"> { t('complete resume') }</Link>.
            </Description>
          </Intro>

          <TimelineArea>
            <LineUi>
              <CircleUi />
              <CircleUi />
              <CircleUi />
              <CircleUi />
            </LineUi>

            <TimelineBox>
              { experienceList.map(experience =>
                <ExperienceBox
                  key={ experience.title }
                >
                  <ExperienceBoxIntro>
                    <ExperienceBoxHeader>
                      <ExperienceBoxImg src={experience.companyImg} />

                      <ExperienceBoxTitle>
                        <ExperienceBoxTitleLabel>{ experience.title }</ExperienceBoxTitleLabel>
                        <ExperienceBoxCompany>{ experience.company }</ExperienceBoxCompany>
                      </ExperienceBoxTitle>
                    </ExperienceBoxHeader>

                    <p>{ experience.period }</p>
                  </ExperienceBoxIntro>

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
            </TimelineBox>
          </TimelineArea>
        </ExperienceArea>
      </Content>
    </Main>
  )
}

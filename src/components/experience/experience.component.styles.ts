import styled from 'styled-components'

export const Main = styled.div.attrs(() => ({
  className: 'WelcomeComponent',
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: calc(100vh - ${ ({ theme }) => theme.sizes.headerHeight });
`;

export const Content = styled.div.attrs(() => ({
  className: 'Content',
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  max-width: 75%;
  width: max-content;
`;

export const Title = styled.h1.attrs(() => ({
  className: 'Title',
}))`
  font-size: xxx-large;
`;

export const ExperienceTitle = styled.h2.attrs(() => ({
  className: 'ExperienceTitle',
}))`
  font-size: x-large;
  font-weight: 400;
`;

export const Subtitle = styled.span.attrs(() => ({
  className: 'Subtitle',
}))`
  font-weight: 500;
  font-size: 1.1rem;
`;

export const Description = styled.p.attrs(() => ({
  className: 'Description',
}))`
  margin-top: 1rem;

  font-weight: 400;
`;

export const Highlight = styled.span.attrs(() => ({
  className: 'Highlight',
}))`
  width: fit-content;

  color: ${ ({ theme }) => theme.colors.mainColor };
  font-weight: 500;
`;

export const Link = styled.a.attrs(() => ({
  className: 'Link',
}))`
  width: fit-content;

  color: ${ ({ theme }) => theme.colors.mainColor };
  font-weight: 500;
  cursor: pointer;
  transition: 200ms;
  
  &:hover {
    color: ${ ({ theme }) => theme.colors.secondaryColor };
  }
`;

export const ExperienceArea = styled.div.attrs(() => ({
  className: 'ExperienceArea',
}))`
  display: flex;
  justify-content: space-between;
  
  margin-top: 4rem;
`;

export const ExperienceBox = styled.div.attrs(() => ({
  className: 'ExperienceBox',
}))`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 1rem 0;
`;

export const ExperienceBoxTitle = styled.span.attrs(() => ({
  className: 'ExperienceBoxTitle',
}))`
  font-weight: 500;
`;

export const ExperienceBoxDescription = styled.p.attrs(() => ({
  className: 'ExperienceBoxDescription',
}))`
  margin-top: 0.5rem;
`;

export const ExperienceBoxIntro = styled.div.attrs(() => ({
  className: 'ExperienceBoxIntro',
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
`;

export const ExperienceBoxCompany = styled.p.attrs(() => ({
  className: 'ExperienceBoxCompany',
}))`
  font-weight: 500;
  font-size: 0.9rem;
`;

export const ExperienceBoxResume = styled.div.attrs(() => ({
  className: 'ExperienceBoxResume',
}))`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  width: 100%;
`;

export const TimelineArea = styled.div.attrs(() => ({
  className: 'TimelineArea',
}))`
  position: relative;
  
  display: flex;
  flex-direction: column;

  width: calc(50% - 1rem);
  height: 25rem;

  padding-right: 0.6rem;
  overflow-y: scroll;

  text-align: justify;

  &::-webkit-scrollbar {
    width: .3rem;
  }

  /* Track */

  &::-webkit-scrollbar-track {
    box-shadow: 0;
    border-radius: 10px;
  }

  /* Handle */

  &::-webkit-scrollbar-thumb {
    background: ${ ({ theme }) => theme.colors.secondaryBackground };
    border-radius: 10px;
  }

  /* Handle on hover */

  &::-webkit-scrollbar-thumb:hover {
    background: ${ ({ theme }) => theme.colors.secondaryColor };
  }
`;

export const TimelineAreaFooter = styled.div.attrs(() => ({
  className: 'TimelineAreaFooter',
}))`
  position: absolute;
  bottom: 0;
  
  width: 100%;
  height: 1rem;

  background: red;
`;

export const Intro = styled.div.attrs(() => ({
  className: 'Intro',
}))`
  display: flex;
  flex-direction: column;

  width: calc(50% - 1rem);
  
  text-align: start;
`;

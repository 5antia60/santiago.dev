import styled from 'styled-components'

export const Main = styled.div.attrs(() => ({
  className: 'Main',
}))`
  display: flex;
  justify-content: center;
  align-items: center;
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
  position: relative; 
    
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  width: 100%;
  
  margin-top: 4rem;
`;

export const ExperienceBox = styled.div.attrs(() => ({
  className: 'ExperienceBox',
}))`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: calc(50% - 2.5rem);
  height: 16rem;

  padding: 1rem;
  
  border-radius: 1rem;
  background: #73d7c40d;
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

  width: max-content;
  min-width: 100%;
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
`;

export const TimelineArea = styled.div.attrs(() => ({
  className: 'TimelineArea',
}))`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;


  width: 100%;

  padding-bottom: 4rem;
  margin-top: 2rem;
  gap: 1rem;
  
  overflow: hidden;
    
  text-align: justify;
    
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Intro = styled.div.attrs(() => ({
  className: 'Intro',
}))`
  display: flex;
  flex-direction: column;

  width: 100%;
  
  text-align: start;
`;

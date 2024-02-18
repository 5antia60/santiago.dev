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
  
  max-width: 60%;
  width: max-content;
`;

export const Title = styled.h1.attrs(() => ({
  className: 'Title',
}))`
  font-size: xxx-large;
`;

export const AboutTitle = styled.h2.attrs(() => ({
  className: 'AboutTitle',
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

export const AboutArea = styled.div.attrs(() => ({
  className: 'AboutArea',
}))`
  display: flex;
  justify-content: space-between;
  
  margin-top: 4rem;
`;

export const Skills = styled.div.attrs(() => ({
  className: 'Skills',
}))`
  display: flex;
  flex-direction: column;

  width: calc(50% - 1rem);

  gap: 2rem;

  text-align: justify;
`;

export const SkillsArea = styled.div.attrs(() => ({
  className: 'SkillsArea',
}))`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const Intro = styled.div.attrs(() => ({
  className: 'Intro',
}))`
  display: flex;
  flex-direction: column;

  width: calc(50% - 1rem);
  
  text-align: start;
`;

export const PillsArea = styled.div.attrs(() => ({
  className: 'PillsArea',
}))`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;

  margin-top: 1rem;
`;

export const Pill = styled.p.attrs(() => ({
  className: 'Pill',
}))`
  margin: 0 0.5rem 0.6rem 0;
  padding: 0.3rem 1rem;

  color: ${ ({ theme }) => theme.colors.secondaryColor };
  background: ${ ({ theme }) => theme.colors.secondaryBackground };

  border-radius: 1rem;
`;


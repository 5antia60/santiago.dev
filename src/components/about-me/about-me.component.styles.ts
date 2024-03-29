import styled from 'styled-components'

export const Main = styled.div.attrs(() => ({
  className: 'Main',
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 100vh;

  @media screen and (max-width: 992px) {
    height: fit-content;
  }
`;

export const Content = styled.div.attrs(() => ({
  className: 'Content',
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  max-width: 60%;
  width: max-content;

  @media screen and (max-width: 992px) {
    max-width: 37.5rem;
    width: 100%;

    margin: 0 1rem;
  }
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

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Intro = styled.div.attrs(() => ({
  className: 'Intro',
}))`
  display: flex;
  flex-direction: column;

  width: calc(50% - 1rem);

  text-align: justify;

  @media screen and (max-width: 992px) {
    width: 100%;
    text-align: justify;

    h2 {
      text-align: center;
    }
  }
`;

export const SkillsArea = styled.div.attrs(() => ({
  className: 'SkillsArea',
}))`
  width: calc(50% - 1rem);

  @media screen and (max-width: 992px) {
    width: 100%;
      
    margin-top: 3rem;
  }
`;

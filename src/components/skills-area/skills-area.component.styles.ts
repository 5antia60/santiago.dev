import styled from 'styled-components'

export const SkillTitle = styled.h2.attrs(() => ({
  className: 'AboutTitle',
}))`
  font-size: x-large;
  font-weight: 400;
`;

export const Skills = styled.div.attrs(() => ({
  className: 'Skills',
}))`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 2rem;

  text-align: justify;
`;

export const SkillsArea = styled.div.attrs(() => ({
  className: 'SkillsArea',
}))`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media screen and (max-width: 992px) {
    text-align: center;
  }
`;

export const PillsArea = styled.div.attrs(() => ({
  className: 'PillsArea',
}))`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;

  margin-top: 1rem;

  @media screen and (max-width: 992px) {
    justify-content: center;
  }
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


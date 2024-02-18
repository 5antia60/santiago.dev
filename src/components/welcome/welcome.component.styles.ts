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
  align-items: center;
  max-width: 60%;
  width: max-content;
  gap: 2rem;
`;

export const InfoArea = styled.div.attrs(() => ({
  className: 'InfoArea',
}))`
  color: ${ ({ theme }) => theme.colors.mainColor };
`;

export const Title = styled.h1.attrs(() => ({
  className: 'Title',
}))`
`;

export const Description = styled.p.attrs(() => ({
  className: 'Description',
}))`
`;

export const Avatar = styled.img.attrs(() => ({
  className: 'Avatar',
}))`
  height: 20rem;
  width: 20rem;
  
  border-radius: 10rem;
  object-fit: cover;
`;

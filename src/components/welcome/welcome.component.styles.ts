import styled from 'styled-components'

export const Main = styled.div.attrs(() => ({
  className: 'Main',
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
  flex-direction: column;
  
  max-width: 60%;
  width: max-content;
  
  gap: 2rem;
`;

export const InfoArea = styled.div.attrs(() => ({
  className: 'InfoArea',
}))`
  display: flex;
  flex-direction: column;

  width: 25rem;
  
  text-align: center;
`;

export const Title = styled.h1.attrs(() => ({
  className: 'Title',
}))`
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

export const Avatar = styled.img.attrs(() => ({
  className: 'Avatar',
}))`
  height: 20rem;
  width: 20rem;
  
  border-radius: 10rem;
  object-fit: cover;
`;

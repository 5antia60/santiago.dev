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
  min-height: calc(100vh - ${ ({ theme }) => theme.sizes.headerHeight });
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

export const ProjectsArea = styled.div.attrs(() => ({
  className: 'ProjectsArea',
}))`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 60rem;
    
  margin-top: 2rem;
`;

export const ProjectCard = styled.div.attrs(() => ({
  className: 'ProjectCard',
}))`
  position: relative;
    
  width: 15rem;
  height: 15rem;
    
  overflow: hidden;
  border-radius: 2.5rem;
    
  &:hover {
    .ProjectImg {
      opacity: 0;
      z-index: 0;
    }
  }
`;

export const ProjectImg = styled.img.attrs(() => ({
  className: 'ProjectImg',
}))`
  position: absolute;
  top: 0;
    
  width: 100%;
    
  opacity: 1;
    
  transition: 200ms;
  object-fit: cover;
  pointer-events: none;
`;

export const ProjectCardContent = styled.div.attrs(() => ({
  className: 'ProjectCardContent',
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
    
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  
  padding: 1rem;

  background: #192b3d;
  text-align: center;
`;

export const ProjectRedirectBtn = styled.a.attrs(() => ({
  className: 'ProjectRedirectBtn',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
    
  width: 6.5rem;
  height: 2.5rem;
    
  padding: 0.25rem;

  color: ${ ({ theme }) => theme.colors.secondaryColor };
  background: ${ ({ theme }) => theme.colors.mainBackground };
    
  border: 0;
  border-radius: 2rem;
  font-size: 1.3rem;
  cursor: pointer;
`;

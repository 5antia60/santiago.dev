import styled from 'styled-components'

export const Main = styled.div.attrs(() => ({
  className: 'Main',
}))`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 2rem;
  background: linear-gradient(0deg, #0a0d17 45%, rgb(20 21 42 / 92%) 100%);
`;

export const Content = styled.div.attrs(() => ({
  className: 'Content',
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  max-width: 75%;
  width: max-content;
  min-height: 15rem;

  gap: 2.5rem;
`;

export const SocialMedias = styled.div.attrs(() => ({
  className: 'SocialMedias',
}))`
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  width: 100%;
`;

export const MediaButton = styled.div.attrs(() => ({
  className: 'MediaButton',
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 2.5rem;
  height: 2.5rem;
  
  padding: 0.5rem;
  
  background: black;
  border-radius: 3rem;
    
  cursor: pointer;
`;

export const ButtonIcon = styled.img.attrs(() => ({
  className: 'ButtonIcon',
}))`
  width: 2rem;
  
  color: red;
`;

export const Footer = styled.div.attrs(() => ({
  className: 'Footer',
}))`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
    
  color: ${ ({ theme }) => theme.colors.defaultColor };
    
  text-align: center;
`;

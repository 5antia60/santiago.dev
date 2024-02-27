import styled from 'styled-components'

export const Main = styled.div.attrs(() => ({
  className: 'HeaderComponent'
}))`
  position: fixed;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  height: ${ ({ theme }) => theme.sizes.headerHeight };
  width: calc(100% - 5.225rem);

  padding: 1rem 2.5rem;

  background: linear-gradient(180deg, rgb(26 32 57) 45%, rgb(20 21 42 / 92%) 100%);
`;

export const Title = styled.h2.attrs(() => ({
  className: 'Title',
}))`
  color: ${ ({ theme }) => theme.colors.mainColor };
`;

export const Areas = styled.div.attrs(() => ({
  className: 'Areas',
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  height: 100%;
  width: 40%;
`;

export const Button = styled.button.attrs(() => ({
  className: 'Button',
}))`
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 2rem;
  background: transparent;
  transition: 200ms;
  
  font-size: 1.3rem;
  
  &:hover {
    color: ${ ({ theme }) => theme.colors.secondaryColor };
    background: ${ ({ theme }) => theme.colors.secondaryBackground };
  }
`;

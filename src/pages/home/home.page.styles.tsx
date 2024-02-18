import styled from "styled-components";

export const Main = styled.div.attrs(() => ({
  className: 'HomePage'
}))`
  width: 100%;
  height: calc(100% - 2rem);
  
  padding: 1rem 0;
  
  background: ${ ({ theme }) => theme.colors.mainBackground };
  color: ${ ({ theme }) => theme.colors.mainColor };
`;

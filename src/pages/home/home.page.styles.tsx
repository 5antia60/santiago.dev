import styled from "styled-components";

export const Main = styled.div.attrs(() => ({
  className: 'HomePage'
}))`
  width: 100%;
  height: max-content;
  
  margin-top: calc(${ ({ theme }) => theme.sizes.headerHeight } + 1rem);
  
  background: ${ ({ theme }) => theme.colors.mainBackground };
  color: ${ ({ theme }) => theme.colors.mainColor };
`;

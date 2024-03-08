import styled from "styled-components";

export const Main = styled.div.attrs(() => ({
  className: 'HomePage'
}))`
  width: 100%;
  height: max-content;
  
  background: ${ ({ theme }) => theme.colors.mainBackground };
  color: ${ ({ theme }) => theme.colors.mainColor };
`;

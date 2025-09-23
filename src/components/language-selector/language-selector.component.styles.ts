import styled from 'styled-components';

export const Main = styled.div.attrs(() => ({
  className: 'Main',
}))`
  display: flex;
  justify-content: end;
  
  width: 100%;
  height: 6rem;

  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const Content = styled.div.attrs(() => ({
  className: 'Content',
}))`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  margin: 1rem 2rem 0 0;

  @media screen and (max-width: 992px) {
    margin: 0 auto;
  }
`;

export const FlagImg = styled.img.attrs(() => ({
  className: 'FlagImg',
}))`
  width: 4.5rem;
  height: 3rem;
  
  object-fit: cover;
  border-radius: .4rem;
`;

export const Switch = styled.label.attrs(() => ({
  className: 'Switch',
}))`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const SwitchInput = styled.input.attrs(() => ({
  className: 'SwitchInput',
}))`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .SwitchSlider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

`;

export const SwitchSlider = styled.span.attrs(() => ({
  className: 'SwitchSlider',
}))`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #4670a6;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
  
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  &:before {
    border-radius: 50%;
  }
`;

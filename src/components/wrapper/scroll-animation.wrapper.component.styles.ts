import styled from 'styled-components';

export const AnimatedDiv = styled.div<{ $animationStyles: string; $duration: number; $delay?: number }>`
  transition: all ${({ $duration }) => $duration}ms ease-out;
  transition-delay: ${({ $delay }) => ($delay ? `${$delay}ms` : '0ms')};
  ${({ $animationStyles }) => $animationStyles}
`;
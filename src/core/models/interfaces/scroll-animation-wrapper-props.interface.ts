import { CSSProperties } from 'react';
import { AnimationTypeEnum } from '../enums/animation-type.enum.ts';

export interface ScrollAnimationWrapperPropsInterface {
  children: React.ReactNode;
  style?: CSSProperties;
  delay?: number;
  duration?: number;
  animationType?: AnimationTypeEnum;
  reversible?: boolean;
  threshold?: number;
}

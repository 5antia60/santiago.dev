import { ScrollAnimationWrapperPropsInterface } from '../../core/models/interfaces/scroll-animation-wrapper-props.interface.ts';
import { AnimationTypeEnum } from '../../core/models/enums/animation-type.enum.ts';
import { useIntersectionObserver } from '../../hooks/use-intersection-observer.ts';
import { AnimatedDiv } from './scroll-animation.wrapper.component.styles.ts';

export default function ScrollAnimationWrapperComponent(props: ScrollAnimationWrapperPropsInterface): React.ReactElement {
  const duration = props.duration || 600;
  const threshold = props.threshold || 0.1;
  const animationType = props.animationType || AnimationTypeEnum.FADE_IN_UP;

  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: !props.reversible,
  });

  const getAnimationStyles = () => {
    const animations: Record<AnimationTypeEnum, { hidden: string; visible: string }> = {
      [AnimationTypeEnum.FADE_IN_UP]: {
        hidden: `opacity: 0; transform: translateY(2rem);`,
        visible: `opacity: 1; transform: translateY(0);`,
      },
      [AnimationTypeEnum.FADE_IN_LEFT]: {
        hidden: `opacity: 0; transform: translateX(-2rem);`,
        visible: `opacity: 1; transform: translateX(0);`,
      },
      [AnimationTypeEnum.FADE_IN_RIGHT]: {
        hidden: `opacity: 0; transform: translateX(2rem);`,
        visible: `opacity: 1; transform: translateX(0);`,
      },
      [AnimationTypeEnum.FADE_IN]: {
        hidden: `opacity: 0;`,
        visible: `opacity: 1;`,
      },
      [AnimationTypeEnum.SCALE_UP]: {
        hidden: `opacity: 0; transform: scale(0.95);`,
        visible: `opacity: 1; transform: scale(1);`,
      },
    };

    const animation = animations[animationType];
    return isIntersecting ? animation.visible : animation.hidden;
  };

  const shouldApplyDelay = props.reversible ? isIntersecting : true;
  const delay = shouldApplyDelay ? props.delay : undefined;

  return (
    <AnimatedDiv
      ref={ref}
      $animationStyles={getAnimationStyles()}
      $duration={duration}
      $delay={delay}
      style={props.style}
    >
      {props.children}
    </AnimatedDiv>
  );
}
import { useEffect, useRef, useState } from 'react';
import { UseIntersectionObserverPropsInterface } from '../core/models/interfaces/use-intersection-observer-props.interface.ts';

export const useIntersectionObserver = (
  {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  }: UseIntersectionObserverPropsInterface = {},
) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const [hasIntersected, setHasIntersected] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element)
      return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;

        if (triggerOnce) {
          if (isElementIntersecting && !hasIntersected) {
            setIsIntersecting(true);
            setHasIntersected(true);
            observer.unobserve(element);
          }
        } else {
          setIsIntersecting(isElementIntersecting);

          if (isElementIntersecting)
            setHasIntersected(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [threshold, rootMargin, triggerOnce, hasIntersected]);

  return {
    ref,
    isIntersecting: triggerOnce ? (hasIntersected) : isIntersecting
  };
};
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      //on enter -> on leave -> on enter back -> on leave back
      toggleActions: 'restart reverse restart reverse',
      //when top of trigger is 85% from top of viewport -> activate
      start: 'top 85%',
      ...scrollProps,
    },
  });
};

export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps,
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut',
  });
  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<',
  );
  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<',
  );
};

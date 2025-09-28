import { MotionProps } from "motion/react";

export const fadeUpValue = (delay = 0): MotionProps => ({
  initial: { filter: "blur(4px)", y: 12, opacity: 0 },
  animate: { filter: "blur(0px)", y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

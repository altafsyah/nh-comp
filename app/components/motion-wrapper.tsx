import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

export const MSection = (props: HTMLMotionProps<"section">) => {
  return <motion.section {...props} />;
};

export const MDiv = (props: HTMLMotionProps<"div">) => {
  return <motion.div {...props} />;
};

export const MUl = (props: HTMLMotionProps<"ul">) => {
  return <motion.ul {...props} />;
};

export const MLi = (props: HTMLMotionProps<"li">) => {
  return <motion.li {...props} />;
};

export const MP = (props: HTMLMotionProps<"p">) => {
  return <motion.p {...props} />;
};

export const MH1 = (props: HTMLMotionProps<"h1">) => {
  return <motion.h1 {...props} />;
};
export const MH2 = (props: HTMLMotionProps<"h2">) => {
  return <motion.h2 {...props} />;
};
export const MH3 = (props: HTMLMotionProps<"h3">) => {
  return <motion.h3 {...props} />;
};
export const MH4 = (props: HTMLMotionProps<"h4">) => {
  return <motion.h4 {...props} />;
};
export const MH5 = (props: HTMLMotionProps<"h5">) => {
  return <motion.h5 {...props} />;
};
export const MH6 = (props: HTMLMotionProps<"h6">) => {
  return <motion.h6 {...props} />;
};

export const MSpan = (props: HTMLMotionProps<"span">) => {
  return <motion.span {...props} />;
};

export const MAnchor = (props: HTMLMotionProps<"a">) => {
  return <motion.a {...props} />;
};

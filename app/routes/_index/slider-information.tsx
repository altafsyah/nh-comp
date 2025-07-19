import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { wrap } from "motion";
import { useRef } from "react";

export default function SliderInformation() {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 450,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, 0, v)}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = 5 * (delta / 1000);

    moveBy += moveBy;
    // moveBy += moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const items = (
    <>
      <span className="block mr-8"> available for new project —</span>
      <span className="block mr-8"> available for new project —</span>
      <span className="block mr-8"> available for new project —</span>
      <span className="block mr-8"> available for new project —</span>
      <span className="block mr-8"> available for new project —</span>
    </>
  );

  return (
    <div className="m-0 flex whitespace-nowrap flex-nowrap overflow-hidden">
      <motion.div
        className="font-semibold text-4xl flex whitespace-nowrap flex-nowrap text-white"
        style={{ x }}
      >
        {items}
      </motion.div>
    </div>
  );
}

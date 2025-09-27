import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "motion/react";
import { wrap } from "motion";

export default function SliderInformation() {
  const baseX = useMotionValue(0);

  const x = useTransform(baseX, (v) => `${wrap(-20, 0, v)}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = 10 * (delta / 1000 / 10);

    moveBy += moveBy;

    baseX.set(baseX.get() + moveBy);
  });

  const items = (
    <>
      <span className="block mr-8"> AVAILABLE FOR NEW PROJECTS —</span>
      <span className="block mr-8"> AVAILABLE FOR NEW PROJECTS —</span>
      <span className="block mr-8"> AVAILABLE FOR NEW PROJECTS —</span>
      <span className="block mr-8"> AVAILABLE FOR NEW PROJECTS —</span>
      <span className="block mr-8"> AVAILABLE FOR NEW PROJECTS —</span>
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

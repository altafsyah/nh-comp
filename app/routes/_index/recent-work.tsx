import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { MDiv } from "~/components/motion-wrapper";
import { getSplitTextAnimation } from "~/lib/getSplitTextAnimation";

const WORKS = [
  "/images/work_dummy_1.jfif",
  "/images/work_dummy_2.jfif",
  "/images/work_dummy_1.jfif",
  "/images/work_dummy_2.jfif",
];

export default function RecentWorks() {
  const [emblaRef] = useEmblaCarousel(
    {
      dragFree: true,
    },
    [WheelGesturesPlugin()]
  );

  return (
    <section id="works" className={clsx("w-full mt-24 md:mt-32")}>
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl lg:text-5xl font-semibold w-fit">
          {getSplitTextAnimation({
            text: "What We’ve Built",
            mode: "whileInView",
          })}
        </h2>
        <p className="mt-4 text-xl">
          {getSplitTextAnimation({
            text: "Projects, experiments, and ideas brought to life—check them out.",
            mode: "whileInView",
            duration: 0.25,
          })}
        </p>
      </div>
      <div
        ref={emblaRef}
        className="container mx-auto embla"
      >
        <div className="mt-9 flex gap-6 pl-6 md:pl-10 cursor-grab active:cursor-grabbing embla__container">
          {WORKS.map((workItem, index) => (
            <MDiv
              initial={{ filter: "blur(4px)", y: 12, opacity: 0 }}
              whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.175 * index,
              }}
              viewport={{ once: true }}
              className={clsx(
                "flex-none min-w-0 embla__slide",
                index === WORKS.length - 1 ? "mr-6 md:mr-0" : "mr-0 md:mr-0"
              )}
              key={`${workItem}_${index}`}
            >
              <div className="h-[175px] md:h-[300px] lg:h-[400px] aspect-video ring-2 ring-slate-400 drop-shadow rounded-xl lg:rounded-3xl bg-slate-500 relative overflow-hidden">
                <img
                  src={workItem}
                  alt="MyAgro an agriculture startup that raises fund to solve climate change problem"
                  className="object-cover w-full h-full"
                />
              </div>
            </MDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

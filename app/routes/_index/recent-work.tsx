import clsx from "clsx";
import { MH2 } from "~/components/motion-wrapper";
import useEmblaCarousel from "embla-carousel-react";
import wheelGestures from "embla-carousel-wheel-gestures";

const { WheelGesturesPlugin } = wheelGestures as any;

export default function RecentWorks() {
  const [emblaRef] = useEmblaCarousel(
    {
      dragFree: true,
    },
    [WheelGesturesPlugin()]
  );

  return (
    <section id="works" className={clsx("w-full mt-24 md:mt-32")}>
      <div className="container mx-auto px-10">
        <MH2
          className="text-5xl font-semibold w-fit"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
          viewport={{ once: true }}
        >
          What We’ve Built
        </MH2>
        <p className="mt-4 text-xl">
          Projects, experiments, and ideas brought to life—check them out.
        </p>
      </div>
      <div ref={emblaRef} className="container mx-auto embla">
        <div className="mt-9 flex gap-6 pl-10 cursor-grab active:cursor-grabbing embla__container">
          <div className="flex-none min-w-0 embla__slide">
            <div className="h-[400px] aspect-video ring-2 ring-slate-400 drop-shadow rounded-3xl bg-slate-500 relative overflow-hidden">
              <img
                src="/images/work_dummy_1.jfif"
                alt="MyAgro an agriculture startup that raises fund to solve climate change problem"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-none min-w-0 embla__slide">
            <div className="h-[400px] aspect-video ring-2 ring-slate-400 drop-shadow rounded-3xl bg-slate-500 relative overflow-hidden">
              <img
                src="/images/work_dummy_2.jfif"
                alt="MyAgro an agriculture startup that raises fund to solve climate change problem"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-none min-w-0 embla__slide">
            <div className="h-[400px] aspect-video ring-2 ring-slate-400 drop-shadow rounded-3xl bg-slate-500 relative overflow-hidden">
              <img
                src="/images/work_dummy_11.jfif"
                alt="MyAgro an agriculture startup that raises fund to solve climate change problem"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-none min-w-0 embla__slide">
            <div className="h-[400px] aspect-video ring-2 ring-slate-400 drop-shadow rounded-3xl bg-slate-500 relative overflow-hidden">
              <img
                src="/images/work_dummy_2.jfif"
                alt="MyAgro an agriculture startup that raises fund to solve climate change problem"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

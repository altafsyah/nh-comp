import { works } from "~/data/home";
import { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Ngoding House || Works" },
    {
      name: "description",
      content:
        "We're passionate about crafting digital experiences that inspire. With expertise in web and app development, we turn ideas into reality.",
    },
    {
      name: "keywords",
      content:
        "web development, app development, digital experience, software solutions",
    },
    {
      name: "author",
      content: "ngodinghouse",
    },
  ];
};

export default function Works() {
  const [selectedWork, setSelectedWork] = useState<(typeof works)[0] | null>(
    null
  );

  return (
    <>
      <section
        id="header"
        className="w-full container mx-auto pt-20 lg:pt-32 px-5"
      >
        <div className="flex flex-col lg:flex-row">
          <h1 className="w-full text-5xl lg:text-title font-bold">Our Works</h1>
          <h2 className="text-xl lg:text-2xl font-medium max-w-4xl mt-4 lg:mt-0">
            Dive into our portfolio, witness the fusion of creativity and
            craftsmanship in every project. Explore Our Works and be inspired to
            redefine possibilities.
          </h2>
        </div>
      </section>
      <section
        id="works"
        className="w-full container mx-auto mt-10 lg:mt-20 pb-20 font-medium px-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {works.map((work) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
            <div
              key={(work.image, work.tag)}
              onClick={() => setSelectedWork(work)}
              className="w-full h-[300px] lg:h-[450px] rounded-xl overflow-hidden relative group"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute w-full h-full bg-linear-to-b from-transparent to-black z-20 top-0 left-0 text-white flex flex-col justify-end p-5 lg:p-10 ">
                <h3 className="text-4xl font-semibold leading-10 urbanist">
                  {work.title}
                </h3>
                <div className="mt-4 px-4 py-2 border border-white w-fit rounded-full bg-white/5 backdrop-blur">
                  <h5>{work.tag}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <AnimatePresence mode="wait">
        {selectedWork && (
          <motion.div
            onClick={() => setSelectedWork(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.1,
            }}
            className="w-full fixed bottom-0 left-0 h-screen bg-black/10 backdrop-blur-xs z-[999] overflow-hidden"
          >
            <motion.div
              className="w-full h-[80%] bg-white absolute bottom-0 rounded-t-4xl border-t border-t-gray-100 shadow-2xl"
              initial={{
                y: "100%",
              }}
              animate={{ y: 0 }}
              exit={{
                y: "100%",
              }}
              transition={{
                type: "spring",
                damping: 50,
                stiffness: 500,
                duration: 0.15,
              }}
            >
              <div className="container mx-auto p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                <div>
                  <div className="w-full aspect-video bg-gray-300 rounded-lg relative overflow-hidden">
                    <img
                      src={selectedWork.image}
                      alt={selectedWork.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-6 lg:mt-10">
                    <h2 className="text-3xl font-bold">{selectedWork.title}</h2>
                    <p className="mt-2 text-xl font-medium">
                      {selectedWork.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 lg:gap-10">
                  {selectedWork.content.map((content) => (
                    <div key={content.title}>
                      <h3 className="text-xl font-semibold">{content.title}</h3>
                      <p className="text-lg">{content.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { works } from "~/data/home";

export default function Works() {
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
        <div className="hidden lg:flex items-center gap-5">
          <div className="px-8 py-2 border border-black1 rounded-full w-fit">
            All
          </div>
          <div className="px-8 py-2 border border-black1 rounded-full w-fit">
            Website
          </div>
          <div className="px-8 py-2 border border-black1 rounded-full w-fit">
            Mobile
          </div>{" "}
          <div className="px-8 py-2 border border-black1 rounded-full w-fit">
            UI/UX Design
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {works.map((work) => (
            <div
              key={(work.image, work.tag)}
              className="w-full h-[300px] lg:h-[450px] rounded-xl overflow-hidden relative"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black z-20 top-0 left-0 text-white flex flex-col justify-end p-5 lg:p-10 ">
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
    </>
  );
}

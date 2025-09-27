/* eslint-disable react/no-unescaped-entities */
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Ngoding House || About" },
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

export default function About() {
  return (
    <>
      <section
        id="hero"
        className="w-full container mx-auto pt-20 lg:pt-32 px-5"
      >
        <div className="flex flex-col lg:flex-row">
          <h1 className="w-full text-5xl lg:text-title font-bold">About Us</h1>
          <h2 className="text-lg lg:text-2xl font-medium max-w-4xl mt-5 lg:mt-0">
            We craft digital experiences that spark inspiration. With deep
            expertise in web and mobile development, we turn ideas into
            real-world impact — helping businesses thrive in the digital era.
          </h2>
        </div>
        <div className="w-full h-[300px] lg:h-[500px] bg-gray-300 rounded-xl mt-10 lg:mt-20 overflow-hidden">
          <img
            src="/images/cover.webp"
            alt="cover"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 mt-20 container mx-auto gap-12 lg:gap-24 px-5">
        <div>
          <h1 className="text-5xl lg:text-title font-bold">Our Value</h1>
          <h5 className="mt-4 lg:mt-8 text-lg lg:text-2xl font-medium">
            We believe in building with purpose. Our work is grounded in
            integrity, driven by innovation, and delivered with excellence.
            Through every project, we stay committed to quality and long-term
            client success.
          </h5>
        </div>
        <div className="text-white">
          <div className="bg-black1 px-5 lg:px-10 py-8 rounded-xl">
            <h3 className="text-2xl lg:text-subtitle font-bold">Integrity</h3>
            <h4 className="text-base lg:text-description mt-2">
              We act with honesty and transparency in everything we do — earning
              trust and building strong relationships that last.
            </h4>
          </div>
          <div className="bg-black1 px-5 lg:px-10 py-8 rounded-xl mt-6">
            <h3 className="text-2xl lg:text-subtitle font-bold">Innovation</h3>
            <h4 className="text-base lg:text-description mt-2">
              We embrace change and push boundaries to create forward-thinking
              solutions that grow with the digital landscape.
            </h4>
          </div>
          <div className="bg-black1 px-5 lg:px-10 py-8 rounded-xl mt-6">
            <h3 className="text-2xl lg:text-subtitle font-bold">Excellence</h3>
            <h4 className="text-base lg:text-description mt-2">
              We hold ourselves to high standards, delivering quality work that
              consistently exceeds expectations.
            </h4>
          </div>
        </div>
      </section>
      <section
        id="process"
        className="w-full container mx-auto mt-20 pb-24 px-5"
      >
        <h1 className="text-5xl lg:text-title font-bold">Our Process</h1>
        <h5 className="mt-2 text-xl lg:text-2xl font-medium">
          Our process blends creativity, collaboration, and precision —
          delivering seamless, high-quality software from idea to launch.
        </h5>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20">
          <div className="bg-white drop-shadow border border-[#D1D5DB] rounded-xl px-8 pt-7 pb-20">
            <div className="w-10 lg:w-16 aspect-square rounded-full bg-black1 flex justify-center items-center">
              <h5 className="text-white text-2xl lg:text-3xl font-medium">1</h5>
            </div>
            <h4 className="mt-5 text-subtitle font-bold">Discover</h4>
            <p className="text-lg lg:text-description mt-2 plus-jakarta-sans">
              Dive deep into your goals and challenges.
            </p>
          </div>
          <div className="bg-white drop-shadow border border-[#D1D5DB] rounded-xl px-8 pt-7 pb-20">
            <div className="w-10 lg:w-16 aspect-square rounded-full bg-black1 flex justify-center items-center">
              <h5 className="text-white text-2xl lg:text-3xl font-medium">2</h5>
            </div>
            <h4 className="mt-5 text-subtitle font-bold">Explore</h4>
            <p className="text-lg lg:text-description mt-2 plus-jakarta-sans">
              Analyze user needs and industry trends.
            </p>
          </div>
          <div className="bg-white drop-shadow border border-[#D1D5DB] rounded-xl px-8 pt-7 pb-20">
            <div className="w-10 lg:w-16 aspect-square rounded-full bg-black1 flex justify-center items-center">
              <h5 className="text-white text-2xl lg:text-3xl font-medium">3</h5>
            </div>
            <h4 className="mt-5 text-subtitle font-bold">Define</h4>
            <p className="text-lg lg:text-description mt-2 plus-jakarta-sans">
              Set clear goals, timelines, and success metrics.
            </p>
          </div>
          <div className="bg-white drop-shadow border border-[#D1D5DB] rounded-xl px-8 pt-7 pb-20">
            <div className="w-10 lg:w-16 aspect-square rounded-full bg-black1 flex justify-center items-center">
              <h5 className="text-white text-2xl lg:text-3xl font-medium">4</h5>
            </div>
            <h4 className="mt-5 text-subtitle font-bold">Build</h4>
            <p className="text-lg lg:text-description mt-2 plus-jakarta-sans">
              Craft robust, scalable, and tailored solutions.
            </p>
          </div>
          <div className="bg-white drop-shadow border border-[#D1D5DB] rounded-xl px-8 pt-7 pb-20">
            <div className="w-10 lg:w-16 aspect-square rounded-full bg-black1 flex justify-center items-center">
              <h5 className="text-white text-2xl lg:text-3xl font-medium">5</h5>
            </div>
            <h4 className="mt-5 text-subtitle font-bold">Test</h4>
            <p className="text-lg lg:text-description mt-2 plus-jakarta-sans">
              Ensure reliability, performance, and usability.
            </p>
          </div>
          <div className="bg-white drop-shadow border border-[#D1D5DB] rounded-xl px-8 pt-7 pb-20">
            <div className="w-10 lg:w-16 aspect-square rounded-full bg-black1 flex justify-center items-center">
              <h5 className="text-white text-2xl lg:text-3xl font-medium">6</h5>
            </div>
            <h4 className="mt-5 text-subtitle font-bold">Launch</h4>
            <p className="text-lg lg:text-description mt-2 plus-jakarta-sans">
              Deliver with polish and pride — ready for impact.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

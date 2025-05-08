/* eslint-disable react/no-unescaped-entities */
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "ngodinghouse || About" },
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
            We're passionate about crafting digital experiences that inspire.
            With expertise in web and app development, we turn ideas into
            reality, empowering businesses to thrive in the digital age.
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
            We uphold integrity, innovation, and excellence in every project.
            With a commitment to quality and client satisfaction, we deliver
            transformative software solutions that drive success.
          </h5>
        </div>
        <div className="text-white">
          <div className="bg-black1 px-5 lg:px-10 py-8 rounded-xl">
            <h3 className="text-2xl lg:text-subtitle font-bold">Integrity</h3>
            <h4 className="text-base lg:text-description mt-2">
              Integrity is fundamental. It ensures trust, transparency, and
              reliability in all our endeavors, fostering strong client
              relationships.
            </h4>
          </div>
          <div className="bg-black1 px-5 lg:px-10 py-8 rounded-xl mt-6">
            <h3 className="text-2xl lg:text-subtitle font-bold">Innovation</h3>
            <h4 className="text-base lg:text-description mt-2">
              Innovation drives our pursuit of cutting-edge solutions, ensuring
              continuous growth and relevance in the digital landscape.
            </h4>
          </div>
          <div className="bg-black1 px-5 lg:px-10 py-8 rounded-xl mt-6">
            <h3 className="text-2xl lg:text-subtitle font-bold">Excellence</h3>
            <h4 className="text-base lg:text-description mt-2">
              Excellence defines our commitment to delivering superior quality
              and exceeding client expectations.
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
          We process integrates creativity, collaboration, and precision to
          ensure seamless development and delivery of innovative software
          solutions.
        </h5>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20">
          <div className="bg-white drop-shadow border border-[#D1D5DB] rounded-xl px-8 pt-7 pb-20">
            <div className="w-10 lg:w-16 aspect-square rounded-full bg-black1 flex justify-center items-center">
              <h5 className="text-white text-2xl lg:text-3xl font-medium">1</h5>
            </div>
            <h4 className="mt-5 text-subtitle font-bold">Introduction</h4>
            <p className="text-lg lg:text-description mt-2 plus-jakarta-sans">
              Understand client's needs and objectives thoroughly.
            </p>
          </div>
          <div className="bg-white drop-shadow border border-[#D1D5DB] rounded-xl px-8 pt-7 pb-20">
            <div className="w-10 lg:w-16 aspect-square rounded-full bg-black1 flex justify-center items-center">
              <h5 className="text-white text-2xl lg:text-3xl font-medium">2</h5>
            </div>
            <h4 className="mt-5 text-subtitle font-bold">Research</h4>
            <p className="text-lg lg:text-description mt-2 plus-jakarta-sans">
              Gather insights and analyze market trends
            </p>
          </div>
          <div className="bg-white drop-shadow border border-[#D1D5DB] rounded-xl px-8 pt-7 pb-20">
            <div className="w-10 lg:w-16 aspect-square rounded-full bg-black1 flex justify-center items-center">
              <h5 className="text-white text-2xl lg:text-3xl font-medium">3</h5>
            </div>
            <h4 className="mt-5 text-subtitle font-bold">Define</h4>
            <p className="text-lg lg:text-description mt-2 plus-jakarta-sans">
              Set clear goals and project scope
            </p>
          </div>
          <div className="bg-white drop-shadow border border-[#D1D5DB] rounded-xl px-8 pt-7 pb-20">
            <div className="w-10 lg:w-16 aspect-square rounded-full bg-black1 flex justify-center items-center">
              <h5 className="text-white text-2xl lg:text-3xl font-medium">4</h5>
            </div>
            <h4 className="mt-5 text-subtitle font-bold">Develop</h4>
            <p className="text-lg lg:text-description mt-2 plus-jakarta-sans">
              Build solutions tailored to client requirements
            </p>
          </div>
          <div className="bg-white drop-shadow border border-[#D1D5DB] rounded-xl px-8 pt-7 pb-20">
            <div className="w-10 lg:w-16 aspect-square rounded-full bg-black1 flex justify-center items-center">
              <h5 className="text-white text-2xl lg:text-3xl font-medium">5</h5>
            </div>
            <h4 className="mt-5 text-subtitle font-bold">Testing</h4>
            <p className="text-lg lg:text-description mt-2 plus-jakarta-sans">
              Ensure functionality, performance, and quality
            </p>
          </div>
          <div className="bg-white drop-shadow border border-[#D1D5DB] rounded-xl px-8 pt-7 pb-20">
            <div className="w-10 lg:w-16 aspect-square rounded-full bg-black1 flex justify-center items-center">
              <h5 className="text-white text-2xl lg:text-3xl font-medium">6</h5>
            </div>
            <h4 className="mt-5 text-subtitle font-bold">Presentation</h4>
            <p className="text-lg lg:text-description mt-2 plus-jakarta-sans">
              Deliver the final product with excellence
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

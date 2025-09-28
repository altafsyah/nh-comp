/* eslint-disable react/no-unescaped-entities */
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { services } from "~/data/home";
import clsx from "clsx";
import { MDiv, MH1, MH2, MLi, MP } from "~/components/motion-wrapper";
import RecentWorks from "./recent-work";
import FAQs from "./faqs";
import CalButton from "~/components/calcom-iframe";
import Icon from "~/components/icon";
import { getSplitTextAnimation } from "~/lib/getSplitTextAnimation";
import { fadeUpValue } from "~/constant/motion-value";

export const meta: MetaFunction = () => {
  return [
    { title: "Software Development || Design & Development" },
    {
      name: "description",
      content:
        "NgodingHouse: Your innovative software partner. We specialize in crafting bespoke digital solutions to elevate your business.",
    },
    {
      name: "keywords",
      content:
        "software house pontianak, jasa pembuatan web, jasa pembuatan aplikasi, ui/ux design, website pontianak, ngodinghouse, indonesia, murah, terpercaya",
    },
    {
      name: "author",
      content: "ngodinghouse",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ];
};

export default function Index() {
  const heroItems = [
    {
      title: "BPTrans",
      category: ["Web Design"],
      imageUrl: "/images/work_dummy_1.jfif",
    },
    {
      title: "Ecommerce Website",
      category: ["Website Development"],
      imageUrl: "/images/work_dummy_2.jfif",
    },
    {
      title: "MyAgro Indonesia",
      category: ["Product Development"],
      imageUrl: "/images/work_dummy_1.jfif",
    },
  ];

  const values = [
    {
      title: "Integrity",
      description:
        "We believe in being honest and transparent. This helps us build strong, trusting relationships.",
    },
    {
      title: "Innovation",
      description:
        "We're always exploring new ideas and technologies to find the best solutions for you.",
    },
    {
      title: "Excellence",
      description:
        "We're committed to delivering high-quality work that consistently exceeds expectations.",
    },
  ];

  return (
    <>
      <section
        id="hero"
        className="w-full min-h-fit h-dvh md:h-fit lg:h-dvh flex flex-col justify-end bg-slate-950 relative overflow-x-hidden text-white py-10"
      >
        <div className="p-6 md:p-10 space-y-4 container mx-auto">
          <MH1 className="text-3xl lg:text-5xl font-semibold">
            {getSplitTextAnimation({
              text: "Hi, we're open",
            })}
          </MH1>
          <MP className="text-xl lg:text-4xl">
            {getSplitTextAnimation({
              text: "We're here to help you solve your biggest challenges with smart, effective software.",
            })}
          </MP>
          <div className="flex items-center mt-6 gap-4 md:gap-8">
            <MDiv {...fadeUpValue(0.2)}>
              <CalButton className="bg-slate-600 px-5 py-2 rounded-full ring-2 ring-slate-500 hover:bg-slate-500 hover:border-slate-600/60 transition-colors duration-150 font-medium">
                Book a call
              </CalButton>
            </MDiv>
            <MDiv {...fadeUpValue(0.4)}>
              <Link to="/">Recent works</Link>
            </MDiv>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 mt-6 md:mt-8 px-6 md:px-10 gap-x-2 gap-y-4 ">
          {heroItems.map((item, index) => (
            <MDiv
              {...fadeUpValue(index === 0 ? 0.275 : 0.275 * index)}
              className="h-[150px] md:h-[250px] lg:h-[400px] bg-gray-500 relative rounded-2xl overflow-hidden"
              key={`${item.title}_${index}_hero`}
            >
              <div className="absolute inset-0">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative p-6 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end h-full w-full">
                <div className="flex justify-between">
                  <h3 className="shrink-0 text-xl font-semibold">
                    {item.title}
                  </h3>
                  <ul className="hidden lg:flex gap-3 items-center flex-wrap">
                    <li className="hidden lg:block">
                      <img
                        src="/images/web_icon.svg"
                        alt=""
                        className="size-6"
                      />
                    </li>
                    <li>
                      <Link to="/">
                        <span className="px-4 text-sm py-2 rounded-full bg-white/10 backdrop-blur-sm ring ring-slate-600">
                          View
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </MDiv>
          ))}
        </div>
      </section>
      <section id="values" className="w-full">
        <div className="container mx-auto p-6 md:p-10 grid grid-cols-12 gap-y-10">
          <div className="col-span-12 lg:col-span-3">
            <h2 className="text-3xl lg:text-5xl font-semibold">
              {getSplitTextAnimation({
                text: "Our Values",
                mode: "whileInView",
                delay: 0.2,
              })}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-9 grid grid-cols-subgrid gap-6">
            {values.map((item) => (
              <MDiv
                key={item.title}
                className="border-t lg:border-t-0 lg:border-l pt-6 lg:pt-0 lg:pl-6 border-slate-600 col-span-full lg:col-span-3 flex flex-col gap-10 md:gap-16 lg:gap-24"
              >
                <h3 className="text-xl md:text-4xl font-semibold">
                  {getSplitTextAnimation({
                    text: item.title,
                    delay: 0.2,
                    mode: "whileInView",
                  })}
                </h3>
                <p className="font-medium text-lg md:text-xl">
                  {getSplitTextAnimation({
                    text: item.description,
                    mode: "whileInView",
                    duration: 0.2,
                  })}
                </p>
              </MDiv>
            ))}
          </div>
        </div>
      </section>
      <section
        id="services"
        className={clsx("w-full p-6 md:p-10 container mx-auto mt-24 md:mt-32")}
      >
        <h2 className="text-3xl lg:text-5xl font-semibold w-fit">
          {getSplitTextAnimation({
            text: "How We Can Help",
            mode: "whileInView",
          })}
        </h2>
        <p className="mt-4 text-xl">
          {getSplitTextAnimation({
            text: "From tiny tweaks to big projects, we’re here to make things happen.",
            mode: "whileInView",
            duration: 0.25,
          })}
        </p>
        <ul className="mt-9 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <MLi
              key={service.title}
              className="p-6 md:p-8 rounded-xl drop-shadow ring-2 ring-slate-500 bg-slate-800/60 backdrop-blur"
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(10px)",
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                delay: 0.1 * index,
                duration: 0.5,
              }}
            >
              <div className="w-12 lg:w-16 aspect-square flex justify-center items-center rounded-full ring-2 ring-slate-500 bg-slate-800/60 backdrop-blur">
                <img
                  src={service.icon}
                  alt="ui"
                  className="w-6 aspect-square"
                />
              </div>
              <h2 className="text-xl lg:text-3xl mt-5 font-bold">
                {service.title}
              </h2>
              <p className="lg:text-2xl mt-2 plus-jakarta-sans">
                {service.description}
              </p>
            </MLi>
          ))}
        </ul>
      </section>
      <RecentWorks />
      <section
        id="unique"
        className="w-full p-6 md:p-10 container mx-auto mt-24 md:mt-32"
      >
        <h2 className="text-3xl lg:text-5xl font-semibold w-fit">
          {getSplitTextAnimation({
            text: "How We Do Things Differently",
            mode: "whileInView",
          })}
        </h2>
        <p className="mt-4 text-xl">
          {getSplitTextAnimation({
            text: "A little unconventional, a lot effective—here’s how we roll.",
            mode: "whileInView",
          })}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-10">
          <MDiv
            initial={{ filter: "blur(8px)", y: 40, opacity: 0 }}
            whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="group relative w-full md:col-span-12 lg:col-span-4 lg:row-span-2 overflow-hidden ring-2 ring-slate-500 bg-slate-800/60 backdrop-blur min-h-[250px] rounded-2xl max-h-full flex flex-col justify-end gap-6 p-4"
          >
            <div className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-50 transition-opacity duration-300">
              <Icon
                id="icon-command"
                fill="#FFFFFF"
                width={120}
                height={120}
                className="absolute -left-10 rotate-6 group-hover:scale-95 transition-transform duration-300 group-hover:translate-x-10 group-hover:translate-y-4 group-hover:rotate-12"
              />
              <Icon
                id="icon-cursor-click"
                fill="#FFFFFF"
                width={120}
                height={120}
                className="absolute -right-16 top-32 -rotate-12 group-hover:scale-95 transition-transform duration-400 group-hover:-translate-x-20 group-hover:rotate-6"
              />
              <Icon
                id="icon-magic-wand"
                fill="#FFFFFF"
                width={120}
                height={120}
                className="absolute -left-10 top-64 -rotate-12 group-hover:scale-95 transition-transform duration-500 group-hover:translate-x-16 group-hover:-translate-y-4 group-hover:-rotate-6"
              />
            </div>
            <div className="relative">
              <h3 className="text-2xl font-semibold">
                Passionate Professionals
              </h3>
              <p className="text-base">
                From design to development, we put heart into everything we
                create.
              </p>
            </div>
          </MDiv>
          <MDiv
            initial={{ filter: "blur(8px)", y: 40, opacity: 0 }}
            whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.1,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="group relative overflow-hidden w-full md:col-span-6 lg:col-span-4 ring-2 ring-slate-500 bg-slate-800/60 backdrop-blur min-h-[250px] rounded-2xl flex flex-col justify-end gap-6 p-4"
          >
            <div className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-50 transition-opacity duration-300">
              <Icon
                id="icon-copyright"
                fill="#FFFFFF"
                width={120}
                height={120}
                className="absolute -left-10 rotate-45 group-hover:scale-90 transition-transform duration-300 group-hover:translate-x-10 group-hover:translate-y-2 group-hover:rotate-12"
              />
              <Icon
                id="icon-key"
                fill="#FFFFFF"
                width={120}
                height={120}
                className="absolute -right-10 top-10 -rotate-90 group-hover:scale-95 transition-transform duration-500 group-hover:-translate-x-8 group-hover:translate-y-2"
              />
            </div>
            <div className="relative">
              <h3 className="text-2xl font-semibold">True Ownership</h3>
              <p className="text-base">
                We treat your business like our own, working as partners, not
                just contractors.
              </p>
            </div>
          </MDiv>
          <MDiv
            initial={{ filter: "blur(8px)", y: 40, opacity: 0 }}
            whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.1 * 2,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="group relative overflow-hidden w-full md:col-span-6 lg:col-span-4 ring-2 ring-slate-500 bg-slate-800/60 backdrop-blur min-h-[250px] rounded-2xl flex flex-col justify-end gap-6 p-4"
          >
            <div className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-50 transition-opacity duration-300">
              <Icon
                id="icon-tree-structure"
                fill="#FFFFFF"
                width={120}
                height={120}
                className="absolute -left-10 rotate-12 group-hover:scale-80 transition-transform duration-300 group-hover:translate-x-10 group-hover:translate-y-6"
              />
              <Icon
                id="icon-question"
                fill="#FFFFFF"
                width={120}
                height={120}
                className="absolute -right-10 top-10 -rotate-45 group-hover:scale-95 transition-transform duration-500 group-hover:-translate-x-12 group-hover:-translate-y-6"
              />
            </div>
            <div className="relative">
              <h3 className="text-2xl font-semibold">
                Collaborative by Nature
              </h3>
              <p className="text-base">
                We don’t stop at following a brief — we dive in, brainstorm, and
                grow ideas with you.
              </p>
            </div>
          </MDiv>

          <MDiv
            initial={{ filter: "blur(8px)", y: 40, opacity: 0 }}
            whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.1 * 3,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="group relative overflow-hidden w-full ring-2 ring-slate-500 bg-slate-800/60 backdrop-blur md:col-span-6 lg:col-span-3 min-h-[250px] rounded-2xl flex flex-col justify-end gap-6 p-4"
          >
            <div className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-50 transition-opacity duration-300">
              <Icon
                id="icon-intersect"
                fill="#FFFFFF"
                width={120}
                height={120}
                className="absolute -left-10 group-hover:scale-95 transition-transform duration-300 group-hover:translate-x-10 group-hover:-rotate-6"
              />
              <Icon
                id="icon-network"
                fill="#FFFFFF"
                width={120}
                height={120}
                className="absolute -right-10 top-10 -rotate-12 group-hover:scale-95 transition-transform duration-500 group-hover:-translate-x-10 group-hover:rotate-6"
              />
            </div>
            <div className="relative">
              <h3 className="text-2xl font-semibold">Always Connected</h3>
              <p className="text-base">
                Daily updates keep you in the loop, so you’ll never wonder where
                things stand.
              </p>
            </div>
          </MDiv>
          <MDiv
            initial={{ filter: "blur(8px)", y: 40, opacity: 0 }}
            whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.1 * 4,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="group relative overflow-hidden w-full ring-2 ring-slate-500 bg-slate-800/60 backdrop-blur md:col-span-6 lg:col-span-5 min-h-[250px] rounded-2xl flex flex-col justify-end gap-6 p-4"
          >
            <div className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-50 transition-opacity duration-300">
              <Icon
                id="icon-quotes"
                fill="#FFFFFF"
                width={120}
                height={120}
                className="absolute -left-10 rotate-12 group-hover:scale-95 transition-transform group-hover:translate-x-10 duration-300"
              />
              <Icon
                id="icon-chat-dots"
                fill="#FFFFFF"
                width={120}
                height={120}
                className="absolute -right-10 top-10 -rotate-12 group-hover:scale-95 transition-transform group-hover:-translate-x-10 duration-500"
              />
            </div>
            <div className="relative">
              <h3 className="text-2xl font-semibold">Fast & Responsive</h3>
              <p className="text-base">
                Quick replies, faster iterations — because momentum matters.
              </p>
            </div>
          </MDiv>
        </div>
      </section>
      <section className="w-full mt-24 md:mt-32" id="testimonials">
        <div className="container mx-auto p-6 md:p-10">
          <h2 className="text-3xl lg:text-5xl font-semibold w-fit">
            {getSplitTextAnimation({
              text: "Hear From Our Clients",
              mode: "whileInView",
            })}
          </h2>
          <p className="mt-4 text-xl">
            {getSplitTextAnimation({
              text: "Stories from the folks we’ve worked with—and loved every minute.",
              mode: "whileInView",
            })}
          </p>
        </div>
        <div className="px-6 md:px-10 container mx-auto grid grid-cols-1 lg:grid-cols-3 mt-6 md:mt-10">
          <MDiv
            initial={{ filter: "blur(8px)", y: 40, opacity: 0 }}
            whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="py-6 lg:py-0 border-b lg:border-b-0 lg:border-r border-slate-500 w-full pr-4 md:pr-8"
          >
            <div>
              <h3 className="text-xl font-semibold">Farhan Hasan</h3>
              <span className="text-slate-400 font-medium">IDEKITE</span>
            </div>
            <p className="mt-16 md:mt-24 lg:mt-36">
              Working with them was a great experience. They were really fast in
              resolving the feedback and delivering the project on time.
            </p>
          </MDiv>
          <MDiv
            initial={{ filter: "blur(8px)", y: 40, opacity: 0 }}
            whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.175,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="py-6 lg:py-0 border-b lg:border-b-0 border-slate-500 w-full lg:px-8"
          >
            <div>
              <h3 className="text-xl font-semibold">Surya Mahardika</h3>
              <span className="text-slate-400 font-medium">BPTrans</span>
            </div>
            <p className="mt-16 md:mt-24 lg:mt-36">
              They delivered top-notch work on time and within budget. They did
              not compromise on quality even when the budget and timeline were
              tight.
            </p>
          </MDiv>
          <MDiv
            initial={{ filter: "blur(8px)", y: 40, opacity: 0 }}
            whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.175 * 2,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="py-6 lg:py-0 border-b lg:border-b-0 lg:border-l border-slate-500 w-full lg:pl-8"
          >
            <div>
              <h3 className="text-xl font-semibold">Natasha</h3>
              <span className="text-slate-400 font-medium">PT. Pertamina</span>
            </div>
            <p className="mt-16 md:mt-24 lg:mt-36">
              With the website they built, our online presence has grown and it
              helps us on shipping our products.
            </p>
          </MDiv>
        </div>
      </section>
      <section className="mt-24 md:mt-32 container mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-3xl lg:text-5xl font-semibold w-fit">
            {getSplitTextAnimation({
              text: "Your Questions, Answered",
              mode: "whileInView",
            })}
          </h2>
          <p className="mt-4 text-lg md:text-xl">
            {getSplitTextAnimation({
              text: "The stuff people usually ask us, laid out simply.",
              mode: "whileInView",
            })}
          </p>
        </div>
        <div>
          <FAQs />
        </div>
      </section>
    </>
  );
}

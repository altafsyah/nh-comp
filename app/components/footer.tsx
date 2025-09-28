import { Link } from "@remix-run/react";
import CalButton from "./calcom-iframe";
import { MDiv, MSection } from "./motion-wrapper";

export default function Footer() {
  return (
    <footer className="w-full pt-12 relative overflow-hidden mt-24 md:mt-32">
      <MSection
        initial={{ filter: "blur(4px)", y: -12, opacity: 0 }}
        whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container mx-auto p-6 md:p-10 ring-2 ring-slate-500 lg:rounded-3xl bg-slate-800/60 backdrop-blur relative overflow-hidden group"
      >
        <MDiv
          className="absolute -right-32 md:right-6 -bottom-48 opacity-40 group-hover:-rotate-3 group-hover:translate-y-2 transition-transform duration-700"
          initial={{ rotate: 6, scale: 0.95, y: 0 }}
          whileInView={{
            rotate: 12,
            scale: 0.95,
            y: -40,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          <img src="/images/logo.svg" alt="ngasd" />
        </MDiv>
        <div className="relative">
          <p className="text-2xl md:text-3xl font-bold w-full">
            Your trusted partner in the digital world.
          </p>
          <p className="text-lg md:text-xl mt-2">
            We’re here to turn your ideas into tools that work — simple,
            effective, and made for you.
          </p>
          <div className="flex items-center mt-6 gap-4">
            <CalButton className="bg-slate-600 px-5 py-2 rounded-full ring-2 ring-slate-500 hover:bg-slate-500 hover:border-slate-600/60 transition-colors duration-150 font-medium">
              Book a call
            </CalButton>
            <Link to="/">Recent works</Link>
          </div>
        </div>
      </MSection>
      <div className="bg-slate-950 relative z-20 container w-full mx-auto mt-24">
        <div className="border-t border-t-white pt-7 pb-12 flex flex-col px-6 md:flex-row gap-6 justify-between items-center">
          <Link to="/" className="text-3xl font-bold">
            ngodinghouse
          </Link>
          <h5>© 2025 | All Rights Reserved.</h5>
          <div className="flex gap-4 items-center">
            <a
              href="https://www.instagram.com/ngodinghouse/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/instagram.svg"
                alt="Instagram"
                className="h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

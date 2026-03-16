import { Link } from "react-router-dom";
import { practitionerPortraitImage } from "../../lib/images";
import Reveal from "../Reveal";
import Button from "../ui/Button";
import { ArrowRightIcon } from "@phosphor-icons/react";
import SectionIntro from "../ui/SectionIntro";

export default function About() {
  return (
    <section className="py-32 bg-mauve-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionIntro
          showLogo
          eyebrow="Welcome to Physio+"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <Reveal className="relative block" direction="right">
            <div className="w-full h-[240px] sm:h-[360px] lg:h-[420px] rounded-tr-[20vw] overflow-hidden">
              <img
                src={practitionerPortraitImage.src}
                alt={practitionerPortraitImage.alt}
                className="w-full h-full object-cover object-[25%_20%] lg:object-[25%_35%] rounded-lg"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </div>
          </Reveal>

          <Reveal className="space-y-6" direction="left" delay={0.1}>
            <div className="font-display">
              <h2 className="text-xl md:text-2xl text-mauve-500">
                Meet Jane Doe
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-mauve-900 leading-[0.95] text-balance">
                Let’s restore, relax & rebalance your body
              </h1>
            </div>

            <p className="font-ui text-base font-light text-mauve-800 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <Button as={Link} to="/about" variant="outline">
              Learn more
              <ArrowRightIcon size={14} />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

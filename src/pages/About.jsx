import { Link } from "react-router-dom";
import { practitionerPortraitImage } from "../lib/images";
import Reveal from "../components/Reveal";
import Button from "../components/ui/Button";
import PageHeader from "../components/ui/PageHeader";
import {
  ArrowRightIcon,
  HeartbeatIcon,
  HandHeartIcon,
  SparkleIcon,
} from "@phosphor-icons/react";

const values = [
  {
    title: "Personalised Care",
    description:
      "Every treatment plan is shaped around your goals, history, and pace of recovery.",
    Icon: HandHeartIcon,
  },
  {
    title: "Evidence-Based",
    description:
      "We combine clinical expertise with practical treatment methods that support lasting progress.",
    Icon: HeartbeatIcon,
  },
  {
    title: "Whole-Body Focus",
    description:
      "Care is designed to reduce pain, restore movement, and improve how you feel day to day.",
    Icon: SparkleIcon,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* main content */}
      <section className="bg-mauve-50 py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 font-ui">
          <PageHeader
            eyebrow="Meet Your Practitioner"
            title="Expert Care You Can Trust"
            description="Experience comprehensive, personalized healthcare with a practitioner who takes the time to understand your unique needs."
          />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center relative">
            <Reveal className="relative block" direction="right">
              <div className="w-full h-[28vh] sm:h-[32vh] lg:h-[420px] rounded-tr-[20vw] overflow-hidden lg:transform lg:translate-y-8 lg:z-10">
                <img
                  src={practitionerPortraitImage.src}
                  alt={practitionerPortraitImage.alt}
                  className="w-full h-full object-cover object-[25%_20%] lg:object-[25%_35%] rounded-2xl"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                />
              </div>
            </Reveal>

            <Reveal className="space-y-6" direction="left" delay={0.1}>
              <div className="font-display">
                <h2 className="text-xl md:text-2xl text-mauve-500">
                  Physiotherapist
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-mauve-900 leading-[0.95]">
                  Jane Doe
                </h1>
              </div>
              <div className="space-y-4 font-ui text-base font-light text-mauve-800 text-justify">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* values section */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <PageHeader
            showLogo={false}
            title="Our Values"
            description="The principles that guide everything we do at Physio+"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ title, description, Icon }, index) => (
              <Reveal
                key={title}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8"
                delay={index * 0.08}
              >
                <Icon size={28} className="mb-2 text-mauve-500" />
                <h3 className="mb-4 font-display text-2xl lg:text-3xl text-neutral-800">
                  {title}
                </h3>
                <p className="text-base leading-relaxed text-neutral-600">
                  {description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* mission section */}
      <section className="bg-mauve-100 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center">
            <PageHeader
              showLogo={false}
              title="Our Mission"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            />
            <Button as={Link} to="/contact" variant="primary">
              Start Your Journey
              <ArrowRightIcon size={14} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

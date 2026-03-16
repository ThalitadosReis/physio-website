import { Link } from "react-router-dom";
import { ClockIcon, SparkleIcon } from "@phosphor-icons/react";
import { servicesList, servicesData } from "../../data/servicelist";
import Reveal from "../Reveal";
import Button from "../ui/Button";
import SectionIntro from "../ui/SectionIntro";

const featuredServices = servicesList.map((service) => ({
  title: service,
  image: servicesData[service].image,
  imageAlt: servicesData[service].imageAlt,
  description: servicesData[service].benefits[0],
  duration: servicesData[service].duration,
}));

export default function Services() {
  return (
    <section className="bg-mauve-50 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionIntro
          showLogo
          eyebrow="Areas of Expertise"
          title="Treatment expertise for every stage of recovery"
          description="Explore our core treatment areas. Each one is tailored to reduce pain, improve function, and support long-term wellbeing."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service, index) => (
            <Reveal
              key={service.title}
              className="overflow-hidden rounded-lg border border-neutral-200 bg-white"
              delay={index * 0.06}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                />
              </div>

              <div className="space-y-4 p-6">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-mauve-600">
                  <SparkleIcon size={14} weight="fill" />
                  <span>Specialised Care</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl leading-[1] text-mauve-900">
                    {service.title}
                  </h3>
                  <p className="font-ui text-base font-light text-mauve-800 text-justify">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-mauve-800/80">
                  <ClockIcon size={14} />
                  {service.duration}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex justify-center" delay={0.24}>
          <Button as={Link} to="/services" variant="secondary" showIcon>
            View all services
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

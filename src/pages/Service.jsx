import { useState } from "react";
import { Link } from "react-router-dom";
import {
  servicesList,
  servicesData,
  generalServices,
} from "../data/servicelist";
import Reveal from "../components/Reveal";
import Button from "../components/ui/Button";
import PageHeader from "../components/ui/PageHeader";
import { servicesOverviewImage } from "../lib/images";
import {
  ArrowRightIcon,
  CaretDownIcon,
  CaretRightIcon,
  CheckIcon,
  ClockCountdownIcon,
  CoinsIcon,
} from "@phosphor-icons/react";

function ServiceBenefits({ benefits }) {
  return (
    <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-1">
      {benefits.map((benefit, idx) => (
        <li
          key={idx}
          className="flex items-start gap-2 font-ui text-[15px] font-light text-mauve-800 md:text-base"
        >
          <CheckIcon size={14} className="mt-1 shrink-0" />
          {benefit}
        </li>
      ))}
    </ul>
  );
}

function ServiceMeta({ duration, price }) {
  return (
    <div className="grid grid-cols-2 gap-4 pt-2">
      <div className="flex items-center gap-2 font-light text-mauve-700">
        <ClockCountdownIcon size={16} className="text-mauve-500" />
        {duration}
      </div>
      <div className="flex items-center gap-2 font-light text-mauve-700">
        <CoinsIcon size={16} className="text-mauve-500" />
        {price}
      </div>
    </div>
  );
}

function ServiceBookingButton({ serviceName, to }) {
  return (
    <Button as={Link} to={to} variant="primary" showIcon>
      Book {serviceName}
    </Button>
  );
}

export default function Service() {
  const [selectedService, setSelectedService] = useState("Chiropractic");
  const [openAccordionService, setOpenAccordionService] = useState(null);

  const handleServiceClick = (serviceName) => {
    setSelectedService(serviceName);
  };

  const handleAccordionClick = (serviceName) => {
    setOpenAccordionService(
      openAccordionService === serviceName ? null : serviceName,
    );
  };

  const getBookingPath = (service = "") =>
    service ? `/contact?service=${encodeURIComponent(service)}` : "/contact";
  const selectedServiceData = servicesData[selectedService];

  return (
    <div className="pt-20">
      <section className="bg-mauve-50 py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <PageHeader
            eyebrow="what we offer"
            title="Treatment Options"
            description="Choose from our range of specialised treatments, each designed to reduce pain, restore movement, and support long-term wellbeing."
            className="mb-12"
          />

          <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-8">
            <div className="hidden lg:block">
              <Reveal
                className="rounded-lg border border-mauve-200/80 bg-mauve-100/80 p-6 shadow-[0_10px_40px_rgb(79_61_88/7%)]"
                direction="left"
              >
                <p className="mb-3 font-ui text-[11px] uppercase tracking-[0.24em] text-mauve-600">
                  Explore Services
                </p>
                <h3 className="mb-6 font-display text-[2rem] leading-[0.95] text-mauve-900">
                  Find the right treatment path
                </h3>

                <div className="space-y-3">
                  {servicesList.map((serviceName, index) => (
                    <button
                      key={serviceName}
                      onClick={() => handleServiceClick(serviceName)}
                      className={`flex w-full items-center justify-between rounded-lg border px-4 py-4 text-left transition-all duration-300 ${
                        selectedService === serviceName
                          ? "border-mauve-400 bg-white text-mauve-900 shadow-[0_8px_24px_rgb(79_61_88/10%)]"
                          : "border-transparent bg-mauve-50/70 text-mauve-700 hover:border-mauve-200 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-ui text-[11px] uppercase tracking-[0.2em] text-mauve-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-[1.15rem] leading-tight">
                          {serviceName}
                        </span>
                      </div>
                      <ArrowRightIcon size={16} className="text-mauve-500" />
                    </button>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:hidden space-y-2">
              {servicesList.map((serviceName) => (
                <div key={serviceName}>
                  <button
                    onClick={() => handleAccordionClick(serviceName)}
                    className={`flex w-full items-center justify-between rounded-lg border p-4 transition-all md:p-6 ${
                      openAccordionService === serviceName
                        ? "border-mauve-400 bg-mauve-100 text-mauve-900"
                        : "border-mauve-200 bg-white text-mauve-900 hover:bg-mauve-50"
                    }`}
                  >
                    <span className="font-display text-[1.65rem] leading-tight md:text-[1.9rem]">
                      {serviceName}
                    </span>
                    <div className="text-mauve-600 transition-transform duration-300">
                      {openAccordionService === serviceName ? (
                        <CaretDownIcon size={24} />
                      ) : (
                        <CaretRightIcon size={24} />
                      )}
                    </div>
                  </button>

                  {/* accordion content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordionService === serviceName
                        ? "max-h-fit opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-6 rounded-lg border border-mauve-200 bg-white p-5 shadow-[0_10px_30px_rgb(79_61_88/6%)]">
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={servicesData[serviceName].image}
                          alt={
                            servicesData[serviceName].imageAlt ||
                            `${serviceName} treatment`
                          }
                          className="h-[28vh] w-full object-cover object-[25%_45%] sm:h-[32vh]"
                          loading="lazy"
                          decoding="async"
                          fetchpriority="low"
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-3">
                          <p className="text-[15px] md:text-base font-light leading-relaxed text-mauve-700">
                            {servicesData[serviceName].description}
                          </p>
                          <h4 className="font-display text-2xl text-mauve-900">
                            Key Benefits:
                          </h4>
                          <ServiceBenefits
                            benefits={servicesData[serviceName].benefits}
                          />
                        </div>

                        <ServiceMeta
                          duration={servicesData[serviceName].duration}
                          price={servicesData[serviceName].price}
                        />

                        <div className="border-t border-mauve-200 pt-4">
                          <ServiceBookingButton
                            serviceName={serviceName}
                            to={getBookingPath(serviceName)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Reveal
              className="relative hidden lg:block"
              direction="right"
              delay={0.1}
            >
              <div className="overflow-hidden rounded-lg border border-mauve-200 bg-white shadow-[0_14px_40px_rgb(79_61_88/8%)]">
                <div className="grid min-h-[640px] grid-cols-[1.5fr_2fr]">
                  <div className="relative h-full overflow-hidden bg-mauve-100">
                    <img
                      src={selectedServiceData.image}
                      alt={
                        selectedServiceData.imageAlt ||
                        `${selectedService} treatment`
                      }
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                      fetchpriority="low"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-mauve-900/60 to-transparent px-8 pb-8 pt-16">
                      <p className="font-ui text-[11px] uppercase tracking-[0.22em] text-mauve-100/80">
                        Tailored Treatment
                      </p>
                      <h2 className="mt-3 font-display text-[2.7rem] leading-[0.95] text-white">
                        {selectedService}
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between bg-white p-8">
                    <div className="space-y-6">
                      <div className="flex flex-wrap gap-3">
                        <div className="inline-flex items-center gap-2 rounded-lg bg-mauve-100 px-4 py-2 text-sm text-mauve-700">
                          <ClockCountdownIcon size={16} />
                          {selectedServiceData.duration}
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-lg bg-mauve-100 px-4 py-2 text-sm text-mauve-700">
                          <CoinsIcon size={16} />
                          {selectedServiceData.price}
                        </div>
                      </div>

                      <p className="max-w-xl text-base font-light leading-relaxed text-mauve-700">
                        {selectedServiceData.description}
                      </p>

                      <div className="space-y-4">
                        <h3 className="font-display text-2xl text-mauve-900">
                          Key Benefits
                        </h3>
                        <ServiceBenefits
                          benefits={selectedServiceData.benefits}
                        />
                      </div>
                    </div>

                    <div className="border-t border-mauve-200 pt-6">
                      <ServiceBookingButton
                        serviceName={selectedService}
                        to={getBookingPath(selectedService)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-mauve-100 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 font-ui">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-14">
            <Reveal className="relative block" direction="right">
              <div className="w-full h-[240px] sm:h-[360px] lg:h-full rounded-t-full overflow-hidden">
                <img
                  src={servicesOverviewImage.src}
                  alt={servicesOverviewImage.alt}
                  className="w-full h-full object-cover object-[25%_20%] rounded-lg"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                />
              </div>
            </Reveal>

            <Reveal
              className="order-last space-y-6 text-center lg:order-first lg:text-left"
              direction="left"
              delay={0.1}
            >
              <h1 className="text-center font-display text-[2.25rem] leading-[1.02] text-mauve-900 md:text-[2.9rem] lg:text-start lg:text-[3.4rem]">
                Why Choose
                <br className="hidden lg:block" />
                Our Services?
              </h1>
              <h2 className="text-center text-base leading-relaxed text-mauve-700 md:text-lg lg:text-left lg:text-xl">
                We provide comprehensive care with a focus on your individual
                needs and long-term wellness.
              </h2>

              <ul className="grid space-y-2 md:grid-cols-2 lg:grid-cols-1">
                {generalServices.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 font-ui text-base font-light text-mauve-800"
                  >
                    <CheckIcon size={14} />
                    {service}
                  </li>
                ))}
              </ul>

              <Button
                as={Link}
                to={getBookingPath()}
                variant="outline"
                className="hidden lg:flex"
                showIcon
              >
                <span>Schedule Appointment</span>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

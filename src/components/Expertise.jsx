import { MoveRight, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { servicesList, servicesData } from "../data/servicelist";

export default function Expertise({ setNavbarPage }) {
  const [selectedService, setSelectedService] = useState("Chiropractic");
  const [openAccordionService, setOpenAccordionService] = useState(null);

  const handleServiceClick = (serviceName) => {
    setSelectedService(serviceName);
  };

  const handleAccordionClick = (serviceName) => {
    setOpenAccordionService(
      openAccordionService === serviceName ? null : serviceName
    );
  };


  return (
    <div className="bg-vanilla/20 py-20">
      <div className="max-w-7xl mx-auto px-6 font-secondary">
        {/* header */}
        <div className="space-y-15 mb-20">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="font-primary text-sandstone text-6xl">
              Areas of Expertise
            </h1>
            <p className="max-w-4xl text-sandstone/80 text-2xl mt-10">
              Treatment-based Chiropractic, Acupuncture, Massage Therapy,
              Physiotherapy & Osteopathy.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 justify-between">
          {/* desktop left-sidebar */}
          <div className="hidden lg:block space-y-2">
            {servicesList.map((serviceName) => (
              <button
                key={serviceName}
                onClick={() => handleServiceClick(serviceName)}
                className={`w-full p-6 rounded-2xl text-left transition-all duration-300 flex items-center gap-4 ${
                  selectedService === serviceName
                    ? "bg-sandstone/20 text-white"
                    : "bg-white hover:bg-sandstone/20 text-sandstone cursor-pointer"
                }`}
              >
                <span className="text-2xl font-primary">{serviceName}</span>
              </button>
            ))}
          </div>

          {/* small screen-accordion */}
          <div className="lg:hidden mb-8 space-y-2">
            {servicesList.map((serviceName) => (
              <div key={serviceName}>
                <button
                  onClick={() => handleAccordionClick(serviceName)}
                  className={`w-full p-6 rounded-2xl text-left transition-all duration-300 flex items-center justify-between ${
                    openAccordionService === serviceName
                      ? "bg-sandstone/20 text-white"
                      : "bg-white hover:bg-sandstone/20 text-sandstone cursor-pointer"
                  }`}
                >
                  <span className="text-2xl font-primary">{serviceName}</span>
                  <div className="text-2xl transition-transform duration-300">
                    {openAccordionService === serviceName ? (
                      <ChevronDown className="w-6 h-6" />
                    ) : (
                      <ChevronRight className="w-6 h-6" />
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
                  <div>
                    <img
                      src={servicesData[serviceName].image}
                      alt={serviceName}
                      className="w-full h-[25vh] object-cover rounded-2xl mb-4"
                    />
                    <p className="text-sandstone/80 leading-snug text-sm mb-4">
                      {servicesData[serviceName].description}
                    </p>
                    <Link
                      to="/services"
                      onClick={() => handleServiceClick(serviceName)}
                      className="uppercase tracking-widest w-fit text-xs border border-transparent bg-sandstone/20 text-white hover:bg-transparent hover:text-sandstone hover:border-sandstone/50 px-8 py-3 rounded-full duration-200 flex items-center justify-center gap-2"
                    >
                      <span>Learn more</span>
                      <MoveRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* desktop-right */}
          <div className="relative hidden lg:block">
            <div className="animate-in slide-in-from-bottom-4 fade-in duration-700 ease-out">
              {/* image */}
              <div className="mb-6 overflow-hidden">
                <img
                  src={servicesData[selectedService].image}
                  alt={selectedService}
                  className="w-full h-[40vh] object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* text */}
              <div className="space-y-6">
                <h1 className="text-5xl font-primary text-sandstone">
                  {selectedService}
                </h1>
                <p className="text-sandstone/80 leading-snug max-w-3xl">
                  {servicesData[selectedService].description}
                </p>
                <Link
                  to="/services"
                  onClick={() => setNavbarPage && setNavbarPage("services")}
                  className="uppercase tracking-widest w-fit text-xs border border-transparent bg-sandstone/20 text-white hover:bg-transparent hover:text-sandstone hover:border-sandstone/50 px-8 py-3 rounded-full duration-200 flex items-center justify-center gap-2"
                >
                  <span>Learn more</span>
                  <MoveRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

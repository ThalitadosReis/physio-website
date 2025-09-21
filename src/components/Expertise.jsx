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
        <div className="mb-8">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-center font-primary text-sandstone text-3xl md:text-4xl lg:text-5xl">
              Areas of Expertise
            </h1>
            <h2 className="max-w-4xl text-sandstone/80 text-center md:text-lg lg:text-xl mt-2">
              Treatment-based Chiropractic, Acupuncture, Massage Therapy, Physiotherapy & Osteopathy.
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 justify-between">
          {/* desktop left-sidebar */}
          <div className="hidden lg:block space-y-2">
            {servicesList.map((serviceName) => (
              <button
                key={serviceName}
                onClick={() => handleServiceClick(serviceName)}
                className={`flex items-center w-full p-6 rounded-2xl transition-all duration-300 gap-4 ${
                  selectedService === serviceName
                    ? "bg-sandstone/20 text-white"
                    : "bg-white hover:bg-sandstone/20 text-sandstone"
                }`}
              >
                <span className="font-primary text-2xl">{serviceName}</span>
              </button>
            ))}
          </div>

          {/* small screen-accordion */}
          <div className="lg:hidden space-y-2">
            {servicesList.map((serviceName) => (
              <div key={serviceName}>
                <button
                  onClick={() => handleAccordionClick(serviceName)}
                  className={`flex items-center justify-between w-full p-4 md:p-6 rounded-2xl transition-all ${
                    openAccordionService === serviceName
                      ? "bg-sandstone/20 text-white"
                      : "bg-white hover:bg-sandstone/20 text-sandstone"
                  }`}
                >
                  <span className="text-xl md:text-2xl font-primary">{serviceName}</span>
                  <div className="transition-transform duration-300">
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
                  <div className="space-y-6">
                    <div className="w-full h-[30vh] lg:h-[45vh] overflow-hidden">
                      <img
                        src={servicesData[serviceName].image}
                        alt={serviceName}
                        className="w-full h-full object-cover object-[25%_45%] rounded-2xl"
                      />
                    </div>
                    <p className="text-sm text-sandstone/80 text-justify">
                      {servicesData[serviceName].description}
                    </p>
                    <Link
                      to="/services"
                      onClick={() => handleServiceClick(serviceName)}
                      className="w-fit flex items-center justify-center uppercase tracking-widest px-8 py-3 rounded-full text-xs gap-2 border border-transparent bg-sandstone/20 text-white hover:bg-transparent hover:text-sandstone hover:border-sandstone/50 duration-200"
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
            <div className="space-y-6">
              {/* image */}
              <div className="w-full h-[30vh] overflow-hidden">
                <img
                  src={servicesData[selectedService].image}
                  alt={selectedService}
                  className="w-full h-full object-cover object-[25%_45%] rounded-2xl"
                />
              </div>

              {/* text */}
              <div className="space-y-4">
                <h1 className="font-primary text-sandstone text-5xl">
                  {selectedService}
                </h1>
                <h2 className="text-sandstone/80 text-justify">
                  {servicesData[selectedService].description}
                </h2>
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

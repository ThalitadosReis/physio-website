import { MoveRight, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Expertise() {
  const [selectedService, setSelectedService] = useState("Chiropractic");
  const [openAccordionService, setOpenAccordionService] = useState(null);

  const servicesList = [
    "Chiropractic",
    "Acupuncture",
    "Massage Therapy",
    "Physiotherapy",
    "Osteopathy",
    "Lymphatic Drainage",
  ];

  const handleServiceClick = (serviceName) => {
    setSelectedService(serviceName);
  };

  const handleAccordionClick = (serviceName) => {
    setOpenAccordionService(
      openAccordionService === serviceName ? null : serviceName
    );
  };

  const services = {
    Chiropractic: {
      image:
        "https://images.pexels.com/photos/5793911/pexels-photo-5793911.jpeg?_gl=1*1vi9w7z*_ga*MTE1NTcwMTQwLjE3NTU4ODU3NjQ.*_ga_8JE65Q40S6*czE3NTgwOTYyODgkbzkkZzEkdDE3NTgwOTY1OTAkajIxJGwwJGgw&w=600&h=400&fit=crop",
      description:
        "Chiropractic care focuses on diagnosing and treating musculoskeletal disorders, particularly those related to the spine. Our chiropractors use hands-on techniques to adjust the spine and improve alignment, helping to alleviate pain and enhance overall function.",
    },
    Acupuncture: {
      image:
        "https://images.pexels.com/photos/6076122/pexels-photo-6076122.jpeg?_gl=1*vw64cw*_ga*MTE1NTcwMTQwLjE3NTU4ODU3NjQ.*_ga_8JE65Q40S6*czE3NTgwOTYyODgkbzkkZzEkdDE3NTgwOTY0ODkkajQwJGwwJGgw&w=600&h=400&fit=crop",
      description:
        "Acupuncture is an ancient healing practice that involves inserting thin needles into specific points on the body. This treatment helps balance energy flow, reduce pain, and promote natural healing processes.",
    },
    "Massage Therapy": {
      image:
        "https://images.pexels.com/photos/6560304/pexels-photo-6560304.jpeg?_gl=1*1fgzv4z*_ga*MTE1NTcwMTQwLjE3NTU4ODU3NjQ.*_ga_8JE65Q40S6*czE3NTgwOTYyODgkbzkkZzEkdDE3NTgwOTY0MTkkajMkbDAkaDA&w=600&h=400&fit=crop",
      description:
        "Therapeutic massage therapy helps relieve muscle tension, reduce stress, and improve circulation. Our licensed massage therapists use various techniques to address your specific needs and promote overall wellness and relaxation.",
    },
    Physiotherapy: {
      image:
        "https://images.pexels.com/photos/5794057/pexels-photo-5794057.jpeg?_gl=1*m24ch1*_ga*MTE1NTcwMTQwLjE3NTU4ODU3NjQ.*_ga_8JE65Q40S6*czE3NTgyMjQwNDMkbzExJGcxJHQxNzU4MjI0MDQ0JGo1OSRsMCRoMA..&w=600&h=400&fit=crop",
      description:
        "Physiotherapy focuses on restoring movement and function through physical methods such as exercise, manual therapy, and education. Our physiotherapists work with you to develop personalized treatment plans to help you recover from injuries and improve your overall mobility.",
    },
    Osteopathy: {
      image:
        "https://images.pexels.com/photos/5794058/pexels-photo-5794058.jpeg?_gl=1*182m1q*_ga*MTE1NTcwMTQwLjE3NTU4ODU3NjQ.*_ga_8JE65Q40S6*czE3NTgwOTYyODgkbzkkZzEkdDE3NTgwOTY2NDgkajI1JGwwJGgw&w=600&h=400&fit=crop",
      description:
        "Osteopathy is a treatment approach that focuses on the musculoskeletal system. People who choose to see an Osteopath are usually experiencing pain and have difficulty moving. Our osteopaths use hands-on techniques to restore function and promote healing.",
    },

    "Lymphatic Drainage": {
      image:
        "https://images.pexels.com/photos/9336024/pexels-photo-9336024.jpeg?_gl=1*nlqdws*_ga*MTE1NTcwMTQwLjE3NTU4ODU3NjQ.*_ga_8JE65Q40S6*czE3NTgwOTYyODgkbzkkZzEkdDE3NTgwOTY3NDgkajU5JGwwJGgw&w=600&h=400&fit=crop",
      description:
        "Lymphatic drainage massage is a gentle technique that stimulates the lymphatic system to remove toxins and excess fluid. This specialized therapy helps reduce swelling, boost immunity, and promote detoxification.",
    },
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

        <div className="grid lg:grid-cols-[30%_65%] justify-between">
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
                      src={services[serviceName].image}
                      alt={serviceName}
                      className="w-full h-[25vh] object-cover rounded-2xl mb-4"
                    />
                    <p className="text-sandstone/80 leading-snug text-sm mb-4">
                      {services[serviceName].description}
                    </p>
                    <a
                      href="#services"
                      onClick={() => handleServiceClick(serviceName)}
                      className="uppercase tracking-widest w-fit text-xs border border-transparent bg-sandstone/20 text-white hover:bg-transparent hover:text-sandstone hover:border-sandstone/50 px-8 py-3 rounded-full duration-200 flex items-center justify-center gap-2"
                    >
                      <span>Learn more</span>
                      <MoveRight className="w-4 h-4" />
                    </a>
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
                  src={services[selectedService].image}
                  alt={selectedService}
                  className="w-full object-contain rounded-2xl shadow-lg"
                />
              </div>

              {/* text */}
              <div className="space-y-6">
                <h1 className="text-5xl font-primary text-sandstone">
                  {selectedService}
                </h1>
                <p className="text-sandstone/80 leading-snug max-w-3xl">
                  {services[selectedService].description}
                </p>
                <a
                  href="#services"
                  className="uppercase tracking-widest w-fit text-xs border border-transparent bg-sandstone/20 text-white hover:bg-transparent hover:text-sandstone hover:border-sandstone/50 px-8 py-3 rounded-full duration-200 flex items-center justify-center gap-2"
                >
                  <span>Learn more</span>
                  <MoveRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Check, Cross, HandHeart, HeartHandshake } from "lucide-react";
import { generalServices } from "../data/servicelist";

export default function Services() {
  return (
    <section id="services" className="pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-6 font-secondary">
        {/* columns */}
        <section className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-sandstone/50 mb-10">
          <div className="flex flex-col items-start gap-4 p-4">
            <HandHeart strokeWidth={1.5} className="w-14 h-14 text-sandstone" />
            <h2 className="text-2xl font-primary text-sandstone">
              Helping since 2000
            </h2>
            <span className="text-sandstone/80">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
            </span>
          </div>

          <div className="flex flex-col items-start gap-4 p-4">
            <HeartHandshake
              strokeWidth={1.5}
              className="w-14 h-14 text-sandstone"
            />
            <h2 className="text-2xl font-primary text-sandstone">
              Trusted by the Community
            </h2>
            <span className="text-sandstone/80">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
            </span>
          </div>

          <div className="flex flex-col items-start gap-4 p-4">
            <Cross strokeWidth={1.5} className="w-14 h-14 text-sandstone" />
            <h2 className="text-2xl font-primary text-sandstone">
              Covered by Insurance
            </h2>
            <span className="text-sandstone/80">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
            </span>
          </div>
        </section>

        {/* main-content */}
        <section className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* left-content */}
          <div className="space-y-6">
            <h1 className="font-primary text-sandstone text-3xl md:text-4xl lg:text-5xl">
              Is pain causing you to miss out on life?
            </h1>
            <p className="text-sandstone/80 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* services list */}
            <ul className="space-y-2 grid md:grid-cols-2 lg:grid-cols-1">
              {generalServices.map((service, index) => (
                <li key={index} className="flex items-center gap-4 text-sandstone/80">
                  <Check strokeWidth={2.5} className="w-4 h-4" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* right- image */}
          <div className="relative block w-full">
            <div className="w-full h-[30vh] lg:h-[45vh] rounded-bl-[20vw] overflow-hidden">
              <img
                src={
                  "https://images.pexels.com/photos/5793901/pexels-photo-5793901.jpeg?_gl=1*wv0l01*_ga*MTE1NTcwMTQwLjE3NTU4ODU3NjQ.*_ga_8JE65Q40S6*czE3NTgyMTc4MDckbzEwJGcxJHQxNzU4MjE3OTU0JGo2MCRsMCRoMA.."
                }
                alt="Physiotherapist"
                className="w-full h-full object-cover object-[45%_5%] rounded-2xl"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

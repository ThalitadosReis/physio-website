import { MoveRight } from "lucide-react";

export default function Hero({ openBookingModal }) {
  return (
    <section
      id="home"
      className="relative bg-white lg:rounded-3xl pt-10 lg:mx-6 mt-16"
    >
      <div className="max-w-7xl mx-auto px-6 font-secondary">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="py-10">
            {/* header */}
            <div className="space-y-4 text-sandstone text-center lg:text-left mb-8">
              <h1 className="text-center lg:text-start font-primary text-sandstone text-3xl md:text-4xl lg:text-5xl">
                Helping you Achieve 
                <br className="block" />
                Optimal Wellbeing
              </h1>
              <h2 className="max-w-4xl text-sandstone/80 md:text-lg lg:text-xl">
                Expert physiotherapy care tailored to your needs. Get back to
                doing what you love with our evidence-based treatments.
              </h2>
            </div>

            {/* links */}
            <div className="flex flex-col sm:flex-row gap-8 items-center justify-center lg:justify-start">
              <button
                onClick={openBookingModal}
                className="flex items-center justify-center uppercase tracking-widest px-8 py-4 rounded-full text-xs gap-2 bg-sandstone text-white hover:bg-vanilla/40 hover:text-sandstone duration-200"
              >
                <span>Book Appointment</span>
                <MoveRight className="w-4 h-4" />
              </button>
              <span className="hidden sm:block border-l border-sandstone/50 h-12"></span>
              <div className="text-sandstone hidden md:block">
                <h3 className="uppercase text-xs">Give us a call</h3>
                <div className="text-lg">+41 76 123 45 67</div>
              </div>
            </div>
          </div>

          {/* image */}
          <div className="relative block w-full">
            <div className="w-full h-[30vh] lg:h-[45vh] rounded-t-full overflow-hidden -mb-10 z-10">
              <img
                src="https://images.pexels.com/photos/5793681/pexels-photo-5793681.jpeg?_gl=1*cwxc9w*_ga*MTE1NTcwMTQwLjE3NTU4ODU3NjQ.*_ga_8JE65Q40S6*czE3NTgwNTA5MTUkbzckZzEkdDE3NTgwNTA5MTYkajU5JGwwJGgw"
                alt="Physiotherapist"
                className="w-full h-full object-cover object-[25%_35%] rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

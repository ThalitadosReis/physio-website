import { MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-white lg:rounded-3xl lg:mx-5 mt-16"
    >
      <div className="relative max-w-7xl mx-auto px-8 p-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left-content */}
          <div className="space-y-6">
            {/* main-heading */}
            <div className="space-y-4 text-sandstone text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl leading-tight">
                <span className="block lg:text-left">
                  Helping you <br className="hidden lg:block md:block" />
                  Achieve Optimal <br className="hidden lg:block" />
                  Wellbeing
                </span>
              </h1>
              <p className="text-sm text-sandstone/80">
                Expert physiotherapy care tailored to your needs. Get back to
                doing what you love with our evidence-based treatments.
              </p>
            </div>

            {/* links */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-center justify-center lg:justify-start text-sm">
              <a
                href="#booking"
                className="uppercase font-medium text-xs bg-sandstone text-white hover:bg-white hover:text-sandstone px-8 py-3 rounded-full duration-200 flex items-center justify-center gap-2 "
              >
                <span>Book Appointment</span>
                <MoveRight className="w-4 h-4" />
              </a>
              <span className="hidden sm:block border-l border-sandstone/50 h-12"></span>
              <div className="text-sandstone">
                <div className="uppercase font-semibold text-xs">
                  Give us a call:
                </div>
                <div className="text-lg"> 076 123 45 67</div>
              </div>
            </div>
          </div>

          {/* right Content - overlay image */}
          <div className="relative block">
            <div className="relative mx-auto w-full h-[50vh] md:w-5/5 lg:w-4/5 md:rounded-2xl rounded-t-full overflow-hidden -mb-20 z-10">
              <img
                src="https://images.pexels.com/photos/5793886/pexels-photo-5793886.jpeg?_gl=1*zmg8wl*_ga*MTE1NTcwMTQwLjE3NTU4ODU3NjQ.*_ga_8JE65Q40S6*czE3NTgwMTI1MDMkbzMkZzEkdDE3NTgwMTMyMDIkajQyJGwwJGgw"
                alt="Physiotherapist"
                className="w-full h-full object-cover object-[25%_45%] rounded-b-2xl lg:rounded-t-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

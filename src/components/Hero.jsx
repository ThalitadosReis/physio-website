import { MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-white lg:rounded-3xl lg:mx-6 mt-16"
    >
      <div className="relative max-w-7xl mx-auto px-6 p-8 font-secondary">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left-content */}
          <div className="space-y-6">
            {/* main-heading */}
            <div className="space-y-4 text-sandstone text-center lg:text-left">
              <h1 className="font-primary text-4xl lg:text-6xl leading-tight">
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
            <div className="flex flex-col sm:flex-row gap-8 items-center justify-center lg:justify-start">
              <a
                href="#booking"
                className="uppercase tracking-widest w-fit text-xs bg-sandstone text-white hover:bg-vanilla/40 hover:text-sandstone px-12 py-4 rounded-full duration-200 flex items-center justify-center gap-2"
              >
                <span>Book Appointment</span>
                <MoveRight className="w-4 h-4" />
              </a>
              <span className="hidden sm:block border-l border-sandstone/50 h-12"></span>
              <div className="text-sandstone">
                <div className="uppercase font-extrabold text-xs">
                  Give us a call:
                </div>
                <div className="text-lg"> 076 123 45 67</div>
              </div>
            </div>
          </div>

          {/* right-content - overlay image */}
          <div className="relative block">
            <div className="relative mx-auto w-full h-[35vh] lg:h-[45vh] md:rounded-2xl rounded-t-full overflow-hidden -mb-20 z-10">
              <img
                src="https://images.pexels.com/photos/5793681/pexels-photo-5793681.jpeg?_gl=1*cwxc9w*_ga*MTE1NTcwMTQwLjE3NTU4ODU3NjQ.*_ga_8JE65Q40S6*czE3NTgwNTA5MTUkbzckZzEkdDE3NTgwNTA5MTYkajU5JGwwJGgw"
                alt="Physiotherapist"
                className="w-full h-full object-cover object-[25%_30%] md:object-[25%_35%] rounded-b-2xl lg:rounded-t-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

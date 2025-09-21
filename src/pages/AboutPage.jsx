import { MoveRight } from "lucide-react";

export default function AboutPage({ openBookingModal }) {
  return (
    <div className="pt-16">
      {/* team section */}
      <section className="bg-vanilla/20 py-20 lg:pb-0 relative">
        <div className="max-w-7xl mx-auto px-6 font-secondary">
          {/* header */}
          <div className="mb-8 lg:mb-0">
            <div className="flex flex-col justify-center items-center">
              <img src="/logo.png" alt="Logo" className="h-12" />
              <h3 className="uppercase text-sandstone tracking-widest text-xs mt-2">
                Meet Your Practitioner
              </h3>
              <h1 className="text-center font-primary text-sandstone text-3xl md:text-4xl lg:text-5xl mt-4">
                Expert Care <br className="sm:hidden" />
                You Can Trust
              </h1>
              <h2 className="max-w-4xl text-sandstone/80 text-center md:text-lg lg:text-xl mt-2">
                Experience comprehensive, personalized healthcare with a
                practitioner who takes the time to understand your unique needs.
              </h2>
            </div>
          </div>

          {/* main-content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">
            {/* left-profile */}
            <div className="relative block">
              <div className="w-full h-[30vh] lg:h-[45vh] rounded-tr-[20vw] overflow-hidden lg:transform lg:translate-y-10 lg:z-10">
                <img
                  src="https://images.pexels.com/photos/5793894/pexels-photo-5793894.jpeg?_gl=1*r16md7*_ga*MTE1NTcwMTQwLjE3NTU4ODU3NjQ.*_ga_8JE65Q40S6*czE3NTgwMzc4NTckbzQkZzEkdDE3NTgwMzc4ODAkajM3JGwwJGgw"
                  alt="Physiotherapist"
                  className="w-full h-full object-cover object-[25%_20%] lg:object-[25%_35%] rounded-2xl"
                />
              </div>
            </div>

            {/* right-content */}
            <div className="space-y-6">
              <div className="font-primary">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-sandstone">
                  Jane Doe
                </h1>
                <h2 className="text-xl text-vanilla">Physiotherapist</h2>
              </div>

              <div className="space-y-6 text-sandstone/80 text-justify">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
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
            </div>
          </div>
        </div>
      </section>

      {/* values section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 font-secondary">
          {/* header */}
          <div className="mb-8">
            <div className="flex flex-col justify-center items-center text-center">
              <h1 className="font-primary text-sandstone text-3xl md:text-4xl lg:text-5xl">
                Our Values
              </h1>
              <h2 className="max-w-4xl text-sandstone/80 text-center text-lg lg:text-xl mt-2">
                The principles that guide everything we do at Physio+
              </h2>
            </div>
          </div>

          {/* values grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl">
              <h3 className="font-primary text-sandstone text-xl mb-2">
                Lorem Ipsum Dolor
              </h3>
              <p className="text-sm text-sandstone/80 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <h3 className="font-primary text-sandstone text-xl mb-2">
                Consectetur Adipiscing
              </h3>
              <p className="text-sm text-sandstone/80 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl space-y-4">
              <h3 className="font-primary text-sandstone text-xl mb-2">
                Sed Do Eiusmod
              </h3>
              <p className="text-sm text-sandstone/80 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl space-y-4">
              <h3 className="font-primary text-sandstone text-xl mb-2">
                Tempor Incididunt
              </h3>
              <p className="text-sm text-sandstone/80 leading-relaxed">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* mission section */}
      <section className="bg-vanilla/20 py-20">
        <div className="max-w-7xl mx-auto px-6 font-secondary">
          <div className="space-y-6 mx-auto flex flex-col items-center">
            <h1 className="font-primary text-sandstone text-center text-3xl md:text-4xl lg:text-5xl">
              Our Mission
            </h1>
            <h2 className="max-w-4xl text-sandstone/80 text-center text-lg lg:text-xl mt-2">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </h2>
            <button
              onClick={openBookingModal}
              className="flex items-center justify-center uppercase tracking-widest px-8 py-3 rounded-full text-xs gap-2 border border-transparent bg-sandstone text-white hover:bg-transparent hover:text-sandstone hover:border-sandstone/50 duration-200"
            >
              <span>Start Your Journey</span>
              <MoveRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

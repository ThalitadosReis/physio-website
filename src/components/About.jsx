import { MoveRight } from "lucide-react";
import React from "react";

export default function About() {
  return (
    <section id="about" className="py-25">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 font-secondary">
        {/* header */}
        <div className="space-y-15 mb-20">
          <div className="flex flex-col justify-center items-center mt-16">
            <img
              src={
                "https://res.cloudinary.com/douen1dwv/image/upload/v1758035273/default/lotus_wrov9l.png"
              }
              alt="Logo"
              className="h-12"
            />
            <h3 className="uppercase text-sandstone tracking-widest text-xs mt-2">
              Welcome to Physio+
            </h3>
            <p className="max-w-4xl text-sandstone text-center text-2xl mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        {/* main-content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* left-profile */}
          <div className="relative block">
            <div className="relative mx-auto w-full h-[25vh] lg:h-[45vh] rounded-tr-[20vw] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5793894/pexels-photo-5793894.jpeg?_gl=1*r16md7*_ga*MTE1NTcwMTQwLjE3NTU4ODU3NjQ.*_ga_8JE65Q40S6*czE3NTgwMzc4NTckbzQkZzEkdDE3NTgwMzc4ODAkajM3JGwwJGgw"
                alt="Physiotherapist"
                className="w-full h-full object-cover object-[25%_20%] lg:object-[25%_35%] rounded-2xl"
              />
            </div>
          </div>

          {/* right-content */}
          <div className="space-y-8">
            <h2 className="text-2xl font-primary text-vanilla">Meet Jane Doe</h2>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-primary font-bold text-sandstone">
              Let’s restore, relax & rebalance your body
            </h1>

            <p className="text-sandstone/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <a
              href="#about"
              className="uppercase tracking-widest w-fit text-xs border border-transparent bg-vanilla/50 text-white hover:bg-porcelain hover:text-sandstone hover:border-sandstone/50 px-8 py-3 rounded-full duration-200 flex items-center justify-center gap-2"
            >
              <span>Learn more</span>
              <MoveRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

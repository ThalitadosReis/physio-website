import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About({ setNavbarPage }) {
  return (
    <section id="about" className="pt-20">
      <div className="max-w-7xl mx-auto px-6 font-secondary">
        {/* header */}
        <div className="mb-8">
          <div className="flex flex-col justify-center items-center">
            <img src={"/logo.png"} alt="Logo" className="h-12" />
            <h3 className="uppercase text-sandstone tracking-widest text-xs mt-2">
              Welcome to Physio+
            </h3>
            <h2 className="max-w-4xl text-sandstone/80 text-center md:text-lg lg:text-xl mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
          </div>
        </div>

        {/* main-content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* left-profile */}
          <div className="relative block">
            <div className="w-full h-[30vh] lg:h-[45vh] rounded-tr-[20vw] overflow-hidden">
              <img
                src={
                  "https://images.pexels.com/photos/5793894/pexels-photo-5793894.jpeg?_gl=1*r16md7*_ga*MTE1NTcwMTQwLjE3NTU4ODU3NjQ.*_ga_8JE65Q40S6*czE3NTgwMzc4NTckbzQkZzEkdDE3NTgwMzc4ODAkajM3JGwwJGgw"
                }
                alt="Physiotherapist"
                className="w-full h-full object-cover object-[25%_20%] lg:object-[25%_35%] rounded-2xl"
              />
            </div>
          </div>

          {/* right-content */}
          <div className="space-y-6">
            <h2 className="text-2xl font-primary text-vanilla">
              Meet Jane Doe
            </h2>
            <h1 className="font-primary text-sandstone text-3xl md:text-4xl lg:text-5xl mt-4">
              Let’s restore, relax <br className="hidden lg:block md:block" />&
              rebalance your body
            </h1>

            <div className="space-y-6 text-sandstone/80 text-justify">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>

            <Link
              to="/about"
              onClick={() => setNavbarPage && setNavbarPage("about")}
              className="uppercase tracking-widest w-fit text-xs border border-transparent bg-vanilla/50 text-white hover:bg-porcelain hover:text-sandstone hover:border-sandstone/50 px-8 py-3 rounded-full duration-200 flex items-center justify-center gap-2"
            >
              <span>Learn more</span>
              <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

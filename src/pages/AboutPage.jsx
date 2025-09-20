import { MoveRight } from "lucide-react";

export default function AboutPage({ openBookingModal }) {
  const values = [
    {
      title: "Personalized Care",
      description:
        "Every treatment plan is tailored to your specific needs and goals, ensuring the best possible outcomes for your recovery.",
    },
    {
      title: "Holistic Approach",
      description:
        "We don't just treat symptoms - we address the root cause and focus on your overall well-being and long-term health.",
    },
    {
      title: "Evidence-Based Treatment",
      description:
        "We use the latest research and proven techniques to provide effective, safe, and reliable physiotherapy services.",
    },

    {
      title: "Continuous Support",
      description:
        "Our commitment to your health extends beyond appointments with ongoing guidance and support throughout your journey.",
    },
  ];

  return (
    <div className="pt-16">
      {/* team section */}
      <section className="bg-vanilla/20 py-20 lg:py-0 lg:pt-20 relative">
        <div className="max-w-7xl mx-auto px-6 font-secondary">
          {/* header */}
          <div className="space-y-15 mb-8 lg:mb-0">
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://res.cloudinary.com/douen1dwv/image/upload/v1758047929/default/lotus_2_zntprp.png"
                alt="Logo"
                className="h-12"
              />
              <h3 className="uppercase text-sandstone tracking-widest text-xs mt-2">
                Meet Our Team
              </h3>
              <h1 className="text-center font-primary text-sandstone text-3xl md:text-4xl lg:text-5xl mt-6">
                Expert Care You Can Trust
              </h1>
              <p className="max-w-4xl text-sandstone/80 text-center text-lg lg:text-xl mt-2">
                Our team of qualified professionals brings years of experience
                and genuine care to every treatment session.
              </p>
            </div>
          </div>

          {/* main-content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">
            {/* left-profile */}
            <div className="relative block">
              <div className="relative mx-auto w-full h-[35vh] lg:h-[50vh] rounded-tr-[20vw] overflow-hidden lg:transform lg:translate-y-15 lg:z-10">
                <img
                  src="https://images.pexels.com/photos/5793894/pexels-photo-5793894.jpeg?_gl=1*r16md7*_ga*MTE1NTcwMTQwLjE3NTU4ODU3NjQ.*_ga_8JE65Q40S6*czE3NTgwMzc4NTckbzQkZzEkdDE3NTgwMzc4ODAkajM3JGwwJGgw"
                  alt="Jane Doe - Lead Physiotherapist"
                  className="w-full h-full object-cover object-[25%_20%] lg:object-[25%_35%] rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* right-content */}
            <div className="space-y-4">
              <h2 className="text-2xl font-primary text-vanilla">
                Lead Physiotherapist
              </h2>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-primary font-bold text-sandstone">
                Jane Doe, MSc, RPT
              </h1>

              <div className="space-y-4 text-sandstone/80">
                <p>
                  With over 10 years of experience in physiotherapy, Jane
                  specializes in musculoskeletal rehabilitation, sports
                  injuries, and chronic pain management. She holds a Master's
                  degree in Physiotherapy from the University of Health Sciences
                  and is a registered physiotherapist.
                </p>
                <p>
                  Jane's approach combines evidence-based treatment methods with
                  a deep understanding of each patient's unique needs. She
                  believes in empowering her patients through education and
                  personalized care plans that promote long-term wellness.
                </p>
                <p>
                  When she's not helping patients recover, Jane enjoys hiking,
                  yoga, and staying up-to-date with the latest advances in
                  physiotherapy research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* values section */}
      <section className="py-20 lg:mt-16">
        <div className="max-w-7xl mx-auto px-6 font-secondary">
          {/* header */}
          <div className="space-y-15 mb-10">
            <div className="flex flex-col justify-center items-center text-center">
              <h1 className="font-primary text-sandstone text-3xl md:text-4xl lg:text-5xl mt-6">
                Our Values
              </h1>
              <p className="max-w-4xl text-sandstone/80 text-center text-lg lg:text-xl mt-2">
                The principles that guide everything we do at Physio+
              </p>
            </div>
          </div>

          {/* values grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl space-y-4">
                <h3 className="font-primary text-sandstone text-xl mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-sandstone/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* mission section */}
      <section className="bg-vanilla/20 py-20">
        <div className="max-w-7xl mx-auto px-6 font-secondary">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-primary text-sandstone text-3xl md:text-4xl lg:text-5xl mt-6">
              Our Mission
            </h1>
            <p className="max-w-4xl text-sandstone/80 text-center text-lg lg:text-xl mt-2">
              At Physio+, our mission is to provide exceptional physiotherapy
              care that empowers individuals to overcome physical challenges,
              restore function, and achieve their optimal quality of life. We
              are committed to delivering personalized, evidence-based
              treatments in a supportive and healing environment.
            </p>
            <p className="text-sandstone/80 leading-relaxed">
              We believe that everyone deserves access to quality healthcare
              that not only treats symptoms but addresses the whole person.
              Through continuous education, compassionate care, and innovative
              treatment approaches, we strive to be the trusted partner in our
              patients' journey to wellness.
            </p>
            <button
              onClick={openBookingModal}
              className="inline-flex uppercase tracking-widest text-xs border border-transparent bg-sandstone text-white hover:bg-porcelain hover:text-sandstone hover:border-sandstone/50 px-8 py-3 rounded-full duration-200 items-center justify-center gap-2"
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

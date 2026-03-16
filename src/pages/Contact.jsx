import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CaretDownIcon } from "@phosphor-icons/react";
import { practitionerPortraitImage } from "../lib/images";
import Reveal from "../components/Reveal";
import BookingForm from "../components/BookingForm";
import PageHeader from "../components/ui/PageHeader";
import SectionIntro from "../components/ui/SectionIntro";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we work with most major insurance providers and offer direct billing for your convenience. Please contact us to verify your coverage.",
  },
  {
    question: "How long is a typical session?",
    answer:
      "Most treatment sessions are between 45-60 minutes, though initial consultations may take up to 90 minutes for a comprehensive assessment.",
  },
  {
    question: "Do I need a referral?",
    answer:
      "While referrals are not always required, having one from your doctor can help us better understand your condition and may be needed for insurance coverage.",
  },
];

export default function Contact() {
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState(0);
  const prefilledService =
    new URLSearchParams(location.search).get("service") || "";

  return (
    <div className="pt-20">
      <section className="bg-mauve-50 py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <PageHeader
            title="Book an Appointment"
            description="Select your treatment, preferred date, and time. We'll confirm your booking and next steps with you."
          />

          <Reveal delay={0.1}>
            <BookingForm
              prefilledService={prefilledService}
              submitLabel="Send Appointment Request"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-mauve-100 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionIntro
            eyebrow="Frequently Asked Questions"
            title="Quick answers before you book"
            description="A few practical details about appointments, insurance, and what to expect."
          />

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <Reveal className="relative block" direction="right">
              <div className="w-full h-[240px] sm:h-[360px] lg:h-[420px] rounded-tr-[20vw] overflow-hidden">
                <img
                  src={practitionerPortraitImage.src}
                  alt={practitionerPortraitImage.alt}
                  className="w-full h-full object-cover object-[25%_20%] lg:object-[25%_35%] rounded-lg"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                />
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div
                      key={faq.question}
                      className="overflow-hidden rounded-lg border border-mauve-200 bg-white"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300 hover:bg-mauve-50"
                      >
                        <span className="font-display text-xl md:text-2xl leading-tight text-mauve-800">
                          {faq.question}
                        </span>
                        <CaretDownIcon
                          size={18}
                          className={`shrink-0 text-mauve-600 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`grid transition-all duration-300 ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="border-t border-mauve-200 px-6 py-5 font-ui text-base font-light text-mauve-800">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

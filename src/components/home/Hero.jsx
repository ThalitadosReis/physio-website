import { Link } from "react-router-dom";
import { ArrowDownIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { heroImage } from "../../lib/images";
import Reveal from "../Reveal";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-mauve-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center lg:flex-row gap-8 lg:gap-16">
          <Reveal direction="left" className="w-full lg:flex-1">
            <div className="mb-8 max-w-xl space-y-5 text-center lg:text-left ">
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-mauve-800">
                Helping You Achieve Optimal Wellbeing
              </h1>
              <p className="mx-auto text-base md:text-lg text-mauve-800/80">
                Expert physiotherapy care tailored to your needs. Get back to
                doing what you love with our evidence-based treatments.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <Button as={Link} to="/contact" variant="primary" showIcon>
                Book an Appointment
              </Button>
            </div>
          </Reveal>

          <Reveal
            className="relative hidden w-full lg:block lg:flex-1"
            direction="right"
            delay={0.1}
          >
            <div className="w-full h-[600px] rounded-t-full overflow-hidden">
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="w-full h-full object-cover object-[25%_35%] rounded-lg"
                loading="eager"
                decoding="async"
                fetchpriority="high"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute flex bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-ui text-[9px] uppercase tracking-[0.3em] text-mauve-500">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ArrowDownIcon size={14} className="text-mauve-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}

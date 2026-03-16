import {
  ArrowUpIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import Logo from "./ui/Logo";
import { ArrowUpRight } from "lucide-react";

const openingHours = [
  { day: "Monday - Thursday", time: "08:00 - 18:00" },
  { day: "Friday", time: "08:00 - 17:00" },
  { day: "Saturday", time: "By appointment" },
  { day: "Sunday", time: "Closed" },
];

export default function Footer() {
  return (
    <footer className="bg-mauve-100">
      <div className="w-full h-64 grayscale opacity-80">
        <iframe
          title="Physio+ Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.7321621588594!2d8.537676776380067!3d47.3781457711698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a08cc0e6e41%3A0xf5c698b65f8c52a7!2sZurich%20HB!5e0!3m2!1sen!2sch!4v1758055156998!5m2!1sen!2sch"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 px-6 py-16 md:grid-cols-3 lg:px-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3 leading-none select-none">
            <Logo size="small" className="h-10 w-auto" />
            <span className="flex flex-col">
              <span className="font-display text-2xl font-light tracking-[0.15em] text-mauve-900 uppercase">
                Physio+
              </span>
              <span className="font-ui text-[10px] font-light tracking-[0.35em] text-mauve-500 uppercase">
                Physiotherapy & Osteopathy
              </span>
            </span>
          </div>

          <p className="text-sm font-ui font-light leading-relaxed text-mauve-800">
            Expert physiotherapy care focused on recovery, mobility, and
            long-term wellbeing.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-ui text-sm uppercase tracking-[0.2em] text-mauve-500">
            Opening Hours
          </h4>
          <ul className="space-y-3">
            {openingHours.map((item) => (
              <li
                key={item.day}
                className="flex justify-between gap-4 text-sm font-ui font-light"
              >
                <span className="text-mauve-800">{item.day}</span>
                <span className="text-right text-mauve-800/60">
                  {item.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-ui text-sm uppercase tracking-[0.2em] text-mauve-500">
            Contact
          </h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm font-ui font-light text-mauve-700">
              <MapPinIcon size={16} className="shrink-0 text-mauve-500" />
              <span>Bahnhofstrasse 1, 8001 Zurich, Switzerland</span>
            </li>
            <li className="flex items-center gap-3 text-sm font-ui font-light text-mauve-700">
              <PhoneIcon size={16} className="shrink-0 text-mauve-500" />
              <a
                href="tel:+41761234567"
                className="transition-colors hover:text-mauve-500"
              >
                +41 76 123 45 67
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm font-ui font-light text-mauve-700">
              <EnvelopeIcon size={16} className="shrink-0 text-mauve-500" />
              <a
                href="mailto:physioplus@example.com"
                className="transition-colors hover:text-mauve-500"
              >
                physioplus@example.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-mauve-200 px-6 py-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-2 items-center md:grid-cols-2">
          <p className="text-[13px] font-ui text-mauve-500">
            © {new Date().getFullYear()} Physio+. All rights reserved.
          </p>
          <p className="text-[13px] font-ui text-mauve-500 md:text-right">
            <a
              href="https://thalitadosreis.ch/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-mauve-700"
            >
              Made by Thalita dos Reis
              <ArrowUpRight
                size={14}
                className="inline-block ml-1 text-mauve-500"
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRightIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import Button from "./ui/Button";
import Logo from "./ui/Logo";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-mauve-50/95 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center gap-3 leading-none select-none">
              <Logo size="small" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-light tracking-[0.15em] text-mauve-800 uppercase">
                  Physio+
                </span>
                <span className="font-ui text-[9px] lg:text-[10px] font-light tracking-[0.35em] text-mauve-500 uppercase">
                  Physiotherapy & Osteopathy
                </span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[11px] tracking-[0.2em] uppercase font-ui transition-colors duration-300 ${
                  isActive(link.to)
                    ? "text-mauve-800"
                    : "text-mauve-500 hover:text-mauve-400"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Button as={Link} to="/contact" variant="secondary">
              Contact
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden text-mauve-500 hover:text-mauve-800 transition-colors duration-300"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <XIcon size={22} /> : <ListIcon size={22} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-mauve-900/30 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-50 flex flex-col bg-mauve-50 md:hidden"
            >
              <div className="flex h-20 items-center justify-between border-b border-mauve-200 px-6">
                <div className="flex items-center gap-3 leading-none select-none">
                  <Logo size="small" className="h-10 w-auto" />
                  <div className="flex flex-col">
                    <span className="font-display text-2xl font-light tracking-[0.15em] text-mauve-800 uppercase">
                      Physio+
                    </span>
                    <span className="font-ui text-[9px] lg:text-[10px] font-light tracking-[0.35em] text-mauve-500 uppercase">
                      Physiotherapy & Osteopathy
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-mauve-500 transition-colors duration-300 hover:text-mauve-800"
                  aria-label="Close menu"
                >
                  <XIcon size={22} />
                </button>
              </div>

              <nav className="flex flex-1 flex-col justify-center px-6">
                {[...NAV_LINKS, { to: "/contact", label: "Contact" }].map(
                  (link, index) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.08 + index * 0.07,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        to={link.to}
                        className={`group flex items-center justify-between border-b border-mauve-200 py-5 ${
                          isActive(link.to)
                            ? "text-mauve-800"
                            : "text-mauve-600 hover:text-mauve-400"
                        }`}
                      >
                        <span className="font-display text-3xl font-light">
                          {link.label}
                        </span>
                        <ArrowRightIcon
                          size={18}
                          className="text-mauve-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-mauve-400"
                        />
                      </Link>
                    </motion.div>
                  ),
                )}
              </nav>

              <div className="border-t border-mauve-200 px-6 py-6">
                <p className="text-[10px] tracking-[0.2em] uppercase font-ui text-mauve-500">
                  Get in touch
                </p>
                <a
                  href="mailto:physioplus@example.com"
                  className="text-sm text-mauve-800 transition-colors duration-300 hover:text-mauve-600"
                >
                  physioplus@example.com
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

import Reveal from "../Reveal";
import Logo from "./Logo";

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  showLogo = false,
}) {
  const alignClasses =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  return (
    <Reveal className={className}>
      <div className={`mb-8 lg:mb-16 flex flex-col gap-3 ${alignClasses}`}>
        {showLogo ? <Logo size="medium" className="h-12 w-auto" /> : null}
        {eyebrow ? (
          <span className="text-[11px] uppercase tracking-[0.32em] text-mauve-400">
            {eyebrow}
          </span>
        ) : null}
        {title ? (
          <h2 className="font-display text-mauve-900 text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>
        ) : null}
        {description ? (
          <p className="max-w-3xl text-mauve-700 md:text-lg">{description}</p>
        ) : null}
      </div>
    </Reveal>
  );
}

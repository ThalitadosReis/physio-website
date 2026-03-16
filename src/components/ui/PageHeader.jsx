import Reveal from "../Reveal";
import Logo from "./Logo";

export default function PageHeader({
  eyebrow,
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  showLogo = true,
}) {
  return (
    <Reveal className={className}>
      <div className="mb-8 flex flex-col items-center justify-center text-center">
        {showLogo ? <Logo size="medium" className="h-12 w-auto" /> : null}
        {eyebrow ? (
          <h3 className="mt-1 text-[11px] uppercase tracking-[0.16em] text-mauve-500">
            {eyebrow}
          </h3>
        ) : null}
        <h1
          className={`mt-4 font-display text-[clamp(30px,4.5vw,52px)] leading-[1] text-mauve-900 ${titleClassName}`.trim()}
        >
          {title}
        </h1>
        {description ? (
          <p
            className={`mt-4 max-w-3xl font-ui text-sm md:text-base font-light text-mauve-800 ${descriptionClassName}`.trim()}
          >
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}

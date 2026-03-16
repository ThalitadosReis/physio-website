import { ArrowRightIcon } from "@phosphor-icons/react";

export default function Button({
  as = "button",
  variant = "primary",
  showIcon = false,
  className = "",
  children,
  ...props
}) {
  const Component = as;
  const baseClasses =
    "group inline-flex w-fit items-center gap-3 rounded-full px-8 py-3.5 font-ui text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 [&>svg:last-child]:transition-transform [&>svg:last-child]:duration-300 hover:[&>svg:last-child]:translate-x-1";

  const variants = {
    primary:
      "bg-mauve-800 text-white border border-transparent hover:bg-mauve-700",
    secondary:
      "bg-mauve-100 text-mauve-800 border border-mauve-200 hover:bg-mauve-300",
    outline:
      "bg-transparent border border-mauve-300 text-mauve-700 hover:border-mauve-600",
  };

  return (
    <Component
      className={`${baseClasses} ${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
      {showIcon ? <ArrowRightIcon size={14} /> : null}
    </Component>
  );
}

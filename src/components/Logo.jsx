import { logoImage } from "../lib/images";

export default function Logo({ size = "medium", className = "" }) {
  const sizeClasses = {
    small: "h-8",
    medium: "h-10",
    large: "h-16",
  };

  return (
    <img
      src={logoImage.src}
      alt={logoImage.alt}
      className={`${sizeClasses[size]} ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}

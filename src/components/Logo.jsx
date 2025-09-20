export default function Logo({ size = "medium", className = "" }) {
  const sizeClasses = {
    small: "h-8",
    medium: "h-10",
    large: "h-16"
  };

  return (
    <img
      src="/logo.png"
      alt="Physio+ Logo"
      className={`${sizeClasses[size]} ${className}`}
      loading="lazy"
    />
  );
}
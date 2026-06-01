/** Full-width header/footer inner — edge padding only, no max-width side gaps */

export default function ChromeContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`chrome-container ${className}`.trim()}>{children}</div>;
}

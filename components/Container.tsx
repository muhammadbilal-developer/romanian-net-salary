/** Site-wide content width: max 1440px, centered */

export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`site-container ${className}`.trim()}>{children}</div>;
}

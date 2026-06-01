import Link from "next/link";
import JsonLd from "./JsonLd";
import Container from "./Container";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";

export default function LegalPage({
  title,
  path,
  children,
}: {
  title: string;
  path: string;
  children: React.ReactNode;
}) {
  const url = `${SITE.url}${path}`;

  return (
    <article className="section-pad bg-section-b">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: title, url },
        ])}
      />
      <Container>
        <div className="legal-prose mx-auto max-w-3xl">
          <nav className="mb-8 text-sm text-text-secondary" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">{title}</span>
          </nav>
          {children}
        </div>
      </Container>
    </article>
  );
}

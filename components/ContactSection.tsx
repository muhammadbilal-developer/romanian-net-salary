import Link from "next/link";
import Container from "./Container";
import ContactForm from "./ContactForm";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const contactItems = [
  {
    icon: FiMapPin,
    title: "Our location",
    lines: ["Romania", "Online calculator & support"],
  },
  {
    icon: FiPhone,
    title: "Phone",
    lines: ["Mon–Fri, 9:00–17:00 EET", "Message us — we reply by email"],
  },
  {
    icon: FiMail,
    title: "Email address",
    lines: [SITE.email],
  },
];

function DotGrid({ className }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none grid grid-cols-3 gap-1.5 ${className ?? ""}`}
      aria-hidden="true"
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-slate-400/70" />
      ))}
    </div>
  );
}

export default function ContactSection() {
  const url = `${SITE.url}/contact`;

  return (
    <article className="bg-white section-pad min-h-[calc(100svh-var(--header-height))]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Contact", url },
        ])}
      />

      <Container>
        <nav className="mb-8 text-sm text-text-secondary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text-primary">Contact</span>
        </nav>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left — heading & contact details */}
          <div className="lg:pt-4">
            <p className="text-sm font-bold uppercase tracking-wide text-primary">Contact us</p>
            <h1 className="mt-2 text-3xl font-bold text-text-primary sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Get in touch with us
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              Questions about the calculator, 2026 tax rules, or feedback? Send a message and
              we&apos;ll get back to you within 1–2 business days.
            </p>

            <ul className="mt-10 space-y-8">
              {contactItems.map(({ icon: Icon, title, lines }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-button text-white shadow-md">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-bold text-text-primary">{title}</p>
                    {lines.map((line) => (
                      <p key={line} className="mt-0.5 text-sm text-text-secondary">
                        {line}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form card with decorative accents */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none lg:mx-0">
            <DotGrid className="absolute -right-2 top-6 z-0 hidden sm:grid" />
            <DotGrid className="absolute -left-3 bottom-16 z-0 hidden sm:grid" />

            <div
              className="pointer-events-none absolute -right-4 -top-4 z-0 h-28 w-28 rounded-full bg-secondary/90 sm:h-32 sm:w-32"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-2 -top-2 z-0 h-20 w-20 rounded-full bg-secondary/50 blur-sm"
              aria-hidden="true"
            />

            <div className="relative z-10 rounded-2xl bg-button p-8 shadow-2xl sm:p-10">
              <ContactForm variant="card" />
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}

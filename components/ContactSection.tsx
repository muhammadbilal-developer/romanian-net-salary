import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import ContactForm from "./ContactForm";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import { SITE_IMAGES } from "@/lib/site-images";
import { FiMail, FiClock, FiMessageCircle } from "react-icons/fi";

const contactImage = SITE_IMAGES.contact;

const perks = [
  {
    icon: FiClock,
    title: "Quick response",
    text: "We reply within 1–2 business days.",
  },
  {
    icon: FiMessageCircle,
    title: "Calculator help",
    text: "Questions about CAS, CASS, or 2026 rules.",
  },
  {
    icon: FiMail,
    title: "Direct email",
    text: SITE.email,
  },
];

export default function ContactSection() {
  const url = `${SITE.url}/contact`;

  return (
    <article className="bg-section-a min-h-[calc(100svh-var(--header-height))]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Contact", url },
        ])}
      />

      <div className="grid lg:min-h-[calc(100svh-var(--header-height))] lg:grid-cols-2">
        {/* Left — image */}
        <div className="relative min-h-[16rem] sm:min-h-[20rem] lg:min-h-full">
          <Image
            src={contactImage.src}
            alt={contactImage.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-section-a/20" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:hidden">
            <p className="text-sm font-medium text-white/90">Romanian Net Salary Calculator</p>
            <p className="text-2xl font-bold text-white">We&apos;re here to help</p>
          </div>
        </div>

        {/* Right — form */}
        <div className="flex items-center bg-section-b py-12 sm:py-16 lg:py-0">
          <Container className="w-full lg:max-w-none lg:pl-10 lg:pr-12 xl:pl-14 xl:pr-16">
            <nav className="mb-6 text-sm text-text-secondary" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-text-primary">Contact</span>
            </nav>

            <div className="section-accent-bar !mx-0" aria-hidden="true" />

            <h1 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
              Contact us
            </h1>
            <p className="mt-3 max-w-md text-text-secondary">
              Questions about the calculator, outdated tax rules, or feedback? Send a message —
              we&apos;d love to hear from you.
            </p>

            <ul className="mt-8 space-y-4">
              {perks.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-text-primary">{title}</span>
                    <span className="text-sm text-text-secondary">{text}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <ContactForm />
            </div>
          </Container>
        </div>
      </div>
    </article>
  );
}

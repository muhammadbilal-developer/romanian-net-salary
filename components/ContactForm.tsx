"use client";

import { useState, useTransition } from "react";
import { motion } from "motion/react";
import { FiCheckCircle } from "react-icons/fi";

type ContactFormProps = {
  variant?: "default" | "card";
};

export default function ContactForm({ variant = "default" }: ContactFormProps) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const isCard = variant === "card";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) return;

    startTransition(async () => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: data.get("name"),
            email: data.get("email"),
            phone: data.get("phone"),
            subject: data.get("subject") || "Contact form inquiry",
            message: data.get("message"),
          }),
        });
        const json = await res.json();
        if (!res.ok) {
          setError(json.error ?? "Something went wrong.");
          return;
        }
        setSuccess(true);
        form.reset();
      } catch {
        setError("Network error. Please try again.");
      }
    });
  }

  const inputClass = isCard
    ? "w-full rounded-lg border-0 bg-white px-4 py-3.5 text-sm text-text-primary placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary/80"
    : "input-field";

  const labelClass = isCard
    ? "sr-only"
    : "mb-2 block text-sm font-medium text-text-primary";

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className={
          isCard
            ? "flex flex-col items-center rounded-xl bg-white/95 p-8 text-center"
            : "calc-shell flex flex-col items-center p-10 text-center"
        }
      >
        <FiCheckCircle className="text-success" size={48} aria-hidden="true" />
        <h2 className="mt-4 text-xl font-semibold text-text-primary">Message sent</h2>
        <p className="mt-2 max-w-sm text-text-secondary">
          Thank you for reaching out. We respond within 1–2 business days.
        </p>
        <button
          type="button"
          className={isCard ? "btn-primary mt-6 w-full rounded-lg py-3.5" : "btn-primary mt-6"}
          onClick={() => setSuccess(false)}
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        isCard ? "relative space-y-4" : "relative calc-shell space-y-6 p-8 sm:p-10"
      }
      noValidate
    >
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {!isCard && (
        <>
          <div>
            <label htmlFor="name" className={labelClass}>
              Full name *
            </label>
            <input id="name" name="name" required className={inputClass} autoComplete="name" />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={isCard ? inputClass : `${inputClass} py-3.5`}
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="subject" className={labelClass}>
              Subject *
            </label>
            <input id="subject" name="subject" required className={isCard ? inputClass : `${inputClass} py-3.5`} />
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              Message * (min 20 characters)
            </label>
            <textarea
              id="message"
              name="message"
              required
              minLength={20}
              rows={6}
              className={isCard ? inputClass : `${inputClass} resize-y py-3.5`}
            />
          </div>
        </>
      )}

      {isCard && (
        <>
          <div>
            <label htmlFor="name" className={labelClass}>
              Your name
            </label>
            <input
              id="name"
              name="name"
              required
              className={inputClass}
              placeholder="Your Name"
              autoComplete="name"
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Your email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={inputClass}
              placeholder="Your Email"
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              Your phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className={inputClass}
              placeholder="Your Phone"
              autoComplete="tel"
            />
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              required
              minLength={20}
              rows={5}
              className={`${inputClass} resize-y`}
              placeholder="Your Message"
            />
          </div>
        </>
      )}

      {error && (
        <p className={`text-sm ${isCard ? "text-red-200" : "text-error"}`} role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        className={
          isCard
            ? "btn-primary w-full rounded-lg px-8 py-3.5 text-base text-white"
            : "btn-primary w-full px-8 py-3.5 text-base"
        }
        disabled={isPending}
      >
        {isPending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

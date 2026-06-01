"use client";

import { useState, useTransition } from "react";
import { motion } from "motion/react";
import { FiCheckCircle } from "react-icons/fi";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

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
            subject: data.get("subject"),
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

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="calc-shell flex flex-col items-center p-10 text-center"
      >
        <FiCheckCircle className="text-success" size={48} aria-hidden="true" />
        <h2 className="mt-4 text-xl font-semibold text-text-primary">Message sent</h2>
        <p className="mt-2 max-w-sm text-text-secondary">
          Thank you for reaching out. We respond within 1–2 business days.
        </p>
        <button
          type="button"
          className="btn-primary mt-6"
          onClick={() => setSuccess(false)}
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative calc-shell space-y-6 p-8 sm:p-10" noValidate>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-primary">
          Full name *
        </label>
        <input id="name" name="name" required className="input-field" autoComplete="name" />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-text-primary">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="input-field py-3.5"
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-text-primary">
          Subject *
        </label>
        <input id="subject" name="subject" required className="input-field py-3.5" />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-text-primary">
          Message * (min 20 characters)
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          rows={6}
          className="input-field resize-y py-3.5"
        />
      </div>

      {error && (
        <p className="text-sm text-error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="btn-primary w-full px-8 py-3.5 text-base" disabled={isPending}>
        {isPending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

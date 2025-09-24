'use client';

import { useState } from "react";

import type { Dictionary } from "@/lib/i18n/types";
import type { Language } from "@/lib/languages";

interface ContactFormProps {
  dictionary: Dictionary;
  lang: Language;
}

type FormState = "idle" | "submitting" | "success" | "error";

const SUCCESS_MESSAGES: Record<Language, string> = {
  en: "Thanks! We’ll reach out shortly.",
  es: "¡Gracias! Te contactaremos muy pronto.",
};

export function ContactForm({ dictionary, lang }: ContactFormProps) {
  const { formLabels } = dictionary.contact;
  const [status, setStatus] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [debugData, setDebugData] = useState<any | null>(null);
  const DEBUG = process.env.NEXT_PUBLIC_CONTACT_DEBUG === "true";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, debug: DEBUG }),
      });

      const debugBody = DEBUG ? await response.clone().json().catch(() => null) : null;

      if (!response.ok) {
        const body = (await response.json().catch(() => ({}))) as any;
        setError(body.message ?? "Something went wrong. Please try again.");
        if (DEBUG) setDebugData(debugBody?.debug ?? debugBody ?? body ?? { status: response.status });
        setStatus("error");
        return;
      }

      form.reset();
      if (DEBUG) setDebugData(debugBody?.debug ?? debugBody ?? { status: response.status });
      setStatus("success");
    } catch (err) {
      console.error(err);
      setError("Unable to send message. Please try again later.");
      setStatus("error");
    }
  }

  return (
    <form className="space-y-6 rounded-3xl border border-latte/40 bg-white/90 p-6 shadow-lg" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-mocha/70">
          <span>{formLabels.name}</span>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-2xl border border-latte/40 bg-cream/60 px-4 py-3 text-coffee focus:border-teal focus:outline-none"
          />
        </label>
        <label className="space-y-2 text-sm text-mocha/70">
          <span>{formLabels.email}</span>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-2xl border border-latte/40 bg-cream/60 px-4 py-3 text-coffee focus:border-teal focus:outline-none"
          />
        </label>
        <label className="space-y-2 text-sm text-mocha/70">
          <span>{formLabels.phone}</span>
          <input
            type="tel"
            name="phone"
            className="w-full rounded-2xl border border-latte/40 bg-cream/60 px-4 py-3 text-coffee focus:border-teal focus:outline-none"
          />
        </label>
        <label className="space-y-2 text-sm text-mocha/70">
          <span>{formLabels.eventDate}</span>
          <input
            type="date"
            name="eventDate"
            className="w-full rounded-2xl border border-latte/40 bg-cream/60 px-4 py-3 text-coffee focus:border-teal focus:outline-none"
          />
        </label>
        <label className="space-y-2 text-sm text-mocha/70">
          <span>{formLabels.guestCount}</span>
          <input
            type="number"
            name="guestCount"
            min="1"
            className="w-full rounded-2xl border border-latte/40 bg-cream/60 px-4 py-3 text-coffee focus:border-teal focus:outline-none"
          />
        </label>
        <label className="space-y-2 text-sm text-mocha/70">
          <span>{formLabels.eventDuration}</span>
          <input
            type="text"
            name="eventDuration"
            className="w-full rounded-2xl border border-latte/40 bg-cream/60 px-4 py-3 text-coffee focus:border-teal focus:outline-none"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm text-mocha/70">
        <span>{formLabels.venue}</span>
        <input
          type="text"
          name="venue"
          className="w-full rounded-2xl border border-latte/40 bg-cream/60 px-4 py-3 text-coffee focus:border-teal focus:outline-none"
        />
      </label>
      <label className="space-y-2 text-sm text-mocha/70">
        <span>{formLabels.serviceType}</span>
        <input
          type="text"
          name="serviceType"
          className="w-full rounded-2xl border border-latte/40 bg-cream/60 px-4 py-3 text-coffee focus:border-teal focus:outline-none"
        />
      </label>
      <label className="space-y-2 text-sm text-mocha/70">
        <span>{formLabels.addOns}</span>
        <input
          type="text"
          name="addOns"
          className="w-full rounded-2xl border border-latte/40 bg-cream/60 px-4 py-3 text-coffee focus:border-teal focus:outline-none"
        />
      </label>
      <label className="space-y-2 text-sm text-mocha/70">
        <span>{formLabels.notes}</span>
        <textarea
          name="notes"
          rows={4}
          className="w-full rounded-2xl border border-latte/40 bg-cream/60 px-4 py-3 text-coffee focus:border-teal focus:outline-none"
        />
      </label>
      <div className="space-y-3">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-teal px-6 py-3 text-sm font-semibold text-cream transition hover:bg-coffee disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? `${formLabels.submit}...` : formLabels.submit}
        </button>
        {status === "success" ? (
          <p className="text-sm font-semibold text-teal">{SUCCESS_MESSAGES[lang]}</p>
        ) : null}
        {status === "error" && error ? (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        ) : null}
      </div>
      {DEBUG && debugData ? (
        <pre className="whitespace-pre-wrap rounded-xl bg-cream/70 p-3 text-xs text-mocha/80 border border-latte/40">
          {JSON.stringify(debugData, null, 2)}
        </pre>
      ) : null}
    </form>
  );
}

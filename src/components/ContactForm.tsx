"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/dictionaries";

type Status = "idle" | "sending" | "success" | "error";

const endpoint = "https://api.web3forms.com/submit";

const field =
  "border-0 border-b border-[#4d3a3d] bg-transparent py-2.5 text-base normal-case tracking-normal text-neutral-200 outline-none focus:border-accent";
const label =
  "grid gap-1 text-xs uppercase tracking-[0.2em] text-muted rtl:tracking-normal rtl:text-sm";

export default function ContactForm({ dict }: { dict: Dictionary["form"] }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // فیلد مخفی ضد اسپم: ربات‌ها تیکش می‌زنن، آدم‌ها نه
    if (data.get("botcheck")) {
      setStatus("success");
      return;
    }

    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!key) {
      console.error("NEXT_PUBLIC_WEB3FORMS_KEY is missing");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const name = String(data.get("name") ?? "").trim();
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: key,
          subject: `New message from ${name}`,
          from_name: "Portfolio website",
          name,
          email: String(data.get("email") ?? "").trim(),
          message: String(data.get("message") ?? "").trim(),
        }),
      });
      const json = await res.json();
      setStatus(res.ok && json.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="self-start border border-accent/40 bg-white/[0.03] p-8"
      >
        <h2 className="mb-3 font-display text-3xl text-white rtl:leading-snug">
          {dict.successTitle}
        </h2>
        <p className="text-muted rtl:leading-loose">{dict.successText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <label className={label}>
        {dict.name}
        <input
          name="name"
          required
          maxLength={100}
          autoComplete="name"
          className={field}
        />
      </label>
      <label className={label}>
        {dict.email}
        <input
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          className={field}
        />
      </label>
      <label className={label}>
        {dict.message}
        <textarea
          name="message"
          required
          rows={5}
          maxLength={5000}
          className={field}
        />
      </label>

      {/* فیلد مخفی ضد اسپم */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {status === "error" && (
        <p role="alert" className="text-sm text-wine-light rtl:leading-loose">
          {dict.errorSend}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="justify-self-start border border-accent px-8 py-3.5 text-[11px] uppercase tracking-[0.25em] text-accent transition-colors hover:bg-accent hover:text-deep disabled:cursor-wait disabled:opacity-60 rtl:tracking-normal"
      >
        {status === "sending" ? dict.sending : dict.send}
      </button>
    </form>
  );
}
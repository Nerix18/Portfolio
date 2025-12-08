"use client";
import { IoSend } from "react-icons/io5";
import React, { useState } from "react";
import ScrollRevealSection from "./ScrollRevealSection";

type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

type ContactStatus = null | "idle" | "sending" | "sent" | "error";

type ContactResponse = {
  id?: string;
  message?: string;
  error?: string;
};

export default function Contact() {
  const [values, setValues] = useState<ContactFormValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<ContactStatus>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const raw = await res.text();
      let data: ContactResponse | null = null;
      try {
        data = raw ? (JSON.parse(raw) as ContactResponse) : null;
      } catch {
        // telo nie je JSON – nechávame data ako null
      }

      if (!res.ok) {
        const msg =
          data?.error ||
          data?.message ||
          `Request failed with status ${res.status}`;
        throw new Error(msg);
      }

      setStatus("sent");
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form submit error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="kontakt"
      className="relative isolate min-h-100vh w-full overflow-hidden px-4 sm:p-8 md:p-12 mt-20 -mb-4"
    >
      <div className="flex items-center justify-start md:justify-center py-20 px-0 md:pl-0">
        <ScrollRevealSection>
          <h1 className="text-3xl sm:text-4xl">KONTAKT</h1>
        </ScrollRevealSection>
      </div>

      {/* subtle vignette */}
      <div className="pointer-events-none absolute inset-0" />

      <div className="relative z-10 max-w-[1050px] my-8 items-center mx-auto">
        <ScrollRevealSection>
          <h1 className="mb-6 text-2xl font-light text-white sm:text-2xl">
            Napíš mi správu
          </h1>
        </ScrollRevealSection>

        <form onSubmit={onSubmit} className="grid gap-5 max-w-[1400px]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <ScrollRevealSection>
              <InputField
                label="Meno"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                autoComplete="given-name"
              />
            </ScrollRevealSection>

            <ScrollRevealSection>
              <InputField
                label="Priezvisko"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                autoComplete="family-name"
              />
            </ScrollRevealSection>

            <ScrollRevealSection>
              <InputField
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                autoComplete="email"
                className="md:col-auto"
                required
              />
            </ScrollRevealSection>

            <ScrollRevealSection>
              <InputField
                label="Tel.č."
                name="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </ScrollRevealSection>
          </div>

          <ScrollRevealSection>
            <TextareaField
              label="Správa"
              name="message"
              value={values.message}
              onChange={handleChange}
              rows={6}
              required
            />
          </ScrollRevealSection>

          <div className="mt-2 flex items-center gap-4">
            <ScrollRevealSection>
              <button
                type="submit"
                disabled={status === "sending"}
                aria-busy={status === "sending"}
                className="group text-white bg-linear-to-r from-[#89d104] to-[#d0ff00] hover:bg-linear-to-br focus:ring-4 focus:outline-none rounded-3xl px-3 py-2 text-center me-2 mb-26 cursor-pointer hover:scale-110 transition-all transform duration-700 border border-[#D0FF00] shadow-[0_0px_40px_#d0ff00]/50 flex items-center gap-2 lg:text-xl text-md font-light disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  boxShadow:
                    "0 10px 30px rgba(185,255,0,0.25), inset 0 1px 0 rgba(255,255,255,0.35)",
                }}
              >
                <span>
                  {status === "sending" ? "Odosielam…" : "Odoslať správu"}
                </span>
                <IoSend className="text-white text-2xl transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </ScrollRevealSection>

            {status === "sent" && (
              <p className="text-sm text-lime-300/90">
                Ďakujem! Správa bola odoslaná.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">
                Ups, niečo sa pokazilo. Skúste znova.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function InputField({
  label,
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
}) {
  return (
    <label className={`grid gap-2 ${className}`}>
      <span className="text-xs/5 text-white/70">{label}</span>
      <input
        {...props}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 backdrop-blur-sm transition focus:border-lime-300 focus:ring-2 focus:ring-lime-300"
      />
    </label>
  );
}

function TextareaField({
  label,
  className = "",
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  className?: string;
}) {
  return (
    <label className={`grid gap-2 ${className}`}>
      <span className="text-xs/5 text-white/70">{label}</span>
      <textarea
        {...props}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 backdrop-blur-sm transition focus:border-lime-300 focus:ring-lime-300 focus:ring-2"
      />
    </label>
  );
}

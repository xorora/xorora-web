"use client";

import { ArrowUpRight, Check, ChevronDown, Mail, MapPin } from "lucide-react";
import { type ChangeEvent, Fragment, useState } from "react";
import { XWatermark } from "@/components/geometry/x-watermark";
import { Button } from "@/components/ui/button";

interface FormState {
  name: string;
  email: string;
  company: string;
  team: string;
  using: string;
  notes: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  company?: string;
  using?: string;
}

function LeField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  error,
  textarea,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  textarea?: boolean;
  type?: string;
}) {
  const [f, setF] = useState(false);
  const border = error
    ? "var(--danger)"
    : f
      ? "var(--tangerine-500)"
      : "rgba(255,255,255,.16)";
  const common = {
    fontFamily: "Poppins, sans-serif",
    fontSize: 15,
    padding: "12px 14px",
    borderRadius: "var(--r-md)",
    border: `1px solid ${border}`,
    background: "rgba(255,255,255,.04)",
    color: "#fff",
    outline: "none",
    width: "100%",
    boxSizing: "border-box" as const,
    resize: "none" as const,
    boxShadow: f ? "var(--shadow-focus)" : "none",
  };

  return (
    <label
      htmlFor={name}
      style={{ display: "flex", flexDirection: "column", gap: 7 }}
    >
      <span
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: 12.5,
          fontWeight: 600,
          color: "rgba(255,255,255,.7)",
        }}
      >
        {label}
        {required && (
          <span style={{ color: "var(--tangerine-400)", marginLeft: 4 }}>
            *
          </span>
        )}
      </span>
      {textarea ? (
        <textarea
          id={name}
          rows={3}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={() => setF(true)}
          onBlur={() => setF(false)}
          style={common}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={() => setF(true)}
          onBlur={() => setF(false)}
          style={common}
        />
      )}
      {error && (
        <span
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 12,
            color: "var(--danger)",
          }}
        >
          {error}
        </span>
      )}
    </label>
  );
}

export function LeademContact() {
  const blank: FormState = {
    name: "",
    email: "",
    company: "",
    team: "",
    using: "",
    notes: "",
  };
  const [form, setForm] = useState<FormState>(blank);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);
  const teams = ["1-5 reps", "6-15 reps", "16-50 reps", "50+ reps"];
  const [selFocus, setSelFocus] = useState(false);

  const set = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const submit = () => {
    const e: FieldErrors = {};
    if (!form.name.trim()) e.name = "Please enter your full name.";
    if (!form.email.trim()) e.email = "Please enter your work email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    if (!form.company.trim()) e.company = "Please enter your company name.";
    if (!form.using.trim()) e.using = "Let us know what you use today.";
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
    }
  };

  return (
    <section
      id="contact-form"
      style={{
        background: "var(--navy-950)",
        padding: "clamp(64px,8vw,104px) 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          position: "relative",
          overflow: "hidden",
          background: "var(--navy-900)",
          border: "1px solid rgba(255,255,255,.1)",
          borderRadius: "var(--r-xl)",
          padding: "clamp(32px,4.5vw,60px)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(70% 90% at 90% 0%, rgba(70,76,159,.4), transparent 58%)",
            pointerEvents: "none",
          }}
        />
        <XWatermark
          size={420}
          color="rgba(120,150,240,0.05)"
          style={{ bottom: -180, left: -120 }}
        />
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "0.92fr 1.08fr",
            gap: "clamp(36px,5vw,64px)",
          }}
          className="le-contact-grid"
        >
          <div>
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 12,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "var(--tangerine-400)",
                marginBottom: 18,
              }}
            >
              Get in touch about Lead&apos;em
            </div>
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(30px,3.8vw,46px)",
                lineHeight: 1.04,
                letterSpacing: "-0.025em",
                color: "#fff",
                margin: "0 0 22px",
              }}
            >
              Ready to replace your spreadsheets?
            </h2>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 16.5,
                lineHeight: 1.7,
                color: "rgba(255,255,255,.66)",
                margin: "0 0 30px",
                maxWidth: 420,
              }}
            >
              Tell us about your team and current setup. We will reach back with
              a personalised demo of Lead&apos;em built around your workflow.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: Mail, value: "hello@xorora.com" },
                { icon: MapPin, value: "Austin, Texas" },
              ].map(({ icon: Icon, value }) => (
                <div
                  key={value}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 15,
                    color: "rgba(255,255,255,.85)",
                  }}
                >
                  <span
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "var(--r-md)",
                      background: "rgba(255,255,255,.06)",
                      border: "1px solid rgba(255,255,255,.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--tangerine-400)",
                    }}
                  >
                    <Icon style={{ width: 17 }} aria-hidden />
                  </span>
                  {value}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,.03)",
              border: "1px solid rgba(255,255,255,.1)",
              borderRadius: "var(--r-lg)",
              padding: "clamp(24px,3vw,32px)",
            }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "64px 0" }}>
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "rgba(46,158,107,.18)",
                    color: "var(--success)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <Check style={{ width: 30 }} aria-hidden />
                </div>
                <h3
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: 23,
                    color: "#fff",
                    margin: "0 0 10px",
                  }}
                >
                  Message received.
                </h3>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 15.5,
                    color: "rgba(255,255,255,.65)",
                    margin: 0,
                  }}
                >
                  We will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <Fragment>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 14,
                  }}
                  className="le-form-row"
                >
                  <LeField
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={set}
                    placeholder="Jordan Reyes"
                    required
                    error={errors.name}
                  />
                  <LeField
                    label="Work Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={set}
                    placeholder="you@company.com"
                    required
                    error={errors.email}
                  />
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 14,
                    marginTop: 14,
                  }}
                  className="le-form-row"
                >
                  <LeField
                    label="Company Name"
                    name="company"
                    value={form.company}
                    onChange={set}
                    placeholder="Company name"
                    required
                    error={errors.company}
                  />
                  <label
                    style={{ display: "flex", flexDirection: "column", gap: 7 }}
                  >
                    <span
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: 12.5,
                        fontWeight: 600,
                        color: "rgba(255,255,255,.7)",
                      }}
                    >
                      Team Size
                    </span>
                    <div style={{ position: "relative" }}>
                      <select
                        name="team"
                        value={form.team}
                        onChange={set}
                        onFocus={() => setSelFocus(true)}
                        onBlur={() => setSelFocus(false)}
                        style={{
                          appearance: "none",
                          WebkitAppearance: "none",
                          fontFamily: "Poppins, sans-serif",
                          fontSize: 15,
                          padding: "12px 38px 12px 14px",
                          borderRadius: "var(--r-md)",
                          border: `1px solid ${selFocus ? "var(--tangerine-500)" : "rgba(255,255,255,.16)"}`,
                          background: "rgba(255,255,255,.04)",
                          color: form.team ? "#fff" : "rgba(255,255,255,.5)",
                          outline: "none",
                          width: "100%",
                          boxSizing: "border-box",
                          cursor: "pointer",
                          boxShadow: selFocus ? "var(--shadow-focus)" : "none",
                        }}
                      >
                        <option value="" style={{ color: "#111" }}>
                          Select team size
                        </option>
                        {teams.map((t) => (
                          <option key={t} value={t} style={{ color: "#111" }}>
                            {t}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        style={{
                          position: "absolute",
                          right: 13,
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: 16,
                          color: "rgba(255,255,255,.5)",
                          pointerEvents: "none",
                        }}
                        aria-hidden
                      />
                    </div>
                  </label>
                </div>
                <div style={{ marginTop: 14 }}>
                  <LeField
                    label="What are you currently using to manage leads?"
                    name="using"
                    value={form.using}
                    onChange={set}
                    placeholder="Google Sheets, a legacy CRM, a mix…"
                    required
                    error={errors.using}
                    textarea
                  />
                </div>
                <div style={{ marginTop: 14 }}>
                  <LeField
                    label="Anything else we should know?"
                    name="notes"
                    value={form.notes}
                    onChange={set}
                    placeholder="Optional — team structure, timeline, goals…"
                    textarea
                  />
                </div>
                <div style={{ marginTop: 24 }}>
                  <Button
                    variant="primary"
                    size="lg"
                    style={{ width: "100%", justifyContent: "center" }}
                    onClick={submit}
                  >
                    Send Message{" "}
                    <ArrowUpRight style={{ width: 16 }} aria-hidden />
                  </Button>
                </div>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 12.5,
                    lineHeight: 1.55,
                    color: "rgba(255,255,255,.48)",
                    margin: "16px 0 0",
                    textAlign: "center",
                  }}
                >
                  Your information is never shared. We will respond within one
                  business day.
                </p>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

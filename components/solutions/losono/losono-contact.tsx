"use client";

import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { type ChangeEvent, Fragment, useState } from "react";
import { XWatermark } from "@/components/geometry/x-watermark";
import { DynamicLucideIcon } from "@/components/solutions/shared";
import { Button } from "@/components/ui/button";
import { OLIVE, OLIVE_BORDER, OLIVE_SOFT, OliveLabel } from "./losono-visuals";

type FormState = {
  name: string;
  email: string;
  company: string;
  team: string;
  usecase: string;
  using: string;
  voice: string;
  notes: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function LosonoField({
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
  name: keyof FormState;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  textarea?: boolean;
  type?: string;
}) {
  const [focused, setFocused] = useState(false);
  const border = error
    ? "var(--danger)"
    : focused
      ? OLIVE
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
        {required && <span style={{ color: OLIVE, marginLeft: 4 }}>*</span>}
      </span>
      {textarea ? (
        <textarea
          id={name}
          rows={3}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
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
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
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

function LosonoSelect({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: keyof FormState;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  const [focused, setFocused] = useState(false);

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
      </span>
      <div style={{ position: "relative" }}>
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            appearance: "none",
            WebkitAppearance: "none",
            fontFamily: "Poppins, sans-serif",
            fontSize: 15,
            padding: "12px 38px 12px 14px",
            borderRadius: "var(--r-md)",
            border: `1px solid ${focused ? OLIVE : "rgba(255,255,255,.16)"}`,
            background: "rgba(255,255,255,.04)",
            color: value ? "#fff" : "rgba(255,255,255,.5)",
            outline: "none",
            width: "100%",
            boxSizing: "border-box",
            cursor: "pointer",
          }}
        >
          <option value="" style={{ color: "#111" }}>
            Select…
          </option>
          {options.map((o) => (
            <option key={o} value={o} style={{ color: "#111" }}>
              {o}
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
  );
}

export function LosonoContact() {
  const blank: FormState = {
    name: "",
    email: "",
    company: "",
    team: "",
    usecase: "",
    using: "",
    voice: "",
    notes: "",
  };
  const [form, setForm] = useState<FormState>(blank);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  const set = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const submit = () => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Please enter your full name.";
    if (!form.email.trim()) e.email = "Please enter your work email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    if (!form.company.trim())
      e.company = "Please enter your company or organization.";
    if (!form.using.trim()) e.using = "Let us know what you use today.";
    setErrors(e);
    if (Object.keys(e).length === 0) setSent(true);
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
          overflow: "hidden",
          position: "relative",
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
          color="rgba(200,227,90,0.05)"
          style={{ bottom: -180, left: -120 }}
        />
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "0.8fr 1.2fr",
            gap: "clamp(36px,5vw,64px)",
          }}
          className="lo-contact-grid"
        >
          <div>
            <OliveLabel style={{ marginBottom: 18 }}>
              Get in touch about Losono
            </OliveLabel>
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
              Ready to deploy your first AI agent?
            </h2>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 16.5,
                lineHeight: 1.7,
                color: "rgba(255,255,255,.66)",
                margin: "0 0 30px",
                maxWidth: 400,
              }}
            >
              Tell us about your organization and what you are trying to build.
              We will reach back with a tailored Losono demo built around your
              use case — whether it is customer support, sales, onboarding, or
              internal knowledge access.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {(
                [
                  ["mail", "hello@xorora.com"],
                  ["map-pin", "Austin, Texas"],
                ] as const
              ).map(([ic, v]) => (
                <div
                  key={v}
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
                      color: OLIVE,
                    }}
                  >
                    <DynamicLucideIcon name={ic} style={{ width: 17 }} />
                  </span>
                  {v}
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
                    background: OLIVE_SOFT,
                    color: OLIVE,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    border: `1px solid ${OLIVE_BORDER}`,
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
                  className="lo-form-row"
                >
                  <LosonoField
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={set}
                    placeholder="Jordan Reyes"
                    required
                    error={errors.name}
                  />
                  <LosonoField
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
                  className="lo-form-row"
                >
                  <LosonoField
                    label="Company or Organization"
                    name="company"
                    value={form.company}
                    onChange={set}
                    placeholder="Company name"
                    required
                    error={errors.company}
                  />
                  <LosonoSelect
                    label="Team Size"
                    name="team"
                    value={form.team}
                    onChange={set}
                    options={["1-10", "11-50", "51-200", "200+"]}
                  />
                </div>
                <div style={{ marginTop: 14 }}>
                  <LosonoSelect
                    label="Primary Use Case"
                    name="usecase"
                    value={form.usecase}
                    onChange={set}
                    options={[
                      "Customer Support",
                      "Sales and Lead Qualification",
                      "Onboarding",
                      "Internal Knowledge",
                      "Other",
                    ]}
                  />
                </div>
                <div style={{ marginTop: 14 }}>
                  <LosonoField
                    label="What are you currently using for AI agents or chatbots?"
                    name="using"
                    value={form.using}
                    onChange={set}
                    placeholder="Intercom, Drift, Botpress, built in-house, nothing yet…"
                    required
                    error={errors.using}
                    textarea
                  />
                </div>
                <div style={{ marginTop: 16 }}>
                  <span
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 12.5,
                      fontWeight: 600,
                      color: "rgba(255,255,255,.7)",
                      display: "block",
                      marginBottom: 10,
                    }}
                  >
                    Do you need voice support?
                  </span>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {["Yes", "No", "Not sure yet"].map((o) => {
                      const on = form.voice === o;
                      return (
                        <button
                          key={o}
                          type="button"
                          onClick={() => setForm((p) => ({ ...p, voice: o }))}
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: 13.5,
                            fontWeight: 500,
                            cursor: "pointer",
                            padding: "9px 16px",
                            borderRadius: "var(--r-pill)",
                            transition: "all .15s",
                            border: `1px solid ${on ? OLIVE : "rgba(255,255,255,.16)"}`,
                            background: on
                              ? OLIVE_SOFT
                              : "rgba(255,255,255,.03)",
                            color: on ? OLIVE : "rgba(255,255,255,.75)",
                          }}
                        >
                          {o}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div style={{ marginTop: 16 }}>
                  <LosonoField
                    label="Anything else?"
                    name="notes"
                    value={form.notes}
                    onChange={set}
                    placeholder="Optional — your stack, timeline, goals…"
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
                  Your information is never shared. We respond within one
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

"use client";

import { ArrowUpRight, Check, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { SectionHead } from "@/components/case-study/section-head";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TOPICS = [
  "Start a project",
  "Partnership",
  "Press or media",
  "Careers",
  "Something else",
] as const;

const CONTACT_ITEMS = [
  { icon: Mail, value: "info@xorora.com" },
  { icon: Phone, value: "+92-332 -0555328" },
] as const;

const fieldClass =
  "w-full rounded-[var(--r-md)] border border-border-strong bg-slate-50 px-3.5 py-3 font-sans text-[15px] text-fg1 outline-hidden transition-shadow focus:border-tangerine-500 focus:bg-surface focus:shadow-focus";

export function BlogContact() {
  const [sent, setSent] = useState(false);
  const [topic, setTopic] = useState("");

  return (
    <section
      id="blog-contact"
      className="bg-slate-50 px-8 py-[clamp(64px,8vw,104px)]"
    >
      <div className="blog-contact-grid mx-auto grid max-w-[1180px] grid-cols-[0.85fr_1.15fr] items-start gap-[clamp(36px,5vw,64px)]">
        <div className="sticky top-[100px]">
          <SectionHead
            label="Get in touch"
            title="Have a topic or a project in mind?"
            sub="Pitch a guest post, ask a question about something we wrote, or start a conversation about working together."
          />
          <div className="mt-7 flex flex-col gap-3.5">
            {CONTACT_ITEMS.map(({ icon: Icon, value }) => (
              <div
                key={value}
                className="flex items-center gap-3 font-sans text-[15px] text-fg1"
              >
                <span className="flex h-[38px] w-[38px] items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                  <Icon className="h-[18px] w-[18px]" aria-hidden />
                </span>
                {value}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-(--r-xl) border border-border bg-surface p-[clamp(28px,3.5vw,44px)] shadow-sm">
          {sent ? (
            <div className="py-14 text-center">
              <div className="mx-auto mb-[18px] flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-success">
                <Check className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="mb-2 font-bold font-sans text-[22px] text-fg1">
                Message sent
              </h3>
              <p className="m-0 font-sans text-[15px] text-fg2">
                We will reply within one business day.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4">
                <BlogField label="Full name" placeholder="Jordan Reyes" />
                <BlogField label="Work email" placeholder="you@company.com" />
              </div>
              <div className="mt-4">
                <div className="mb-2 font-sans font-semibold text-[13px] text-fg2">
                  What is this about?
                </div>
                <div className="flex flex-wrap gap-[9px]">
                  {TOPICS.map((t) => {
                    const active = topic === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTopic(t)}
                        className={cn(
                          "cursor-pointer rounded-pill border px-[15px] py-2 font-medium font-sans text-[13.5px] transition-all duration-150",
                          active
                            ? "border-xo-indigo bg-indigo-50 text-xo-indigo"
                            : "border-border-strong bg-surface text-fg2",
                        )}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="mt-4">
                <BlogField
                  label="Message"
                  placeholder="Tell us what is on your mind"
                  textarea
                />
              </div>
              <div className="mt-[22px] flex flex-wrap items-center justify-between gap-4">
                <label className="flex cursor-pointer items-center gap-[9px] font-sans text-[13px] text-fg2">
                  <input type="checkbox" className="h-4 w-4 accent-xo-indigo" />
                  Subscribe me to the monthly dispatch
                </label>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setSent(true)}
                >
                  Send message
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function BlogField({
  label,
  placeholder,
  textarea,
}: {
  label: string;
  placeholder: string;
  textarea?: boolean;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <label htmlFor={id} className="flex flex-col gap-[7px]">
      <span className="font-sans font-semibold text-[13px] text-fg2">
        {label}
      </span>
      {textarea ? (
        <textarea
          id={id}
          rows={4}
          placeholder={placeholder}
          className={cn(fieldClass, "resize-none")}
        />
      ) : (
        <input id={id} placeholder={placeholder} className={fieldClass} />
      )}
    </label>
  );
}

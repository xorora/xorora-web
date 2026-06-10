"use client";

import { ArrowUpRight, Check, Mail } from "lucide-react";
import { useState } from "react";
import { XWatermark } from "@/components/geometry/x-watermark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PERKS = [
  "One email a month",
  "Engineering deep-dives",
  "Unsubscribe anytime",
] as const;

const fieldClass =
  "w-full rounded-r-md border bg-white/5 px-[15px] py-[13px] font-sans text-[15px] text-white outline-hidden transition-shadow placeholder:text-white/40 focus:border-tangerine-500 focus:shadow-focus";

export function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <section
      id="blog-news"
      className="bg-surface px-8 pb-[clamp(56px,7vw,96px)]"
    >
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-r-xl bg-navy-900 p-[clamp(40px,5vw,72px)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_110%_at_88%_0%,rgba(70,76,159,0.5),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-70 [background:repeating-radial-gradient(circle_at_90%_10%,rgba(120,150,240,0.05)_0px,rgba(120,150,240,0.05)_1px,transparent_1px,transparent_44px)]" />
        <XWatermark
          size={400}
          color="rgba(120,150,240,0.06)"
          className="bottom-[-170px] left-[-110px]"
        />
        <div className="blog-news-grid relative grid grid-cols-[1.1fr_0.9fr] items-center gap-[clamp(32px,5vw,56px)]">
          <div>
            <div className="mb-[22px] inline-flex items-center gap-[9px] rounded-pill border border-white/16 bg-white/6 px-3.5 py-[7px] font-mono text-[11px] text-tangerine-400 tracking-[0.14em]">
              <Mail className="h-3.5 w-3.5" aria-hidden />
              THE DISPATCH
            </div>
            <h2 className="mb-4 text-balance font-extrabold font-sans text-[clamp(28px,3.6vw,44px)] text-white leading-tight tracking-tight">
              Get the engineering notes we wish we had earlier.
            </h2>
            <p className="mb-6 max-w-[440px] font-sans text-[16.5px] text-white/70 leading-relaxed">
              Join engineering and product leaders getting one practical
              breakdown a month on building production AI. Plus our free
              playbook when you subscribe.
            </p>
            <div className="flex flex-wrap gap-x-[-22px] gap-y-3">
              {PERKS.map((perk) => (
                <span
                  key={perk}
                  className="inline-flex items-center gap-2 font-sans text-[13.5px] text-white/82"
                >
                  <Check
                    className="h-[15px] w-[15px] text-tangerine-400"
                    aria-hidden
                  />
                  {perk}
                </span>
              ))}
            </div>
          </div>
          <div>
            {sent ? (
              <div className="rounded-r-lg border border-white/12 bg-white/4 px-8 py-10 text-center">
                <div className="mx-auto mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-success/18 text-success">
                  <Check className="h-[26px] w-[26px]" aria-hidden />
                </div>
                <h3 className="mb-2 font-bold font-sans text-white text-xl">
                  You are in.
                </h3>
                <p className="m-0 font-sans text-[14.5px] text-white/65">
                  Check your inbox for the playbook.
                </p>
              </div>
            ) : (
              <div className="rounded-r-lg border border-white/12 bg-white/4 p-[clamp(24px,3vw,32px)]">
                <label
                  htmlFor="blog-newsletter-email"
                  className="mb-2 block font-sans font-semibold text-[12.5px] text-white/70"
                >
                  Work email
                </label>
                <input
                  id="blog-newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="you@company.com"
                  className={cn(
                    fieldClass,
                    "mb-3.5",
                    focused ? "border-tangerine-500" : "border-white/18",
                  )}
                />
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  onClick={() => email && setSent(true)}
                >
                  Get the playbook
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Button>
                <p className="mt-3.5 text-center font-sans text-white/45 text-xs">
                  No spam. Unsubscribe in one click.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

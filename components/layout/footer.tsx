import { Globe, Mail, MapPin, Rss } from "lucide-react";
import Link from "next/link";
import { LetsTalkContactLink } from "@/components/modals/lets-talk-modal-provider";
import { Wordmark } from "@/components/ui/wordmark";
import { FOOTER_OFFICES, type FooterColumn } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Newsletter } from "./newsletter";

const footerLinkClass =
  "w-fit cursor-pointer font-sans text-sm text-white/60 no-underline transition-colors duration-150 hover:text-tangerine-400";

interface FooterProps {
  columns: FooterColumn[];
}

export function Footer({ columns }: FooterProps) {
  return (
    <footer className="border-white/[0.07] border-t bg-navy-950">
      <div className="mx-auto max-w-[1240px] px-8 py-[72px] pb-12">
        <div className="xo-footer-grid grid grid-cols-4 gap-x-10 gap-y-11">
          {columns.map((column) => (
            <div key={column.heading}>
              {column.href ? (
                <Link
                  href={column.href}
                  className="mb-[18px] block font-sans font-semibold text-[13px] text-white tracking-[0.04em] no-underline"
                >
                  {column.heading}
                </Link>
              ) : (
                <div className="mb-[18px] font-sans font-semibold text-[13px] text-white tracking-[0.04em]">
                  {column.heading}
                </div>
              )}
              <div className="flex flex-col gap-3">
                {column.items.map((item) => {
                  if ("href" in item) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={footerLinkClass}
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  if (item.action === "contact") {
                    return (
                      <LetsTalkContactLink
                        key={item.label}
                        className={cn(
                          footerLinkClass,
                          "border-0 bg-transparent p-0 text-left",
                        )}
                      >
                        {item.label}
                      </LetsTalkContactLink>
                    );
                  }

                  return (
                    <button
                      key={item.label}
                      type="button"
                      className={cn(
                        footerLinkClass,
                        "border-0 bg-transparent p-0 text-left",
                      )}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="xo-foot-news my-14 grid grid-cols-[1.4fr_1fr] items-center gap-10 border-white/8 border-y py-10">
          <div>
            <div className="mb-2 font-bold font-sans text-[22px] text-white tracking-[-0.01em]">
              Engineered insights, monthly.
            </div>
            <p className="m-0 font-sans text-[14.5px] text-white/60">
              Field notes on shipping production AI. No hype.
            </p>
          </div>
          <Newsletter />
        </div>

        <div
          className="xo-foot-offices mb-12 grid gap-7"
          style={{
            gridTemplateColumns: `repeat(${FOOTER_OFFICES.length}, minmax(0, 1fr))`,
          }}
        >
          {FOOTER_OFFICES.map((office) => (
            <div key={office.city}>
              <div className="mb-2 flex items-center gap-2">
                <MapPin
                  className="h-[15px] w-[15px] text-tangerine-400"
                  aria-hidden
                />
                <span className="font-sans font-semibold text-sm text-white">
                  {office.city}
                </span>
              </div>
              <div className="font-sans text-[13px] text-white/50 leading-normal">
                {office.addr}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 border-white/8 border-t pt-9">
          <div className="flex flex-wrap items-center gap-[22px]">
            <Wordmark height={22} dark />
            <span className="font-mono text-white/40 text-xs">
              © 2026 Xorora · All rights reserved
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-[22px]">
            <span className="font-sans text-[13px] text-white/50">Privacy</span>
            <span className="font-sans text-[13px] text-white/50">Terms</span>
            <div className="flex gap-3.5">
              <span className="flex text-white/55" aria-hidden>
                <Globe className="h-[18px] w-[18px]" />
              </span>
              <span className="flex text-white/55" aria-hidden>
                <Mail className="h-[18px] w-[18px]" />
              </span>
              <span className="flex text-white/55" aria-hidden>
                <Rss className="h-[18px] w-[18px]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

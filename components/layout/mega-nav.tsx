"use client";

import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SignalRule } from "@/components/geometry/signal-rule";
import { NavIcon } from "@/components/ui/nav-icon";
import {
  type NavCompanyLink,
  type NavIndustry,
  ROUTES,
  type SiteNavigation,
} from "@/lib/navigation";
import { cn } from "@/lib/utils";

type MegaMenu = "Services" | "Industries" | "Company" | null;

interface MegaNavProps {
  current?: "work";
  onLetsTalk?: () => void;
  nav: SiteNavigation;
}

export function MegaNav({ current, onLetsTalk, nav }: MegaNavProps) {
  const [open, setOpen] = useState<MegaMenu>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(null);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [open]);

  function enter(menu: MegaMenu) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(menu);
  }

  function leaveAll() {
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  }

  function handleLetsTalk() {
    if (onLetsTalk) {
      onLetsTalk();
      return;
    }
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  const triggers = ["Services", "Industries", "Company"] as const;

  return (
    <header className="pointer-events-none fixed top-0 right-0 left-0 z-100">
      <nav
        aria-label="Main navigation"
        onMouseLeave={leaveAll}
        className="pointer-events-auto"
      >
        <div className="flex justify-center px-5 pt-[18px]">
          <div className="pointer-events-auto flex w-full max-w-[1080px] items-center gap-3 rounded-pill border border-white/12 bg-[rgba(8,12,30,0.72)] px-[9px] py-[9px] pl-[22px] shadow-[0_18px_50px_-24px_rgba(0,0,0,0.7)] backdrop-blur-lg">
            <Link
              href={ROUTES.home}
              className="relative flex h-9 w-[150px] shrink-0 items-center"
            >
              <Image
                src="/assets/nav-logo-full.png"
                alt="Xorora"
                width={0}
                height={0}
                sizes="150px"
                style={{ height: 28, width: "auto" }}
                className={cn(
                  "absolute left-0 h-auto w-auto origin-left transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
                  scrolled
                    ? "-translate-x-1.5 scale-90 opacity-0 blur-[2px]"
                    : "translate-x-0 scale-100 opacity-100 blur-0",
                )}
                priority
              />
              <Image
                src="/assets/nav-logo-x.png"
                alt="Xorora"
                width={0}
                height={0}
                sizes="40px"
                style={{ height: 28, width: "auto" }}
                className={cn(
                  "absolute left-0 h-auto w-auto origin-left transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
                  scrolled
                    ? "translate-x-0 scale-100 opacity-100 blur-0"
                    : "scale-50 opacity-0 blur-[2px]",
                )}
                priority
              />
            </Link>

            <div className="xo-mn-links mx-auto flex items-center gap-0.5">
              {triggers.map((trigger) => (
                <button
                  key={trigger}
                  type="button"
                  onMouseEnter={() => enter(trigger)}
                  onClick={() => {
                    if (trigger === "Industries") {
                      window.location.href = ROUTES.industries;
                      return;
                    }
                    setOpen((value) => (value === trigger ? null : trigger));
                  }}
                  className={cn(
                    "flex cursor-pointer items-center gap-1.5 rounded-(--r-md) border-0 bg-transparent px-[15px] py-[9px] font-medium font-sans text-[14.5px] transition-colors duration-150",
                    open === trigger ? "text-white" : "text-white/74",
                  )}
                >
                  {trigger}
                  <ChevronDown
                    className={cn(
                      "h-[15px] w-[15px] transition-transform duration-200",
                      open === trigger && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
              ))}
              <Link
                href={nav.caseStudiesHref}
                onMouseEnter={() => enter(null)}
                className={cn(
                  "rounded-(--r-md) px-[15px] py-[9px] font-medium font-sans text-[14.5px] no-underline transition-colors duration-150 hover:text-white",
                  current === "work" ? "text-white" : "text-white/74",
                )}
              >
                Our Work
              </Link>
            </div>

            <button
              type="button"
              onClick={handleLetsTalk}
              className="xo-mn-cta hover:-translate-y-px inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-pill border-0 bg-white px-5 py-[11px] font-sans font-semibold text-[14.5px] text-xo-ink transition-[transform,box-shadow] duration-150 hover:shadow-[0_8px_24px_-8px_rgba(255,255,255,0.5)]"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </button>

            <button
              type="button"
              onClick={() => setMobile((value) => !value)}
              className="xo-mn-burger ml-auto hidden h-[42px] w-[42px] shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/14 bg-white/8 text-white"
              aria-label={mobile ? "Close menu" : "Open menu"}
            >
              {mobile ? (
                <X className="h-5 w-5" aria-hidden />
              ) : (
                <Menu className="h-5 w-5" aria-hidden />
              )}
            </button>
          </div>
        </div>

        {open && (
          <section
            onMouseEnter={() => {
              if (closeTimer.current) clearTimeout(closeTimer.current);
            }}
            className="xo-mn-panelwrap pointer-events-auto flex justify-center px-5 pt-2.5"
            aria-label={`${open} menu`}
          >
            <div className="xo-mn-in w-full max-w-[1080px] overflow-hidden rounded-(--r-xl) border border-white/12 bg-[rgba(8,12,30,0.96)] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)] backdrop-blur-[20px]">
              {open === "Services" && (
                <ServicesPanel
                  nav={nav}
                  onPick={() => setOpen(null)}
                  onLetsTalk={onLetsTalk}
                />
              )}
              {open === "Industries" && <IndustriesPanel nav={nav} />}
              {open === "Company" && (
                <CompanyPanel nav={nav} onLetsTalk={onLetsTalk} />
              )}
            </div>
          </section>
        )}
      </nav>

      {mobile && (
        <MobileMenu
          nav={nav}
          onClose={() => setMobile(false)}
          onLetsTalk={onLetsTalk}
        />
      )}
    </header>
  );
}

function ServicesPanel({
  nav,
  onPick,
  onLetsTalk,
}: {
  nav: SiteNavigation;
  onPick: () => void;
  onLetsTalk?: () => void;
}) {
  return (
    <div className="xo-mn-services grid min-h-[360px] grid-cols-[256px_1fr]">
      <div className="relative flex flex-col overflow-hidden border-white/8 border-r bg-[linear-gradient(165deg,#161D3D_0%,#1F2A63_45%,#2E47AE_82%,#3A57C9_100%)] px-[30px] py-[34px]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(90% 70% at 0% 100%, rgba(90,125,235,0.45), transparent 62%)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-[-120px] left-[-40px] h-80 w-80 rounded-full opacity-85"
          style={{
            background:
              "repeating-radial-gradient(circle at center, rgba(255,255,255,.34) 0px, rgba(255,255,255,.34) 2.5px, transparent 2.5px, transparent 24px)",
          }}
        />
        <div className="relative">
          <div className="mb-4 inline-flex items-center gap-2.5">
            <SignalRule color="var(--tangerine-400)" />
            <span className="font-mono text-[10.5px] text-tangerine-400 tracking-[0.18em]">
              WHAT WE BUILD
            </span>
          </div>
          <h3 className="m-0 mb-3 font-bold font-sans text-2xl text-white leading-[1.1] tracking-[-0.01em]">
            Our services.
          </h3>
          <p className="m-0 mb-6 font-sans text-sm text-white/60 leading-relaxed">
            End-to-end engineering — from the first prototype to the system your
            business runs on.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onLetsTalk?.()}
          className="relative mt-auto inline-flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 font-sans font-semibold text-sm text-tangerine-400"
        >
          Start a project
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </div>

      <div className="xo-mn-svc-grid grid grid-cols-3 gap-x-2 gap-y-1 px-[26px] py-[26px]">
        {nav.services.map((category) => (
          <div key={category.name} className="px-2.5 py-2">
            <div className="mb-3 flex items-center gap-2">
              <NavIcon
                name={category.icon}
                className="h-4 w-4 text-indigo-300"
              />
              <span className="font-sans font-semibold text-[13px] text-white tracking-[0.02em]">
                {category.name}
              </span>
            </div>
            <div className="flex flex-col gap-px">
              {category.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onPick}
                  className="rounded-(--r-sm) px-2 py-1.5 font-sans text-[13.5px] text-white/66 no-underline transition-[background,color] duration-140 hover:bg-white/6 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IndustriesPanel({ nav }: { nav: SiteNavigation }) {
  return (
    <div className="xo-mn-industries grid grid-cols-[1fr_380px]">
      <div className="grid grid-cols-2 gap-x-2.5 gap-y-0.5 px-[26px] py-[26px]">
        {nav.industries.map((industry) => (
          <IndustryLink key={industry.name} industry={industry} />
        ))}
      </div>
      <FeaturedCaseStudy featured={nav.featured} />
    </div>
  );
}

function IndustryLink({ industry }: { industry: NavIndustry }) {
  return (
    <Link
      href={industry.href}
      className="flex gap-3 rounded-(--r-md) px-3 py-3 no-underline transition-colors duration-140 hover:bg-white/5"
    >
      <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-(--r-md) border border-[rgba(120,150,240,0.3)] bg-[rgba(70,76,159,0.25)] text-indigo-300">
        <NavIcon name={industry.icon} className="h-[19px] w-[19px]" />
      </span>
      <div>
        <div className="mb-0.5 font-sans font-semibold text-[15px] text-white">
          {industry.name}
        </div>
        <div className="font-sans text-[12.5px] text-white/55 leading-[1.45]">
          {industry.desc}
        </div>
      </div>
    </Link>
  );
}

function FeaturedCaseStudy({
  featured,
}: {
  featured: SiteNavigation["featured"];
}) {
  return (
    <Link
      href={featured.href}
      className="relative flex flex-col overflow-hidden border-white/8 border-l bg-[linear-gradient(135deg,#161D3D_0%,#1F2A63_42%,#2E47AE_78%,#3A57C9_100%)] px-[26px] py-[26px] no-underline"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 80% at 100% 60%, rgba(90,125,235,0.45), transparent 62%)",
        }}
      />
      <div className="relative flex h-full flex-col">
        <span className="mb-3.5 font-mono text-[10.5px] text-tangerine-400 tracking-[0.16em]">
          {featured.tag}
        </span>
        <div className="relative mb-4 h-[116px] overflow-hidden rounded-(--r-md) border border-white/12">
          <Image
            src={featured.img}
            alt=""
            fill
            sizes="328px"
            className="object-cover object-top-left"
          />
        </div>
        <h4 className="m-0 mb-2 font-sans font-semibold text-base text-white leading-[1.25]">
          {featured.title}
        </h4>
        <p className="m-0 mb-4 font-sans text-[13px] text-white/60 leading-normal">
          {featured.desc}
        </p>
        <span className="mt-auto inline-flex items-center gap-[7px] font-sans font-semibold text-[13.5px] text-tangerine-400">
          Read case study
          <ArrowUpRight className="h-[15px] w-[15px]" aria-hidden />
        </span>
      </div>
    </Link>
  );
}

function CompanyPanel({
  nav,
  onLetsTalk,
}: {
  nav: SiteNavigation;
  onLetsTalk?: () => void;
}) {
  return (
    <div className="xo-mn-company grid grid-cols-[1fr_340px]">
      <div className="grid grid-cols-2 gap-x-2.5 gap-y-0.5 px-[26px] py-[26px]">
        {nav.company.map((link) => (
          <CompanyLink key={link.name} link={link} />
        ))}
      </div>
      <div className="relative flex flex-col justify-center overflow-hidden border-white/8 border-l bg-[linear-gradient(135deg,#161D3D_0%,#1F2A63_42%,#2E47AE_78%,#3A57C9_100%)] px-7 py-[30px]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(90% 80% at 100% 60%, rgba(90,125,235,0.45), transparent 62%)",
          }}
        />
        <div className="relative">
          <CalendarCheck
            className="mb-4 h-[26px] w-[26px] text-white"
            aria-hidden
          />
          <h4 className="m-0 mb-2.5 font-bold font-sans text-[21px] text-white leading-[1.15] tracking-[-0.01em]">
            Book a meeting with our team.
          </h4>
          <p className="m-0 mb-[22px] font-sans text-[13.5px] text-white/78 leading-[1.55]">
            A 30-minute build review — we&apos;ll pressure-test your idea and
            map the path to production.
          </p>
          <button
            type="button"
            onClick={() => onLetsTalk?.()}
            className="inline-flex cursor-pointer items-center gap-2 rounded-pill border-0 bg-white px-5 py-[11px] font-sans font-semibold text-sm text-xo-ink"
          >
            Book a call
            <ArrowUpRight className="h-[15px] w-[15px]" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}

function CompanyLink({ link }: { link: NavCompanyLink }) {
  return (
    <Link
      href={link.href}
      className="flex gap-3 rounded-(--r-md) px-3 py-3.5 no-underline transition-colors duration-140 hover:bg-white/5"
    >
      <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-(--r-md) border border-[rgba(120,150,240,0.3)] bg-[rgba(70,76,159,0.25)] text-indigo-300">
        <NavIcon name={link.icon} className="h-[19px] w-[19px]" />
      </span>
      <div>
        <div className="mb-0.5 font-sans font-semibold text-[15px] text-white">
          {link.name}
        </div>
        <div className="font-sans text-[12.5px] text-white/55 leading-[1.45]">
          {link.desc}
        </div>
      </div>
    </Link>
  );
}

function MobileMenu({
  nav,
  onClose,
  onLetsTalk,
}: {
  nav: SiteNavigation;
  onClose: () => void;
  onLetsTalk?: () => void;
}) {
  const [section, setSection] = useState<string | null>(null);

  return (
    <div className="xo-mn-mobile pointer-events-auto mx-5 mt-2.5 max-h-[calc(100vh-120px)] overflow-y-auto rounded-(--r-xl) border border-white/12 bg-[rgba(8,12,30,0.98)] px-5 py-3 pb-6 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
      <MobileSection
        open={section === "Services"}
        onToggle={() =>
          setSection((value) => (value === "Services" ? null : "Services"))
        }
      >
        Services
      </MobileSection>
      {section === "Services" && (
        <div className="px-0 py-2 pb-3.5">
          {nav.services.map((category) => (
            <div key={category.name} className="mb-2.5">
              <div className="px-2 py-1.5 font-mono text-[11px] text-tangerine-400 uppercase tracking-widest">
                {category.name}
              </div>
              {category.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="block px-2 py-2 font-sans text-sm text-white/60 no-underline"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}

      <MobileSection
        open={section === "Industries"}
        onToggle={() =>
          setSection((value) => (value === "Industries" ? null : "Industries"))
        }
      >
        Industries
      </MobileSection>
      {section === "Industries" && (
        <div className="px-0 py-2 pb-3.5">
          <Link
            href={ROUTES.industries}
            onClick={onClose}
            className="block px-2 py-2 font-sans font-semibold text-[14.5px] text-tangerine-400 no-underline"
          >
            All industries
          </Link>
          {nav.industries.map((industry) => (
            <Link
              key={industry.name}
              href={industry.href}
              onClick={onClose}
              className="block px-2 py-2 font-sans text-[14.5px] text-white/66 no-underline"
            >
              {industry.name}
            </Link>
          ))}
        </div>
      )}

      <MobileSection
        open={section === "Company"}
        onToggle={() =>
          setSection((value) => (value === "Company" ? null : "Company"))
        }
      >
        Company
      </MobileSection>
      {section === "Company" && (
        <div className="px-0 py-2 pb-3.5">
          {nav.company.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className="block px-2 py-2 font-sans text-[14.5px] text-white/66 no-underline"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      <Link
        href={nav.caseStudiesHref}
        onClick={onClose}
        className="block border-white/8 border-b px-1 py-4 font-sans font-semibold text-[17px] text-white no-underline"
      >
        Our Work
      </Link>

      <button
        type="button"
        onClick={() => {
          onLetsTalk?.();
          onClose();
        }}
        className="mt-[18px] flex w-full cursor-pointer items-center justify-center gap-2 rounded-pill border-0 bg-white px-5 py-3.5 font-sans font-semibold text-[15px] text-xo-ink"
      >
        Let&apos;s Talk
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </button>
    </div>
  );
}

function MobileSection({
  open,
  onToggle,
  children,
}: {
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full cursor-pointer items-center justify-between border-white/8 border-b bg-transparent px-1 py-4 font-sans font-semibold text-[17px] text-white"
    >
      {children}
      <ChevronDown
        className={cn(
          "h-[18px] w-[18px] transition-transform duration-200",
          open && "rotate-180",
        )}
        aria-hidden
      />
    </button>
  );
}

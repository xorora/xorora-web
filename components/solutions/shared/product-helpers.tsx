"use client";

import { ArrowUpRight, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { type CSSProperties, type ReactNode, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DynamicLucideIcon } from "./lucide-icon";

export function scrollToContact() {
  const el = document.getElementById("contact-form");
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 24,
      behavior: "smooth",
    });
  }
}

export function scrollToId(id: string, offset = 80) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - offset,
      behavior: "smooth",
    });
  }
}

export function BlueEyebrow({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 11,
        ...style,
      }}
    >
      <span
        style={{
          width: 26,
          height: 3,
          borderRadius: 2,
          background: "var(--indigo-400)",
        }}
      />
      <span
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 12,
          letterSpacing: ".18em",
          textTransform: "uppercase",
          color: "var(--indigo-300)",
        }}
      >
        {children}
      </span>
    </div>
  );
}

export function DemoButton({
  size = "lg",
  variant = "primary",
  label = "Book a Demo",
  style,
}: {
  size?: "lg" | "md" | "sm";
  variant?: "primary" | "onDark" | "secondary" | "ghost";
  label?: string;
  style?: CSSProperties;
}) {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={scrollToContact}
      style={style}
    >
      {label}{" "}
      <ArrowUpRight style={{ width: size === "lg" ? 17 : 15 }} aria-hidden />
    </Button>
  );
}

export function StickyDemo() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let formVisible = false;
    const form = document.getElementById("contact-form");
    let io: IntersectionObserver | undefined;

    if (form) {
      io = new IntersectionObserver(
        ([e]) => {
          formVisible = e.isIntersecting;
          update();
        },
        { threshold: 0.08 },
      );
      io.observe(form);
    }

    function update() {
      setShow(window.scrollY > 600 && !formVisible);
    }

    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", update);
      io?.disconnect();
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToContact}
      aria-label="Book a Demo"
      style={{
        position: "fixed",
        top: 88,
        right: 24,
        zIndex: 90,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "Poppins, sans-serif",
        fontSize: 14,
        fontWeight: 600,
        cursor: "pointer",
        padding: "11px 20px",
        borderRadius: "var(--r-pill)",
        border: "1px solid transparent",
        background: "var(--xo-indigo)",
        color: "#fff",
        boxShadow: "0 14px 34px -12px rgba(70,76,159,.7)",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(-12px)",
        pointerEvents: show ? "auto" : "none",
        transition:
          "opacity .25s cubic-bezier(.4,0,.2,1), transform .25s cubic-bezier(.4,0,.2,1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--indigo-600)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--xo-indigo)";
      }}
    >
      Book a Demo <ArrowUpRight style={{ width: 15 }} aria-hidden />
    </button>
  );
}

export function FloatCard({
  title,
  sub,
  icon,
  style,
}: {
  title: string;
  sub: string;
  icon: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: "var(--navy-950)",
        border: "1px solid rgba(255,255,255,.14)",
        borderRadius: "var(--r-md)",
        padding: "12px 16px",
        boxShadow: "var(--shadow-lg)",
        ...style,
      }}
    >
      <span
        style={{
          width: 36,
          height: 36,
          flexShrink: 0,
          borderRadius: "var(--r-md)",
          background: "rgba(70,76,159,.3)",
          border: "1px solid rgba(120,150,240,.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--indigo-300)",
        }}
      >
        <DynamicLucideIcon name={icon} style={{ width: 18 }} />
      </span>
      <div>
        <div
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: 16,
            color: "#fff",
            lineHeight: 1,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 11.5,
            color: "rgba(255,255,255,.6)",
            marginTop: 4,
          }}
        >
          {sub}
        </div>
      </div>
    </div>
  );
}

export function openLightbox(src: string, alt: string) {
  window.dispatchEvent(
    new CustomEvent("le-lightbox", { detail: { src, alt } }),
  );
}

export function Lightbox() {
  const [data, setData] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const onOpen = (e: Event) => {
      const detail = (e as CustomEvent<{ src: string; alt: string }>).detail;
      setData(detail);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setData(null);
    };
    window.addEventListener("le-lightbox", onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("le-lightbox", onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = data ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [data]);

  if (!data) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={data.alt}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(16px,4vw,56px)",
        animation: "leFade .2s ease",
      }}
    >
      <button
        type="button"
        aria-label="Close lightbox"
        onClick={() => setData(null)}
        style={{
          position: "absolute",
          inset: 0,
          border: "none",
          padding: 0,
          background: "rgba(2,6,15,.85)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          cursor: "zoom-out",
        }}
      />
      <button
        type="button"
        aria-label="Close"
        onClick={() => setData(null)}
        style={{
          position: "fixed",
          top: 22,
          right: 22,
          zIndex: 1,
          width: 44,
          height: 44,
          borderRadius: "var(--r-md)",
          background: "rgba(255,255,255,.08)",
          border: "1px solid rgba(255,255,255,.16)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <X style={{ width: 22 }} aria-hidden />
      </button>
      <figure
        style={{
          position: "relative",
          zIndex: 1,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          cursor: "default",
          animation: "lePop .26s cubic-bezier(.16,1,.3,1)",
          pointerEvents: "none",
        }}
      >
        <Image
          src={data.src}
          alt={data.alt}
          width={1920}
          height={1080}
          unoptimized
          style={{
            maxWidth: "94vw",
            maxHeight: "84vh",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            borderRadius: "var(--r-lg)",
            border: "1px solid rgba(255,255,255,.16)",
            boxShadow: "0 50px 130px -30px rgba(0,0,0,.85)",
          }}
        />
        <figcaption
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 12,
            letterSpacing: ".08em",
            color: "rgba(255,255,255,.6)",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--tangerine-400)",
            }}
          />{" "}
          {data.alt}
        </figcaption>
      </figure>
    </div>
  );
}

export function Zoomable({
  src,
  alt,
  children,
  style,
}: {
  src: string;
  alt: string;
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <button
      type="button"
      aria-label={`View larger: ${alt}`}
      className="le-zoom"
      onClick={() => openLightbox(src, alt)}
      style={{
        position: "relative",
        cursor: "zoom-in",
        borderRadius: 14,
        transition: "transform .2s cubic-bezier(.16,1,.3,1)",
        border: "none",
        background: "none",
        padding: 0,
        width: "100%",
        textAlign: "left",
        ...style,
      }}
    >
      {children}
      <span
        className="le-zoom-hint"
        style={{
          position: "absolute",
          top: 14,
          right: 14,
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          padding: "7px 13px",
          borderRadius: "var(--r-pill)",
          background: "rgba(2,6,15,.74)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          border: "1px solid rgba(255,255,255,.2)",
          color: "#fff",
          fontFamily: "Poppins, sans-serif",
          fontSize: 12,
          fontWeight: 600,
          opacity: 0,
          transition: "opacity .18s",
          pointerEvents: "none",
        }}
      >
        <Maximize2 style={{ width: 13 }} aria-hidden /> Click to enlarge
      </span>
    </button>
  );
}

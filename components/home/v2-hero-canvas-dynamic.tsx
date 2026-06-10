"use client";

import dynamic from "next/dynamic";

const V2HeroCanvas = dynamic(
  () => import("./v2-hero-canvas").then((m) => m.V2HeroCanvas),
  { ssr: false },
);

export function V2HeroCanvasDynamic() {
  return <V2HeroCanvas />;
}

"use client";

import dynamic from "next/dynamic";

const TechField = dynamic(
  () => import("./tech-field").then((module) => module.TechField),
  { ssr: false },
);

export function TechFieldDynamic() {
  return <TechField />;
}

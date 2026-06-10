"use client";

import dynamic from "next/dynamic";

const Brand3D = dynamic(() => import("./brand-3d").then((m) => m.Brand3D), {
  ssr: false,
});

export function Brand3DDynamic() {
  return <Brand3D />;
}

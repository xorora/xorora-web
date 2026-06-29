import type { Metadata } from "next";
import { ClearbeamPage } from "@/components/solutions/clearbeam";

export const metadata: Metadata = {
  title:
    "Clearbeam by Xorora — Real-Time SaaS Event Monitoring, Delivered to Your Email",
  description:
    "Clearbeam ingests your product and revenue events via API and delivers instant, structured email alerts — so your team reacts in real time.",
  alternates: { canonical: "/solutions/clearbeam" },
};

export default function Page() {
  return <ClearbeamPage />;
}

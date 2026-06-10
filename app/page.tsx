import type { Metadata } from "next";
import {
  V2Cases,
  V2Contact,
  V2Deliver,
  V2Engagement,
  V2Hero,
  V2Industries,
  V2Services,
  V2Statement,
} from "@/components/home";

export const metadata: Metadata = {
  title: "Xorora — Engineered for your Ambition",
  description:
    "Production AI and software, built by a partner who ships. From the first prototype to the system your business runs on, wildly reimagined.",
};

export default function HomePage() {
  return (
    <div className="bg-navy-950">
      <V2Hero />
      <V2Statement />
      <V2Services />
      <V2Industries />
      <V2Cases />
      <V2Deliver />
      <V2Engagement />
      <V2Contact />
    </div>
  );
}

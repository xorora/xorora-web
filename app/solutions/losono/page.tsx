import type { Metadata } from "next";
import { LosonoPage } from "@/components/solutions/losono";

export const metadata: Metadata = {
  title:
    "Losono by Xorora — Build AI Agents that Chat, Speak, Listen, and Answer",
  description:
    "Losono is a unified platform for creating, training, and deploying AI agents across chat and voice — grounded in your own knowledge base.",
  alternates: { canonical: "/solutions/losono" },
};

export default function Page() {
  return <LosonoPage />;
}

import type { Metadata } from "next";
import {
  ConApproach,
  ConContact,
  ConFAQ,
  ConHero,
  ConOutcomes,
  ConServices,
} from "@/components/consulting";

export const metadata: Metadata = {
  title: "Consulting Services | Xorora",
  description:
    "IT consulting services from Xorora: discovery workshops, AI consulting, and digital transformation strategy that turns ambition into a clear, costed roadmap.",
};

export default function ConsultingPage() {
  return (
    <div className="bg-surface">
      <ConHero />
      <ConServices />
      <ConOutcomes />
      <ConApproach />
      <ConFAQ />
      <ConContact />
    </div>
  );
}

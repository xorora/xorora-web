import type { Metadata } from "next";
import {
  MgsContact,
  MgsFAQ,
  MgsHero,
  MgsIndustries,
  MgsProcess,
  MgsRule,
  MgsServices,
  MgsWhy,
} from "@/components/managed-services";
import { listIndustryNavItems } from "@/lib/navigation/server";

export const metadata: Metadata = {
  title: "Managed Services | Xorora",
  description:
    "Xorora managed IT services: 24/7 monitoring, co-managed IT, network and server management, cybersecurity, and compliance-ready support for growing organizations.",
};

export default async function ManagedServicesPage() {
  const industries = await listIndustryNavItems();

  return (
    <div className="bg-navy-900">
      <MgsHero />
      <MgsRule />
      <MgsProcess />
      <MgsRule />
      <MgsServices />
      <MgsWhy />
      <MgsIndustries industries={industries} />
      <MgsRule />
      <MgsFAQ />
      <MgsContact />
    </div>
  );
}

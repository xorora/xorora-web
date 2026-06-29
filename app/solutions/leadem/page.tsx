import type { Metadata } from "next";
import { LeademPage } from "@/components/solutions/leadem";

export const metadata: Metadata = {
  title: "Lead'em by Xorora — AI-Powered Sales CRM for Google Workspace",
  description:
    "Lead'em replaces scattered Google Sheets with a schema-first CRM that imports any spreadsheet in minutes and qualifies leads with AI.",
  alternates: { canonical: "/solutions/leadem" },
};

export default function Page() {
  return <LeademPage />;
}

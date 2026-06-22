import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal/legal-doc";

export const metadata: Metadata = {
  title: "Privacy Policy | Xorora",
  description:
    "How Xorora collects, uses, and protects your personal information when you use our website and contact us.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      updated="June 23, 2026"
      intro={[
        "This Privacy Policy explains how Xorora (“Xorora”, “we”, “us”, or “our”) collects, uses, and safeguards your information when you visit our website or get in touch with us. By using this site, you agree to the practices described below.",
      ]}
      sections={[
        {
          heading: "Information We Collect",
          body: [
            "Information you provide: when you submit a contact or project inquiry form, we collect details such as your name, email address, company, phone number, and any message or project information you choose to share.",
            "Information collected automatically: like most websites, we may collect technical data such as your IP address, browser type, device information, pages visited, and referring URLs through cookies and similar technologies.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "We use the information we collect to respond to your inquiries, provide and improve our services, communicate with you about projects or proposals, operate and secure our website, and comply with legal obligations.",
            "We do not sell your personal information.",
          ],
        },
        {
          heading: "Cookies and Tracking",
          body: [
            "We use cookies and similar technologies to keep the site working, remember preferences, and understand how the site is used. You can control or disable cookies through your browser settings, though some features may not function properly as a result.",
          ],
        },
        {
          heading: "Third-Party Service Providers",
          body: [
            "We rely on trusted third parties to operate our website and services — for example, hosting and infrastructure providers, database providers, analytics tools, and the providers that power features such as our chat and voice assistant. These providers process data only as needed to perform their services and under appropriate confidentiality obligations.",
          ],
        },
        {
          heading: "Data Retention",
          body: [
            "We retain personal information only for as long as necessary to fulfil the purposes described in this policy, to comply with our legal obligations, resolve disputes, and enforce our agreements.",
          ],
        },
        {
          heading: "Data Security",
          body: [
            "We implement reasonable technical and organizational measures to protect your information against unauthorized access, loss, or misuse. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
          ],
        },
        {
          heading: "Your Rights",
          body: [
            "Depending on your location, you may have rights to access, correct, update, or delete your personal information, to object to or restrict certain processing, and to withdraw consent where processing is based on consent. To exercise these rights, contact us using the details below.",
          ],
        },
        {
          heading: "International Transfers",
          body: [
            "We operate internationally, and your information may be processed in countries other than your own. Where required, we take steps to ensure appropriate safeguards are in place for such transfers.",
          ],
        },
        {
          heading: "Children’s Privacy",
          body: [
            "Our website is not directed to children under the age of 16, and we do not knowingly collect personal information from children.",
          ],
        },
        {
          heading: "Changes to This Policy",
          body: [
            "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last updated” date.",
          ],
        },
        {
          heading: "Contact Us",
          body: [
            "If you have questions about this Privacy Policy or how we handle your information, contact us at info@xorora.com, or by mail at Plot # 606, Block F2, Phase 1 Johar Town, Lahore, 54000, Pakistan.",
          ],
        },
      ]}
    />
  );
}

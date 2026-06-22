import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal/legal-doc";

export const metadata: Metadata = {
  title: "Terms of Service | Xorora",
  description:
    "The terms and conditions that govern your use of the Xorora website and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalDoc
      title="Terms of Service"
      updated="June 23, 2026"
      intro={[
        "These Terms of Service (“Terms”) govern your access to and use of the Xorora website and any related content or features. By accessing or using this site, you agree to be bound by these Terms. If you do not agree, please do not use the site.",
      ]}
      sections={[
        {
          heading: "Use of the Site",
          body: [
            "You may use this site for lawful purposes only. You agree not to misuse the site, interfere with its operation, attempt to gain unauthorized access to any part of it, or use it in any way that could damage, disable, or impair the site or interfere with others’ use of it.",
          ],
        },
        {
          heading: "Intellectual Property",
          body: [
            "All content on this site — including text, graphics, logos, designs, and code — is owned by or licensed to Xorora and is protected by intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from this content without our prior written permission.",
          ],
        },
        {
          heading: "Submissions and Inquiries",
          body: [
            "When you submit information through our contact or project forms, you confirm that the information is accurate and that you have the right to share it. Information you submit is handled in accordance with our Privacy Policy.",
          ],
        },
        {
          heading: "Services and Engagements",
          body: [
            "This website provides general information about Xorora and its services. Nothing on this site constitutes a binding offer. Any engagement to provide services is governed by a separate written agreement between you and Xorora, which will control in the event of any conflict with these Terms.",
          ],
        },
        {
          heading: "Disclaimers",
          body: [
            "This site and its content are provided on an “as is” and “as available” basis without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the site will be uninterrupted, error-free, or secure.",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: [
            "To the fullest extent permitted by law, Xorora and its team will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from your use of or inability to use this site.",
          ],
        },
        {
          heading: "Third-Party Links",
          body: [
            "Our site may contain links to third-party websites or services that we do not control. We are not responsible for the content, policies, or practices of any third-party sites, and accessing them is at your own risk.",
          ],
        },
        {
          heading: "Indemnification",
          body: [
            "You agree to indemnify and hold harmless Xorora from any claims, liabilities, damages, and expenses arising out of your use of the site or your violation of these Terms.",
          ],
        },
        {
          heading: "Governing Law",
          body: [
            "These Terms are governed by the laws of Pakistan, without regard to its conflict-of-law principles. Any disputes arising under these Terms will be subject to the jurisdiction of the courts located in Lahore, Pakistan.",
          ],
        },
        {
          heading: "Changes to These Terms",
          body: [
            "We may revise these Terms from time to time. The updated version will be posted on this page with a new “Last updated” date, and your continued use of the site after changes take effect constitutes acceptance of the revised Terms.",
          ],
        },
        {
          heading: "Contact Us",
          body: [
            "If you have any questions about these Terms, contact us at info@xorora.com, or by mail at Plot # 606, Block F2, Phase 1 Johar Town, Lahore, 54000, Pakistan.",
          ],
        },
      ]}
    />
  );
}

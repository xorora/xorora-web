import { type FaqItem, requireSiteContent } from "@/lib/content";
import { V2ContactClient } from "./v2-contact-client";

export async function V2Contact() {
  const faqs = await requireSiteContent<FaqItem[]>("home:contact-faq");
  return <V2ContactClient faqs={faqs} />;
}

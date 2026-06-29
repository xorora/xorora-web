/**
 * Legacy static-site .html paths → App Router clean URLs.
 * Used by next.config.ts redirects().
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  // Homepage
  "/Homepage V2.html": "/",
  "/Xorora Homepage.html": "/",

  // Company
  "/About Us.html": "/about",
  "/About-Us.html": "/about",
  "/Blog.html": "/blog",
  "/How We Work.html": "/how-we-work",
  "/How-We-Work.html": "/how-we-work",
  "/Industries.html": "/industries",
  "/Our Work.html": "/our-work",

  // Services
  "/Consulting.html": "/consulting",
  "/Engineering.html": "/engineering",
  "/Data & AI.html": "/data-ai",
  "/Managed Services.html": "/managed-services",
  "/Managed Services v2.html": "/managed-services",
  "/Marketing Services.html": "/marketing-services",
  "/Engagement Models.html": "/engagement-models",

  // Industries
  "/Health Tech.html": "/industries/health-tech",
  "/Real Estate.html": "/industries/real-estate",
  "/Fintech.html": "/industries/fintech",
  "/Ecommerce.html": "/industries/ecommerce",
  "/Edtech.html": "/industries/edtech",
  "/Logistics.html": "/industries/logistics",
  "/SaaS.html": "/industries/saas",
  "/Startups.html": "/industries/startups",
  "/Travel & Hospitality.html": "/industries/travel-hospitality",
  "/Travel-Hospitality.html": "/industries/travel-hospitality",

  // Case studies
  "/Unified AI Voice Operations Case Study.html":
    "/case-studies/unified-ai-voice-operations",
  "/Regula Case Study.html": "/case-studies/real-time-compliance-intelligence",
  "/PingPanda Case Study.html": "/case-studies/real-time-saas-event-monitoring",
  "/Xorora Case Study.html": "/our-work",

  // Internal content sources (not public routes; redirect to index)
  "/Case Studies Content.html": "/our-work",
  "/Case Studies Content-print.html": "/our-work",

  // Products
  "/Losono.html": "/solutions/losono",
  "/Clearbeam.html": "/solutions/clearbeam",
  "/Lead'em.html": "/solutions/leadem",
  "/Lead'em v2.html": "/solutions/leadem",
};

function redirectSources(source: string): string[] {
  const encoded = encodeURI(source);
  return encoded === source ? [source] : [source, encoded];
}

/** All legacy path variants (raw + encoded) → destination. Used by proxy.ts. */
const LEGACY_REDIRECT_LOOKUP = new Map<string, string>(
  Object.entries(LEGACY_REDIRECTS).flatMap(([source, destination]) =>
    redirectSources(source).map((variant) => [variant, destination] as const),
  ),
);

/** Resolve a legacy .html pathname to its App Router destination, if any. */
export function getLegacyRedirectDestination(
  pathname: string,
): string | undefined {
  return (
    LEGACY_REDIRECT_LOOKUP.get(pathname) ??
    LEGACY_REDIRECT_LOOKUP.get(decodeURI(pathname))
  );
}

export function legacyRedirectsForNextConfig(): Array<{
  source: string;
  destination: string;
  permanent: true;
}> {
  const seen = new Set<string>();

  return Object.entries(LEGACY_REDIRECTS).flatMap(([source, destination]) =>
    redirectSources(source)
      .filter((variant) => {
        if (seen.has(variant)) return false;
        seen.add(variant);
        return true;
      })
      .map((variant) => ({
        source: variant,
        destination,
        permanent: true as const,
      })),
  );
}

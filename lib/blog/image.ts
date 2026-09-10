/** Display quality for blog feature/hero graphics (text-heavy designs). */
export const BLOG_FEATURE_IMAGE_QUALITY = 90;

/**
 * Post hero sits in a max 1180px frame; request 2x for retina without
 * oversampling beyond available deviceSizes.
 */
export const BLOG_HERO_IMAGE_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1180px) 100vw, 1180px";

/** Listing cards are roughly half-width on desktop. */
export const BLOG_CARD_IMAGE_SIZES =
  "(max-width: 640px) 100vw, (max-width: 960px) 50vw, 380px";

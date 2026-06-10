export interface FaqItem {
  q: string;
  a: string;
}

export interface HomeServicesContent {
  order: string[];
  meta: Record<string, { shape: string; desc: string }>;
}

export type { HwwStep, HwwStepItem } from "@/components/how-we-work/hww-data";

export type HwwFlows = Record<
  "staff" | "dedicated",
  import("@/components/how-we-work/hww-data").HwwStep[]
>;
